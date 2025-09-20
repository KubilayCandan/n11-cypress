Feature: Arama
  Scenario: "dress" araması sonuç döndürür
    Given ana sayfayı açarım
    When "dress" için arama yaparım
    Then arama sonuç başlığını görmeliyim
    And en az bir ürün listelenmiş olmalı