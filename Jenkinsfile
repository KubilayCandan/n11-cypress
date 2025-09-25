pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/KubilayCandan/n11-cypress.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx cypress install'
            }
        }
        stage('Run Cypress Tests & Generate Reports') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        always {
            // JUnit test raporlarını yükle
            junit 'cypress/results/junit/*.xml'

            // HTML raporu yayınla
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/results/mochawesome',
                reportFiles: 'mochawesome.html',
                reportName: 'Cypress HTML Report'
            ])

            // Cypress video ve screenshot klasörlerini arşivle
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}