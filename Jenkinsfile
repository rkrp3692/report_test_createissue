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
                echo 'Clone'
                git branch: 'master', 
                credentialsId: 'credentail id',
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
    }
}