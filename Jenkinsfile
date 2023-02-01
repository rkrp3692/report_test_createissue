pipeline {
    agent any
    // {
    //     docker {
    //         image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    //     }
    // }
    stages {
        stage('clone') {
            steps {
                // echo 'Clone'
                git branch: 'master', 
                // credentialsId: 'credentail id',
                url: 'https://github.com/rkrp3692/playwright-jenkins.git'
            }
        }


        // stage('install typescript'){
        //     steps {
        //         // sh '''
        //         // npm i -D @playwright/test
        //         // npx playwright install
        //         // '''
        //         echo 'npm i -D typescript',
        //         echo 'npm i -D @types/node'
        //     }
        // }
        // stage('help') {
        //     steps {
        //         sh 'npx playwright test --help'
        //     }
        // }
        stage('test') {
            steps {
                // sh '''
                // npx playwright test --list
                // npx playwright test
                // '''
                //sh 'npm run test'
                echo 'npm run test'
            }
        }

        // stage('Import results to Xray') {

        //     echo paramValue
        //     final String responseKey = sh(script: '''curl YOURURL''', returnStdout: true).trim()
        //     def jsonObj = readJSON text: responseKey
        //     String application = "PARSEOBJ"
        //     echo application

        //     def description = "[BUILD_URL|${env.BUILD_URL}]"
        //     def environment = "DEV"
        //     def testEnvironmentFieldName = "YOURFIELDNAME"
        //     def testExecutionFieldId = YOURID
        //     def testPlanFieldId = YOURID
        //     def issuetypeName = "Test Execution"
        //     def projectKey = "MPREM"
        //     def xrayConnectorId = 'YOURID'

        //     def info = '''{
        //                     "fields": {
        //                         "project": {
        //                             "id": "ID"
        //                         },
        //                         "summary": "Test Execution for Test Plan ''' + paramValue +' '+ env.BUILD_TIME +''' ",
        //                         "issuetype": {
        //                             "id": "ID"
        //                         },
        //                         "CUSTOMFIELD": {
        //                             "id": ""
        //                         }
        //                     },
        //                     "xrayFields": {
        //                             "testPlanKey": "''' + paramValue + '''"
        //                     }
        //                 }'''

        //     echo info
        //     step([$class: 'XrayImportBuilder', endpointName: '/cucumber/multipart', importFilePath: 'target/cucumber.json', importInfo: info, inputInfoSwitcher: 'fileContent', serverInstance: xrayConnectorId])


        // }
    }
    post {
        // success {
        //     archiveArtifacts(archiveArtifacts: 'homepage-*.png',followSymlinks: false)
        //     sh 'rm -rf *.png'
        // }

        // always {
        //     junit 'build/reports/**/*.xml'
        // }

        // always {
        //     cucumber buildStatus: 'UNSTABLE',
        //         failedFeaturesNumber: 1,
        //         failedScenariosNumber: 1,
        //         skippedStepsNumber: 1,
        //         failedStepsNumber: 1,
        //         // classifications: [
        //         //         [key: 'Commit', value: '<a href="${GERRIT_CHANGE_URL}">${GERRIT_PATCHSET_REVISION}</a>'],
        //         //         [key: 'Submitter', value: '${GERRIT_PATCHSET_UPLOADER_NAME}']
        //         // ],
        //         reportTitle: 'My report',
        //         fileIncludePattern: '**/*cucumber-report.json',
        //         // sortingMethod: 'ALPHABETICAL',
        //         // trendsLimit: 100
        // }

        //  failure {

  	    //   echo "Test failed"
        //               cucumber buildStatus: 'FAIL',
        //                            failedFeaturesNumber: 1,
        //                            failedScenariosNumber: 1,
        //                            skippedStepsNumber: 1,
        //                            failedStepsNumber: 1,
        //                            fileIncludePattern: '**/*.json',
        //                            sortingMethod: 'ALPHABETICAL'

        //   slackSend color: 'red', message: "${params.reportname} Tests failed. >> Click to view <$reportUrl|report>"

  	    //  }

  	    //   success {

        //   echo "Test succeeded"
        //              cucumber buildStatus: 'SUCCESS',
        //                                     failedFeaturesNumber: 0,
        //                                     failedScenariosNumber: 0,
        //                                     skippedStepsNumber: 0,
        //                                     failedStepsNumber: 0,
        //                                     fileIncludePattern: '**/*.json',
        //                                     sortingMethod: 'ALPHABETICAL'

        //   slackSend color: 'green', message: "${params.reportname} Tests passed. >> Click to view <$reportUrl|report>"

        //   }

always {
            cucumber buildStatus: 'SUCCESS',
            fileIncludePattern: '**/*.json',
            sortingMethod: 'ALPHABETICAL'
        }





    }



//  post { 
//     always { 
//         publishHTML([ allowMissing: false,  
//         alwaysLinkToLastBuild: true,  
//         keepAll: true,  
//         reportDir: 'playwright-report',  
//         reportFiles: 'index.html',  
//         reportName: 'Playwright Test Report',  
//         reportTitles: '']) 
//         } 
//         }



}