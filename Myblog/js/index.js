<script language="JavaScript">
			var obj = document.getElementById("frameContent"); //获取内容层
			var pages = document.getElementById("pages");      //获取翻页层
			var pagindex=1;										//当前页
			window.onload = function(){
				var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj.offsetHeight));//获取页面数量
				pages_nu.innerHTML = "<p><span>"+pagindex+"</span>/<span>"+allpages+"</span></p>";  //输出当前页和页面总数
				// for (var i=1;1<=allpages;i++){
				// 	pages.innerHTML += "";
				// }
				pg_nb.innerHTML += "<a href=\"javascript:gotopage('-1');\">上一页</a>"; 
				pg_nd.innerHTML += "<a href=\"javascript:gotopage('1');\">下一页</a>";
			}
			function gotopage(value){
				try{
					value=="-1"?showPage(pagindex-1):showPage(pagindex+1);
				}catch(e){
					
				}
			}
			function showPage(pageINdex)
			{
				obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight); //根据高度，输出指定的页
				pagindex=pageINdex;
			}
		</script>