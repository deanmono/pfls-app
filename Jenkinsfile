#!/usr/bin/env groovy

podTemplate(label: 'dcc', containers: [containerTemplate(name: 'nodejs', image: 'node:alpine', ttyEnabled: true, command: 'cat')]) {
  node('dcc') {
    stage('build_and_deploy') {
      container('nodejs') {

	branch = env.BRANCH_NAME
	build_message = "${env.JOB_NAME} -- ${env.BUILD_URL} "

	def slacker = fileLoader.fromGit('groovy/notifySlack.groovy',
					 'https://bitbucket.org/cccdrive/scripts', 'master', BITBUCKET_CREDS, '')

	checkout scm

	// BUILD
	try {
    
	  docker.withRegistry("https://registry.hub.docker.com/",'dockerhub_credentials') {
	    def customImage = docker.build("qorrect/x-ui:${branch}")
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
