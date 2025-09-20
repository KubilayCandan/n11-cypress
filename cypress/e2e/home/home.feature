Feature: Home page
  Scenario: Ana sayfa açılır ve temel öğeler görünür
    Given ana sayfayı açarım
    Then sayfa başlığında "Automation Exercise" görmeliyim
    And "Home" bağlantısını görmeliyim
    And "Test Cases" bağlantısını görmeliyim