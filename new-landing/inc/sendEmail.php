<?php

$name          = $_POST['name'];
$budget		   = $_POST['budget'];
$country       = $_POST['country'];
$number_people = $_POST['number_people'];
$number_days   = $_POST['number_days'];
$phone         = $_POST['phone'];
$id			   = $_POST['id'];
$select        = $_POST['select'];
$email         = $_POST['email'];

	$array_region = array(
		'0' => 'Вінницька',
		'1' => 'Волинська',
		'2' => 'Дніпропетровська',
		'3' => 'Донецька',
		'4' => 'Житомирська',
		'5' => 'Закарпатська',
		'6' => 'Запорізька',
		'7' => 'Івано-Франківська',
		'8' => 'Київська',
		'9' => 'Кіровоградська',
		'10'=> 'Луганська',
		'11'=> 'Львівська',
		'12'=> 'Миколаївська',
		'13'=> 'Одеська',
		'14'=> 'Полтавська',
		'15'=> 'Рівненська',
		'16'=> 'Сумська',
		'17'=> 'Тернопільська',
		'18'=> 'Харківська',
		'19'=> 'Херсонська',
		'20'=> 'Хмельницька',
		'21'=> 'Черкаська',
		'22'=> 'Чернівецька',
		'23'=> 'Чернігівська');

	$array_email = array(
						'0' => array(									//Маленька форма
							'0' => array(	"a.shumanskaya@tui.ua",
											"y.nezdolii@tui.ua  "),		//Вінницька
							'1' => array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"), 		//Волинська
							'2' => array(	"y.zheleznaya@tui.ua",
											"yu.grigoryeva@tui.ua"),	//Дніпропетровська
							'3' => array(	"y.zheleznaya@tui.ua",
											"yu.grigoryeva@tui.ua"),	//Донецька
							'4' => array(	"v.iamkova@tui.ua",
											"a.radchenko@tui.ua",
											"kiev034@tui.ua",
											"y.zalyubovskaya@tui.ua",
											"kiev370@tui.ua",
											"m.zabashtanska@tui.ua",
											"v.klintsova@tui.ua",
											"n.dashkovskaya@tui.ua",
											"o.dekhtiar@tui.ua" ), 		//Житомирська
							'5' => array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"), 		// Закарпатська
							'6' => array(	"zaporozh010@tui.ua",
											"zaporozh011@tui.ua",
											"m.boncheva@tui.ua"), 		//Запорізька
							'7' => array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Івано-Франківська
							'8' => array(	"v.iamkova@tui.ua",
											"a.radchenko@tui.ua",
											"kiev034@tui.ua",
											"y.zalyubovskaya@tui.ua",
											"kiev370@tui.ua",
											"m.zabashtanska@tui.ua",
											"v.klintsova@tui.ua",
											"n.dashkovskaya@tui.ua",
											"o.dekhtiar@tui.ua"),		//Київська
							'9' => 'Кіровоградська',
							'10'=> array(	"y.zheleznaya@tui.ua",
											"yu.grigoryeva@tui.ua"),	//Луганська
							'11'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Львівська
							'12'=> array(	"a.shumanskaya@tui.ua",
											"y.nezdolii@tui.ua"),		//Миколаївська
							'13'=> array(	"a.shumanskaya@tui.ua",
											"y.nezdolii@tui.ua  "),		//Одеська		
							'14'=> array(	"kharkov031@tui.ua",
											"kharkov030@tui.ua",
											"kharkov091@tui.ua",
											"o.makhonina@tui.ua",
											"t.sidorenko@tui.ua"),		//Полтавська
							'15'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),
							'16'=> array(	"kharkov031@tui.ua",
											"kharkov030@tui.ua",
											"kharkov091@tui.ua",
											"o.makhonina@tui.ua",
											"t.sidorenko@tui.ua"),		//Сумська
							'17'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Тернопільська	
							'18'=> array(	"kharkov031@tui.ua",
											"kharkov030@tui.ua",
											"kharkov091@tui.ua",
											"o.makhonina@tui.ua",
											"t.sidorenko@tui.ua"),		//Харківська
							'19'=> array(	"y.zheleznaya@tui.ua",
											"yu.grigoryeva@tui.ua"),	//Херсонська
							'20'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Хмельницька
							'21'=> array(	"v.iamkova@tui.ua",
											"a.radchenko@tui.ua",
											"kiev034@tui.ua",
											"y.zalyubovskaya@tui.ua",
											"kiev370@tui.ua",
											"m.zabashtanska@tui.ua",
											"v.klintsova@tui.ua",
											"n.dashkovskaya@tui.ua",
											"o.dekhtiar@tui.ua" ),		//Черкаська
							'22'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Чернівецька
							'23'=> array(	"v.iamkova@tui.ua",
											"a.radchenko@tui.ua",
											"kiev034@tui.ua",
											"y.zalyubovskaya@tui.ua",
											"kiev370@tui.ua",
											"m.zabashtanska@tui.ua",
											"v.klintsova@tui.ua",
											"n.dashkovskaya@tui.ua",
											"o.dekhtiar@tui.ua" )		//Чернігівська
						),
						'1' => array(									//Велика форма
							'0' => array(	"a.shumanskaya@tui.ua",
											"y.nezdolii@tui.ua  "),		//Вінницька
							'1' => array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"), 		//Волинська
							'2' => array(	"rt@kiev.tui.ua"),			//Дніпропетровська
							'3' => array(	"y.zheleznaya@tui.ua",
											"yu.grigoryeva@tui.ua"),	//Донецька
							'4' => array(	"v.iamkova@tui.ua",
											"a.radchenko@tui.ua",
											"kiev034@tui.ua",
											"y.zalyubovskaya@tui.ua",
											"kiev370@tui.ua",
											"m.zabashtanska@tui.ua",
											"v.klintsova@tui.ua",
											"n.dashkovskaya@tui.ua",
											"o.dekhtiar@tui.ua" ), 		//Житомирська
							'5' => array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"), 		// Закарпатська
							'6' => array(	"zaporozh010@tui.ua",
											"zaporozh011@tui.ua",
											"m.boncheva@tui.ua"), 		//Запорізька
							'7' => array(	"rt@kiev.tui.ua"),			//Івано-Франківська
							'8' => array(	"rt@kiev.tui.ua"),			//Київська
							'9' => array(	"rt@kiev.tui.ua"),			//Кіровоградська
							'10'=> array(	"y.zheleznaya@tui.ua",
											"yu.grigoryeva@tui.ua"),	//Луганська
							'11'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Львівська
							'12'=> array(	"a.shumanskaya@tui.ua",
											"y.nezdolii@tui.ua"),		//Миколаївська
							'13'=> array(	"rt@kiev.tui.ua"),			//Одеська		
							'14'=> array(	"kharkov031@tui.ua",
											"kharkov030@tui.ua",
											"kharkov091@tui.ua",
											"o.makhonina@tui.ua",
											"t.sidorenko@tui.ua"),		//Полтавська
							'15'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),
							'16'=> array(	"kharkov031@tui.ua",
											"kharkov030@tui.ua",
											"kharkov091@tui.ua",
											"o.makhonina@tui.ua",
											"t.sidorenko@tui.ua"),		//Сумська
							'17'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Тернопільська	
							'18'=> array(	"kharkov031@tui.ua",
											"kharkov030@tui.ua",
											"kharkov091@tui.ua",
											"o.makhonina@tui.ua",
											"t.sidorenko@tui.ua"),		//Харківська
							'19'=> array(	"y.zheleznaya@tui.ua",
											"yu.grigoryeva@tui.ua"),	//Херсонська
							'20'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Хмельницька
							'21'=> array(	"v.iamkova@tui.ua",
											"a.radchenko@tui.ua",
											"kiev034@tui.ua",
											"y.zalyubovskaya@tui.ua",
											"kiev370@tui.ua",
											"m.zabashtanska@tui.ua",
											"v.klintsova@tui.ua",
											"n.dashkovskaya@tui.ua",
											"o.dekhtiar@tui.ua" ),		//Черкаська
							'22'=> array(	"v.derevyanyy@tui.ua",
											"s.shpilman@tui.ua",
											"k.kishyk@tui.ua"),			//Чернівецька
							'23'=> array(	"v.iamkova@tui.ua",
											"a.radchenko@tui.ua",
											"kiev034@tui.ua",
											"y.zalyubovskaya@tui.ua",
											"kiev370@tui.ua",
											"m.zabashtanska@tui.ua",
											"v.klintsova@tui.ua",
											"n.dashkovskaya@tui.ua",
											"o.dekhtiar@tui.ua" )		//Чернігівська
						)
	);

