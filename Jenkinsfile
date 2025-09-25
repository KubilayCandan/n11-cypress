pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Kodlar çekiliyor...'
                git branch: 'main', url: 'https://github.com/KubilayCandan/n11-cypress.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 NPM bağımlılıkları yükleniyor...'
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                echo '🧪 Cypress testleri çalıştırılıyor...'
                bat 'npm test'
            }
        }
    }

    post {
        always {
            echo '📊 Test raporları ve artefaktlar hazırlanıyor...'

            // JUnit XML raporlarını Jenkins'e yükle
            junit 'cypress/results/*.xml'

            // Mochawesome HTML raporunu yayınla
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/results/mochawesome',
                reportFiles: 'mochawesome.html',
                reportName: 'Cypress HTML Report'
            ])

            // Cypress video ve screenshot'ları arşivle
            archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**', allowEmptyArchive: true
        }
    }
}