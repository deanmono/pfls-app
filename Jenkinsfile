#!/usr/bin/env groovy

podTemplate(label: 'dcc',
	    containers: [containerTemplate(name: 'slack', image: 'qorrect/docker-with-curl', ttyEnabled: true, command: 'cat')],
	       volumes: [ hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock') ]) {
  node('dcc') {
    stage('build') {
      container('slack') {

	sh "git rev-parse --short HEAD > .git/commit-id"                        
	commit_id = readFile('.git/commit-id')
	sh "printenv"
	branch = env.BRANCH_NAME
	build_message = "${env.JOB_NAME} -- ${env.BUILD_URL} "
        bitbucket_creds = '46830721-b11b-44cf-b8c7-9120c63125c0'
	def slacker = fileLoader.fromGit('groovy/notifySlack.groovy',
					 'https://bitbucket.org/cccdrive/scripts', 'master', bitbucket_creds, '')

	checkout scm

	// BUILD
	try {
    
	  docker.withRegistry("https://registry.hub.docker.com/",'dockerhub_credentials') {
	    def build_image_name = "qorrect/x-ui:${branch}"
	    def customImage = docker.build(build_image_name)
	    echo "Pushing ${build_image_name}"
	    customImage.push()
	  }

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
