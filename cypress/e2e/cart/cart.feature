Feature: Sepet İşlemleri

  Scenario: Kullanıcı ürün ekler ve çıkış yapar
    Given ana sayfayı açarım
    When ürünü sepete ekledim
    Then ürün sepetimde görünmeli
    When çıkış yaparım
    Then tekrar Signup \/ Login bağlantısını görmeliyim