function update() {
			var res = document.getElementById('result').contentWindow.document;
			res.open();
			res.write(eh.getValue());
			res.write('<style>'+ec.getValue()+'</style>');
			res.write('<script>'+ed.getValue()+'</script>');
			res.close();
			
		}


function seteditor(){
			window.eh = ace.edit("htmleditor");
			eh.setTheme("ace/theme/monokai");
			eh.session.setMode("ace/mode/html");

			window.ec = ace.edit("csseditor");
			ec.setTheme("ace/theme/monokai");
			ec.session.setMode("ace/mode/css");

			window.ed = ace.edit("jseditor");
			ed.setTheme("ace/theme/monokai");
			ed.session.setMode("ace/mode/js");


			eh.getSession().on('change',function(){
				update();
			});

			ec.getSession().on('change',function(){
				update();
			});


			ed.getSession().on('change',function(){
				update();
			});


		}

seteditor();
update();