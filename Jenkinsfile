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
                // junit '**/build/test-results/test/*.xml'
            }
        }



        // stage('Deploy'){
        //     steps {

        //     }
        // }

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

}