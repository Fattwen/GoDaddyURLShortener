# GoDaddyURLShortener
使用GoDaddy 短網址API 建立屬於自己網域的短網址生產器

<img src="https://imgur.com/PUXnNfF.png"  width="400">

前往GoDaddy短網址服務：<https://shortener.godaddy.com/> (必須要有GoDaddy域名，並且到管理頁面設定好DNS)<br>
<img src="https://imgur.com/yOVujoM.png"  width="400">

登入後到Settings頁面按New API Key 建立 Your API KEY 把它存起來<br>
<img src="https://imgur.com/6620Oyp.png"  width="400">

修改 `trans.php` 的 `CURLOPT_URL` <br>
把Your API KEY 填入 `[your API key]` , 你的域名 填入  `[your domain]` , `[]`記得要拿掉
```php
原本的
CURLOPT_URL => 'https://shortener.godaddy.com/v1/?apikey=[your API key]&domain=[your doamin]&url='.$originUrl ,
改成這樣(範例)
CURLOPT_URL => 'https://shortener.godaddy.com/v1/?apikey=abcdfjoktorkgrrh&domain=thisissample.com&url='.$originUrl ,
```
這樣就好囉
