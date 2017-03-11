define(['jquery','jqueryCookie','nprogress'], function($,underfined,nprogress) {

	/**
	 * չʾ�û�����ʷ��½ͷ��
	 * 1����ȡuserInfo���cookieֵ
	 * 2����cookie�ַ���ת��Ϊ����
	 * 3�����õ�½ҳ��images-srcΪ�����е�tc_avatar����ֵ�����û�и�һ��Ĭ��ͷ��ĵ�ַ
	 */
	var user=null;
	try{
		user =JSON.parse($.cookie('user'));
	}catch(e){
		user = {};
	}
	$('.login .avatar images').attr('src', user.tc_avatar? user.tc_avatar: '/images/monkey.png')


	/*
	 * 1���ȼ���form�����ύ�¼���
	 * 2���¼��ص���return false��ֹĬ�ϵ��ύ
	 * 3���¼��ص���ͨ��ajax�ķ�ʽ���ͱ�����
	 * 4��������ؽ���е�codeΪ200��֤����½�ɹ�����ת����ҳ
	 * */



	$('#form-login').on('submit', function () {
		$.ajax({
			url:'/v6/login',
			type:'post',
			data:$(this).serialize(),
			success:function (data){

			// �����½�ɹ���ʹ��cookie�ķ�ʽ�����û���Ϣ��
			// ע�⣺cookieֵ����Ϊ�ַ��������ǵõ�����js����
			// ��Ҫʹ��JSON.stringify����ת��


				if(data.code===200){
					$.cookie('user', JSON.stringify(data.result), {path: '/'});
					location.href = '/';
					console.log(123);
				}
			}
		});
		return false;
	});

	// ��ҳ�����е�JS������ϣ�����������
	nprogress.done();


});
