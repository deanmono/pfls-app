#!/usr/bin/env groovy

podTemplate(label: 'dcc',
        containers: [containerTemplate(name: 'ngc', image: 'qorrect/ngc_build', ttyEnabled: true, command: 'cat')],
        volumes: [hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock')]) {
    node('dcc') {
        container('ngc') {
            def branch = env.BRANCH_NAME
            def build_image_name = "qorrect/x-ui:${branch}"
            def build_message = "${env.JOB_NAME} -- ${env.BUILD_URL} "

            def bitbucket_creds = '46830721-b11b-44cf-b8c7-9120c63125c0'
            def docker_creds = 'dockerhub_credentials'

            def slacker = fileLoader.fromGit('groovy/notifySlack.groovy',
                    'https://bitbucket.org/cccdrive/scripts', 'master', bitbucket_creds, '')

            stage('build') {
                checkout scm
            }
            stage('test') {
                try {
                    sh "npm install && npm run jest"
                    slacker.notifySlack("TEST", "SUCCEEDED", currentBuild.durationString, build_message, error)
                }
                catch (error) {
                    slacker.notifySlack("TEST", "FAILED", currentBuild.durationString, build_message, error)
                    throw error
                }
            }
            stage('deploy') {

                try {
                    // docker.withRegistry("https://registry.hub.docker.com/",docker_creds) {
                    //   def customImage = docker.build(build_image_name)
                    //   customImage.push()
                    // }

                    sh "docker build -t ${build_image_name} ."
                    sh "docker login -u qorrect -p ccc_s4f3 && docker push ${build_image_name}"
                    slacker.notifySlack("DEPLOY", "SUCCEEDED", currentBuild.durationString, build_message)

                }
                catch (error) {
                    slacker.notifySlack("DEPLOY", "FAILED", currentBuild.durationString, build_message, error)
                    throw error
                }
            }
        }
    }
}