$email_region = $array_email[$id][$select];

if(isset($phone))
{

	if($id == 0)
	{
		$text = "З landing сторінки 'НЕЗАБУТНІЙ ВІДПОЧИНОК В ТУРЕЧЧИНІ' залишив свої контактні дані: 
		Ім'я клієнта: ".$name.";
		Область: ".$array_region[$select].";
		Телефон: ".$phone.".";
	}
	if($id == 1)
	{
		$text = 'З landing сторінки "НЕЗАБУТНІЙ ВІДПОЧИНОК В ТУРЕЧЧИНІ" було зроблено замовлення на підбір туру:
		Ім`я клієнта: '.$country.';
		Бюджет: '.$budget.';
		Кількість людей: '.$number_people.';
		Кількість днів: '.$number_days.';
		Область: '.$array_region[$select].';
		Телефон: '.$phone.';
		Почта: '.$email.'.';

	}

	$login    = 'landing@tui.ru'; // замените test@domain.tld на адрес электронной почты, с которого производится отправка. Поскольку логин совпадает с адресом отправителя - данная переменная используется и как логин, и как адрес отправителя.

	$password = '1qazxsw@345';  // Замените 'password' на пароль от почтового ящика, с которого производится отправка.
	//$to       = 'online@tui.ua, krolevetskaya.t@web-promo.com.ua, a.kardash@web-promo.ua, dima.rudenko@web-promo.com.ua, a.savina@web-promo.com.ua, tkach@web-promo.ua';
	$array    = array("krolevetskaya.t@web-promo.com.ua","a.kardash@web-promo.ua","a.savina@web-promo.com.ua","tkach@web-promo.ua");
	
	if(isset($email_region))
	{
		$array = array_merge ($array, $email_region);
	}
	
	function get_data($smtp_conn)  // функция получения кода ответа сервера.
	{
		$data = "";
		while($str = fgets($smtp_conn,515)){
			$data .= $str;
			if(substr($str,3,1) == " ")
			{
				break;
			}
		}
		return $data;
	}

	foreach($array as $to){

		// формируем служебный заголовок письма.
		$header = "Date: ".date("D, j M Y G:i:s")." +0700\r\n";
		$header .= "From: =?UTF-8?Q?".str_replace("+","_",str_replace("%","=",urlencode('Нова заявка з landing сторінки "НЕЗАБУТНІЙ ВІДПОЧИНОК В ТУРЕЧЧИНІ"')))."?= <$login>\r\n";
		$header .= "X-Mailer: Test script hosting Ukraine.com.ua \r\n";
		$header .= "Reply-To: =?UTF-8?Q?".str_replace("+","_",str_replace("%","=",urlencode('Нова заявка з landing сторінки "НЕЗАБУТНІЙ ВІДПОЧИНОК В ТУРЕЧЧИНІ"')))."?= <$login>\r\n";
		$header .= "X-Priority: 3 (Normal)\r\n";
		$header .= "Message-ID: <12345654321.".date("YmjHis")."@ukraine.com.ua>\r\n";
		$header .= "To: =?UTF-8?Q?".str_replace("+","_",str_replace("%","=",urlencode('Получателю тестового письма')))."?= <$to\r\n";
		$header .= "Subject: =?UTF-8?Q?".str_replace("+","_",str_replace("%","=",urlencode('Нова заявка з landing сторінки "НЕЗАБУТНІЙ ВІДПОЧИНОК В ТУРЕЧЧИНІ')))."?=\r\n";
		$header .= "MIME-Version: 1.0\r\n";
		$header .= "Content-Type: text/plain; charset=UTF-8\r\n";
		$header .= "Content-Transfer-Encoding: 8bit\r\n";
		$smtp_conn = fsockopen("antispam.tui.ru", 25,$errno, $errstr, 10); //соединяемся с почтовым сервером mail.ukraine.com.ua , порт 25 .

		fputs($smtp_conn,"EHLO antispam.tui.ru\r\n"); // начинаем приветствие.
		fputs($smtp_conn,"AUTH LOGIN\r\n"); // начинаем процедуру авторизации.
		fputs($smtp_conn,base64_encode("$login")."\r\n"); // отправляем серверу логин от почтового ящика (на хостинге "Украина" он совпадает с именем почтового ящика).
		fputs($smtp_conn,base64_encode("$password")."\r\n");       // отправляем серверу пароль.
		fputs($smtp_conn,"MAIL FROM:$login\r\n"); // отправляем серверу значение MAIL FROM.
		fputs($smtp_conn,"RCPT TO:$to\r\n"); // отправляем серверу адрес получателя.
		fputs($smtp_conn,"DATA\r\n"); // отправляем команду DATA.
		fputs($smtp_conn,$header."\r\n".$text."\r\n.\r\n"); // отправляем тело письма.

		fputs($smtp_conn,"QUIT\r\n");   // завершаем отправку командой QUIT.
		fclose($smtp_conn); // закрываем соединение.

	}

}