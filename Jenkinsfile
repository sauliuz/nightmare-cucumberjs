// example Jenkinsfile for pipeline plugin

node {
   
   // Mark the code checkout 'stage'....
   stage 'First Stage'
   sh 'uname'
   
   // Mark the code checkout 'stage'....
   stage 'Checkout'

   // Get code from this GitHub repository
   checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/popularowl/nightmare-cucumberjs.git']]])

   // Mark the code build 'stage'....
   stage 'Build'
   // Run the maven build
   echo 'running build..'

   // Mark the code build 'stage'....
   stage 'Last Stage'
   echo 'last stage..'
   sh 'validate-test-run.sh'	

}
