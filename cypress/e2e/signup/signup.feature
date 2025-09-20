Feature: Kayıt ve çıkış

  Scenario: Rastgele e-posta ile yeni kullanıcı kaydı ve logout
    Given ana sayfayı açarım
    When Signup - Login sayfasına giderim
    And rastgele e-posta ile kayıt formunu doldurup gönderirim
    Then giriş yapmış olmalıyım
    When çıkış yaparım
    Then tekrar Signup - Login bağlantısını görmeliyim