#!/usr/bin/env groovy

podTemplate(label: 'dcc',
	    containers: [containerTemplate(name: 'docker-with-curl', image: 'qorrect/docker-with-curl', ttyEnabled: true, command: 'cat')],
	       volumes: [ hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock') ]) {
  node('dcc') {
    stage('build') {
      container('docker-with-curl') {


	sh "printenv"
	branch = env.BRANCH_NAME
	build_message = "${env.JOB_NAME} -- ${env.BUILD_URL} "
        bitbucket_creds = '46830721-b11b-44cf-b8c7-9120c63125c0'
	def slacker = fileLoader.fromGit('groovy/notifySlack.groovy',
					 'https://bitbucket.org/cccdrive/scripts', 'master', bitbucket_creds, '')

	checkout scm

	// BUILD
	try {
	    def build_image_name = "qorrect/x-ui:${branch}"
	  // docker.withRegistry("https://registry.hub.docker.com/",'dockerhub_credentials') {

	  //   def build_image_name = "qorrect/x-ui:${branch}"
	  //   echo "Pushing ${build_image_name}"
	  //   def customImage = docker.build(build_image_name)

	  //   customImage.push()
	  // }


	    sh "npm test"
	    sh "docker build -t ${build_image_name} ."
	    echo "Pushing ${build_image_name}"
	    sh "docker login -u qorrect -p ccc_s4f3 && docker push ${build_image_name}"
	    slacker.notifySlack("BUILD", "SUCCEEDED", currentBuild.durationString, build_message)

	}
	catch (error) {
	  slacker.notifySlack("BUILD", "FAILED", currentBuild.durationString, build_message, error)
	  throw error
	}
      }
    }
  }
}
