pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/KubilayCandan/n11-cypress.git'
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
            // 📌 JUnit XML raporlarını Jenkins'e aktar
            junit 'cypress/results/junit/*.xml'

            // 📌 Mochawesome HTML raporunu Jenkins'te yayınla
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/results/mochawesome',
                reportFiles: 'mochawesome.html',
                reportName: 'Cypress HTML Report'
            ])
        }post {
    always {
        // JUnit raporlarını topla
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

        // ✅ Screenshot ve video klasörlerini artifact olarak arşivle
        archiveArtifacts artifacts: 'cypress/screenshots/**/*.*, cypress/videos/**/*.*', fingerprint: true
    }
}
    }
}