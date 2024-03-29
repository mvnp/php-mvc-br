$(function()
{
	/**
	 * Cadastro da empresa no banco de dados
	 * @return {[type]} [description]
	 */
	$(document).on('submit', '#acao', function(event) 
	{
		event.preventDefault()
		/* Act on the event */
		var url = 'https://palhocasites.com.br/vista/'
		var form = $(this).serializeArray()
		$.ajax({
			url: url+'customers/add_', type: 'POST',
			dataType: 'json', data: {form: form},
			success: function(retorno){
				if(retorno == true){
					$('#acao').trigger("reset")
					alert("Cadastro efetuado com sucesso")
				} else {
					alert("Não foi possível cadastrar o celular")
				}
			}
		})
	})
	/**
	 * Cadastro da empresa no banco de dados
	 * @return {[type]} [description]
	 */
	$(document).on('submit', '#acaoEdit', function(event) 
	{
		event.preventDefault()
		/* Act on the event */
		var url = 'https://palhocasites.com.br/vista/'
		var form = $(this).serializeArray()
		var id = $("input[name='id']").val()

		$.ajax({
			url: url+'customers/edit_/'+id, type: 'POST',
			dataType: 'json', data: {form: form},
			success: function(retorno){
				if(retorno == true){
					$('#acaoEdit').trigger("reset")
					alert("Atualização efetuada com sucesso")
				} else {
					alert("Não foi possível cadastrar o celular")
				}
			}
		})
	})

	/**
	 * Mascara de validação dos inputs
	 * @type {String}
	 */
	$("input[name='telefone'], input[name='whatsapp']")
	.mask("(99) 9999-9999?9")
	.focusout(function (event) {  
	    var target, phone, element;  
	    target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
	    phone = target.value.replace(/\D/g, '');
	    element = $(target);  
	    element.unmask();  
	    if(phone.length > 10) {  
	        element.mask("(99) 99999-9999");
	    } else {  
	        element.mask("(99) 9999-99999");
	    }  
	})

	/**
	 * Mascara para CPF/CNPJ
	 * @return {[type]} [description]
	 */
	var options = {
	    onKeyPress: function (cpf, ev, el, op) {
	        var masks = ['000.000.000-000', '00.000.000/0000-00'];
	        $("input[name='cnpj']").mask((cpf.length > 14) ? masks[1] : masks[0], op);
	    }
	}

	$("input[name='cnpj']").length > 11 
		? $("input[name='cnpj']").mask('00.000.000/0000-00', options) 
		: $("input[name='cnpj']").mask('000.000.000-00#', options);

	/**
	 * ViaCEP Autocomplete
	 * @param  {[type]} e) { var cep [description]
	 * @return {[type]} [description]
	 */
	var inputsCEP = $('#logradouro, #bairro, #localidade, #uf, #ibge');
	var inputsRUA = $('#cep, #bairro, #ibge');
	var validacep = /^[0-9]{8}$/;

	function limpa_formulário_cep(alerta) {
		if (alerta !== undefined) {
			alert(alerta);
		} inputsCEP.val('');
	}

	function get(url) 
	{
	  	$.get(url, function(data) {
	    	if (!("erro" in data)) {
	      		if (Object.prototype.toString.call(data) === '[object Array]') { var data = data[0]; }
		      	$.each(data, function(nome, info) {
		        	$('#' + nome).val(nome === 'cep' ? info.replace(/\D/g, '') : info).attr('info', nome === 'cep' ? info.replace(/\D/g, '') : info);
		      	});
		    } else {
		      	limpa_formulário_cep("CEP não encontrado.");
		    }
	  	});
	}

	$('input[name="cep"]').on('blur', function(e) 
	{
	  	var cep = $('#cep').val().replace(/\D/g, '');
	  	if (cep !== "" && validacep.test(cep)) {
	  		$("input[name='numero']").val("").text("").focus()
	    	inputsCEP.val('...');
	    	get('https://viacep.com.br/ws/' + cep + '/json/');
	  	} else {
	    	limpa_formulário_cep(cep == "" ? undefined : "Formato de CEP inválido.");
	  	}
	})	

	/*
	 * Substitui as ocorrências de espaços nos telefones
	 * para poder melhor manipular a informação.
	 */
	$("#empresa").html($("#empresa").html().replace(/ - /g, "-"))
	$("#whatsapp").focusin()	
	$("#whatsapp2").focusin()

	/**
	 * Verify exists
	 */
	$("input[name='email']").on('blur', function(event) {
		event.preventDefault();
		/* Act on the event */
		console.log("verificar")
		var url = 'https://palhocasites.com.br/vista/'

		$.ajax({
			url: url+'customers/getEmail', type: 'POST',
			dataType: 'json', data: {email: $(this).val()},
			success: function(retorno){
				if(retorno == true){
					$('input[name="email"]').addClass("bg-red-active").val("").text("")
					$('#acao').trigger("reset")
				} else {
					$('input[name="email"]').removeClass("bg-red-active")
				}
			}
		})		
	});

	/**
	 * Verify exists
	 */
	$("input[name='telefone']").on('blur', function(event) {
		event.preventDefault();
		/* Act on the event */
		var url = 'https://palhocasites.com.br/vista/'
		var telefone = $("input[name='telefone']").val()

		if($(telefone).length > 5){
			$.ajax({
				url: url+'customers/getTelefone', type: 'POST',
				dataType: 'json', data: {telefone: $(this).val()},
				success: function(retorno){
					if(retorno == true){
						$('input[name="telefone"]').addClass("bg-red-active").val("").text("")
						$('#acao').trigger("reset")
					} else {
						$('input[name="telefone"]').removeClass("bg-red-active")
					}
				}
			})	
		}	
	});

	/**
	 * Verify exists
	 */
	$("input[name='whatsapp']").on('blur', function(event) {
		event.preventDefault();
		/* Act on the event */
		var url = 'https://palhocasites.com.br/vista/'
		var whatsapp = $("input[name='whatsapp']").val()

		if($(whatsapp).length > 0){
			$.ajax({
				url: url+'customers/getWhatsapp', type: 'POST',
				dataType: 'json', data: {whatsapp: $(this).val()},
				success: function(retorno){
					if(retorno == true){
						$('input[name="whatsapp"]').addClass("bg-red-active").val("").text("")
						$('#acao').trigger("reset")
					} else {
						$('input[name="whatsapp"]').removeClass("bg-red-active")
					}
				}
			})
		}		
	});

})