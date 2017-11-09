node {

  def branch = 'NGC-146-create-docker-image-for-x-ui'
  stage ('build docker image' ) {
        git branch: branch, 
        credentialsId: 'BITBUCKET_CREDS', 
        url: 'https://csanders_cccis@bitbucket.org/cccdrive/x-ui.git'
        
        
        def customImage = docker.build("qorrect/x-ui:${env.BUILD_ID}")
        customImage.push()

      
  }

}
