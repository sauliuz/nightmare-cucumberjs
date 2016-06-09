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
   stage 'Install dependencies'
   // Install npm dependencies
   sh 'npm install'

   // Testing stage
   stage 'Testing Stage'
   // running virtual xvfb for Electron tests
   sh 'xvfb-run --server-args="-screen 0 1024x768x24" grunt test'

   // Mark the code 'last stage'....
   stage 'Last Stage'
   echo 'last stage..'
   sh './validate-test-run.sh'	

}
