pipeline {
    agent any
    // {
    //     docker {
    //         image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    //     }
    // }
    stages {
        stage('install playwright'){
            steps {
                // sh '''
                // npm i -D @playwright/test
                // npx playwright install
                // '''
                sh 'npm i'
            }
        }
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
                sh 'npm run test'
            }
        }
    }
}