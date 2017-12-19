$(function (){
  $.validator.setDefaults( {
    submitHandler: function () {
      alert( 'submitted!' );
    }
  } );
  $( '#signupForm' ).validate( {
    rules: { 
      user_name: {
        required: true,
        minlength: 2
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: '#password'
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: { 
      user_name: {
        required: '请输入用户名',
        minlength: 'Your username must consist of at least 2 characters'
      },
      password: {
        required: '请输入密码',
        minlength: 'Your password must be at least 5 characters long'
      },
      confirm_password: {
        required: '请再次输入密码',
        minlength: 'Your password must be at least 5 characters long',
        equalTo: '两次密码输入不一致'
      },
      email: '请输入邮箱地址'
    },
    errorElement: 'em',
    errorPlacement: function ( error, element ) {
      // Add the `help-block` class to the error element
      error.addClass( 'form-control-feedback' );
      if ( element.prop( 'type' ) === 'checkbox' ) {
        error.insertAfter( element.parent( 'label' ) );
      } else {
        error.insertAfter( element );
      }
    },
    highlight: function ( element, errorClass, validClass ) {
      $( element ).addClass( 'form-control-danger' ).removeClass( 'form-control-success' );
      $( element ).parents( '.form-group' ).addClass( 'has-danger' ).removeClass( 'has-success' );
    },
    unhighlight: function (element, errorClass, validClass) {
      $( element ).addClass( 'form-control-success' ).removeClass( 'form-control-danger' );
      $( element ).parents( '.form-group' ).addClass( 'has-success' ).removeClass( 'has-danger' );
    }
  });
});
