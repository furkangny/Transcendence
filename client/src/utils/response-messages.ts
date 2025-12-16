// Authentication servisi yanıt mesajları
export const LoginRes: Record<string, string> = {
  INVALID_CREDENTIALS:
    "Girdiğin bilgiler hatalı. Lütfen kontrol edip tekrar dene.",
  USER_ALREADY_LINKED:
    "Bu hesap zaten 42 veya Google ile bağlanmış. Lütfen o yöntemle giriş yap.",
  INVALID_PASSWORD:
    "Şifre yanlış. Tekrar denemeye ne dersin?",
  FST_ERR_VALIDATION:
    "Girdiğin bilgilerde eksik veya hata var. Kontrol etmelisin.",
  USER_LOGGED_IN: "Hoş geldin! Giriş başarılı.",
  TWOFA_REQUIRED:
    "İki aşamalı doğrulama gerekli. Hadi şu işi halledelim.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const RegisterRes: Record<string, string> = {
  UNMATCHED_PASSWORDS:
    "Şifreler eşleşmiyor. Tekrar girmeyi dene.",
  PASSWORD_POLICY:
    "Şifren çok zayıf: En az 8 karakter, büyük/küçük harf, sayı ve özel karakter içermeli.",
  USER_EXISTS: "Bu kullanıcı zaten kayıtlı. Giriş yapmayı dene.",
  FST_ERR_VALIDATION:
    "Girdiğin bilgilerde eksik veya hata var. Kontrol etmelisin.",
  USER_REGISTERED: "Aramıza hoş geldin! Hesabını kullanmak için giriş yap.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const LostPasswordRes: Record<string, string> = {
  INVALID_EMAIL:
    "Bu e-posta adresiyle kayıtlı bir hesap bulamadık. Tekrar kontrol et.",
  USER_LINKED:
    "Bu hesap sosyal medya ile bağlı. Lütfen o yöntemle giriş yap.",
  CODE_SENT: "Kurtarma kodu gönderildi! E-posta kutunu kontrol et.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const VerifyCodeRes: Record<string, string> = {
  CODE_NOT_SET:
    "Doğrulama kodu hatalı ayarlanmış. Tekrar dene.",
  UNAUTHORIZED:
    "Önce kimliğini doğrulamalısın. Kayıtsız giriş yapılamaz.",
  OTP_REQUIRED: "OTP kodu gerekli. Devam etmek için kodu gir.",
  OTP_INVALID:
    "Girdiğin kod geçersiz. Kontrol edip tekrar dene.",
  CODE_VERIFIED:
    "Kod doğrulandı. Şifre yenileme ekranına yönlendiriliyorsun.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const UpdatePasswordRes: Record<string, string> = {
  USER_LINKED:
    "Bu hesap zaten 42 veya Google ile bağlı. Lütfen o yöntemle giriş yap.",
  UNMATCHED_PASSWORDS:
    "Yeni şifreler eşleşmiyor. Kontrol edip tekrar dene.",
  UNAUTHORIZED:
    "Şifreni güncellemek için geçerli bir bağlantı veya kod lazım.",
  TOKEN_REQUIRED: "Şifre güncellemek için reset token gerekli.",
  USER_LOGGED_IN:
    "Şifren yenilendi. Güvenle oyuna dönebilirsin.",
  TWOFA_REQUIRED:
    "İki aşamalı doğrulama gerekli. Doğrulama yapıp devam edelim.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const Setup2FaRes: Record<string, string> = {
  UNAUTHORIZED: "Yetkisiz işlem. 2FA kurmak için giriş yapmalısın.",
  TWOFA_ALREADY_ENABLED:
    "İki aşamalı doğrulama bu hesapta zaten aktif.",
  TWOFA_ALREADY_PENDING:
    "Zaten kurulum aşamasındasın. İşlemi tamamla.",
  SCAN_QR:
    "2FA'yı aktif etmek için QR kodunu authenticator uygulamasıyla tarat.",
  CODE_SENT: "2FA kodu e-posta ile gönderildi. Kodu gir ve tamamla.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const Verify2FaRes: Record<string, string> = {
  TWOFA_NOT_SET:
    "İki aşamalı doğrulama henüz kurulu değil. Önce güvenliği sağla.",
  TWOFA_ALREADY_ENABLED:
    "İki aşamalı doğrulama zaten aktif.",
  TWOFA_NOT_ENABLED: "2FA henüz aktif edilmemiş. Önce kurulum yap.",
  UNAUTHORIZED: "Yetkisiz işlem. 2FA doğrulamak için giriş yapmalısın.",
  OTP_REQUIRED: "OTP kodu gerekli. Devam etmek için kodu gir.",
  OTP_INVALID: "Geçersiz OTP kodu. Tekrar dene.",
  TWOFA_ENABLED:
    "İki aşamalı doğrulama başarıyla aktif edildi. Güvenlik seviyesi arttı!",
  USER_LOGGED_IN: "Hoş geldin! Giriş başarılı.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const Change2FaStateRes: Record<string, string> = {
  UNAUTHORIZED: "Erişim reddedildi. 2FA'yı kapatmak için giriş yapmalısın.",
  METHOD_NOT_ENABLED:
    "Bu yöntem şu an devre dışı. Önce etkinleştir.",
  METHOD_DISABLED: "Bu 2FA yöntemi devre dışı bırakıldı. Artık onsuz girebilirsin.",
  METHOD_ENABLED: "Harika! Bu iki aşamalı doğrulama yöntemi artık aktif.",
  PRIMARY_METHOD_UPDATED:
    "Tamamdır! Birincil 2FA yöntemin güncellendi.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const DeleteAccountRes: Record<string, string> = {
  UNAUTHORIZED: "Yetkisiz işlem. Hesabını silmek için giriş yapmalısın.",
  USER_DATA_DELETED:
    "Hesabın silindi. Seni özleyeceğiz!",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const UpdateCredentialsRes: Record<string, string> = {
  PASSWORDS_REQUIRED:
    "Devam etmek için hem eski hem de yeni şifreni girmelisin.",
  INVALID_PASSWORD:
    "Eski şifren hatalı. Tekrar dene.",
  UNMATCHED_PASSWORDS:
    "Yeni şifreler birbiriyle uyuşmuyor. Tekrar kontrol et.",
  SAME_PASSWORD:
    "Yeni şifren eskisiyle aynı olamaz.",
  PASSWORD_POLICY:
    "Şifre çok basit: En az 8 karakter, büyük/küçük harf, sayı ve özel karakter lazım.",
  EMAIL_EXISTS:
    "Bu e-posta zaten kullanımda. Başka bir tane dene.",
  UNAUTHORIZED:
    "Bilgilerini güncellemek için giriş yapmalısın.",
  PASSWORD_UPDATED:
    "Şifren başarıyla güncellendi! Devam etmek için lütfen tekrar giriş yap.",
  EMAIL_UPDATED:
    "E-posta adresin güncellendi. Artık buradan haberleşeceğiz!",
  TWOFA_REQUIRED:
    "İki aşamalı doğrulama gerekli. Hızlıca doğrulayıp bitirelim.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const VerifyUpdateCredentialsRes: Record<string, string> = {
  NO_PENDING_CREDENTIALS:
    "Güncellenecek bekleyen bir bilgi yok. İsteğini kontrol et.",
  TWOFA_NOT_SET:
    "İki aşamalı doğrulama kurulu değil. Güncelleme yapmadan önce kurmalısın.",
  TWOFA_NOT_ENABLED:
    "İki aşamalı doğrulama aktif değil. Lütfen önce etkinleştir.",
  EMAIL_EXISTS:
    "Bu e-posta başka bir hesapta kullanılıyor. Lütfen farklı bir e-posta dene.",
  UNAUTHORIZED:
    "Yetkisiz işlem. Bilgilerini güncellemek için giriş yapmalısın.",
  OTP_REQUIRED:
    "OTP kodu gerekli. Lütfen uygulamana veya e-postana gelen kodu gir.",
  OTP_INVALID:
    "Girdiğin kod geçersiz. Kontrol edip tekrar dene.",
  PASSWORD_UPDATED:
    "Şifren güncellendi ve güvenliğin sağlandı. Lütfen tekrar giriş yap.",
  EMAIL_UPDATED:
    "E-posta adresin başarıyla güncellendi.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

// Kullanıcı profili servisi yanıt mesajları
export const UpdateUserProfileRes: Record<string, string> = {
  UNAUTHORIZED: "Yetkisiz işlem. Profilini güncellemek için giriş yapmalısın.",
  PROFILE_NOT_FOUND: "Profil bulunamadı. Lütfen isteğini kontrol et.",
  USERNAME_EXISTS:
    "Bu kullanıcı adı başkası tarafından alınmış. Başka bir tane seç!",
  MISSING_FIELDS: "Tüm alanları doldurmalısın.",
  FST_ERR_VALIDATION:
    "Girdiğin bilgilerde hata var. Kontrol edip tekrar dene.",
  ZERO_CHANGES: "Hiçbir değişiklik yapmadın. Kaydetmeden önce bir şeyleri değiştir!",
  PROFILE_UPDATED: "Profilin başarıyla güncellendi.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const UploadAvatarRes: Record<string, string> = {
  FILE_REQUIRED: "Lütfen yüklemek için bir resim seç.",
  AVATAR_UPLOADED: "Profil resmin yüklendi. Harika görünüyorsun!",
  FILE_TOO_LARGE: "Dosya boyutu çok büyük. Lütfen daha küçük bir resim seç.",
  UNSUPPORTED_FILE_TYPE:
    "Bu dosya türü desteklenmiyor. Lütfen uygun bir format seç.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

// Arkadaşlık/İlişki servisi yanıt mesajları
export const FriendRequestRes: Record<string, string> = {
  ADDRESSEE_REQUIRED: "İstek göndereceğin kişiyi seçmelisin.",
  ADDRESSEE_INVALID: "Oyuncu bulunamadı. ID'yi kontrol et.",
  FRIEND_REQUEST_ALREADY_SENT:
    "Bu kişiye zaten arkadaşlık isteği gönderdin.",
  FRIEND_REQUEST_SENT: "Arkadaşlık isteği gönderildi. Cevap bekleniyor.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const FriendAcceptRes: Record<string, string> = {
  REQUESTER_REQUIRED:
    "İstek gönderen bilgisi eksik. Sayfayı yenilemeyi dene.",
  REQUESTER_INVALID: "İstek gönderen doğrulanamadı. Bir sorun var gibi.",
  FRIEND_REQUEST_ACCEPTED: "Artık arkadaşsınız!",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const FriendRejectRes: Record<string, string> = {
  REQUESTER_REQUIRED: "Cevap vermek için bir istek sahibi belirtilmeli.",
  REQUESTER_INVALID: "Geçersiz istek kaynağı. Tekrar kontrol et.",
  FRIEND_REQUEST_REJECTED: "Arkadaşlık isteğini nazikçe reddettin.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const FriendRemoveRes: Record<string, string> = {
  FRIEND_REQUIRED: "Kimi silmek istediğini belirtmelisin.",
  FRIEND_INVALID: "Bu kullanıcıyı bulamadık. Tekrar dene.",
  FRIEND_REMOVED: "Arkadaş listenden çıkarıldı.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const FriendBlockRes: Record<string, string> = {
  BLOCKED_REQUIRED:
    "Engellemek istediğin kişiyi seç.",
  BLOCKED_INVALID: "Bu kullanıcıyı bulamadık. Lütfen tekrar dene.",
  BLOCKED_EXISTS: "Bu kişi zaten engelli listesinde.",
  BLOCK_SUCCESS: "Kullanıcı engellendi. Artık seni rahatsız edemez.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const FriendUnblockRes: Record<string, string> = {
  BLOCKED_REQUIRED: "Engelini kaldırmak istediğin kişiyi belirt.",
  BLOCKED_INVALID: "Bu kullanıcı doğrulanamadı. Tekrar kontrol et.",
  BLOCKED_NOT_FOUND: "Bu kullanıcı şu an engelli değil.",
  UNBLOCK_SUCCESS: "Engel kaldırıldı, artık iletişim kurabilirsiniz.",
  INTERNAL_SERVER_ERROR:
    "Sunucuda geçici bir sorun var. Birazdan tekrar dene.",
};

export const TokenErrorRes: Record<string, string> = {
  TOKEN_REQUIRED: "Devam etmek için doğrulama token'ı gerekli.",
  TEMP_TOKEN_EXPIRED:
    "Geçici erişim süren doldu. Lütfen yeni bir tane iste.",
  TEMP_TOKEN_INVALID:
    "Geçici erişim kodu geçersiz. Kontrol edip tekrar dene.",
  ACCESS_TOKEN_EXPIRED: "Oturum süren doldu. Lütfen tekrar giriş yap.",
  ACCESS_TOKEN_INVALID:
    "Geçersiz oturum. Lütfen tekrar giriş yap.",
};
