const a0_0x23ceca=a0_0xbd38;(function(_0x52fec7,_0x2261a3){const _0x2ad932=a0_0xbd38,_0x3091d9=_0x52fec7();while(!![]){try{const _0x4b0c85=parseInt(_0x2ad932(0x1f2))/0x1+parseInt(_0x2ad932(0x1de))/0x2*(parseInt(_0x2ad932(0x211))/0x3)+parseInt(_0x2ad932(0x1e5))/0x4*(parseInt(_0x2ad932(0x20a))/0x5)+parseInt(_0x2ad932(0x1f7))/0x6*(-parseInt(_0x2ad932(0x1f0))/0x7)+-parseInt(_0x2ad932(0x1fd))/0x8+-parseInt(_0x2ad932(0x1f8))/0x9*(-parseInt(_0x2ad932(0x20d))/0xa)+-parseInt(_0x2ad932(0x1da))/0xb;if(_0x4b0c85===_0x2261a3)break;else _0x3091d9['push'](_0x3091d9['shift']());}catch(_0x59cba1){_0x3091d9['push'](_0x3091d9['shift']());}}}(a0_0x5e9f,0xa2759));const firebaseConfig={'apiKey':a0_0x23ceca(0x207),'authDomain':a0_0x23ceca(0x1ee),'databaseURL':a0_0x23ceca(0x1e4),'projectId':a0_0x23ceca(0x1e8),'storageBucket':a0_0x23ceca(0x1fe),'messagingSenderId':a0_0x23ceca(0x20e),'appId':a0_0x23ceca(0x1ff),'measurementId':a0_0x23ceca(0x1ef)},app=firebase['initializeApp'](firebaseConfig),db=firebase[a0_0x23ceca(0x1ed)](app);function fetchData(){const _0x589f94=a0_0x23ceca,_0x5b9bdc=document['getElementById'](_0x589f94(0x20b))[_0x589f94(0x1f4)]['toLowerCase']();db[_0x589f94(0x202)](_0x589f94(0x1fa))[_0x589f94(0x208)](_0x589f94(0x213))['get']()[_0x589f94(0x1df)](_0x4512de=>{const _0xd17255=_0x589f94,_0x561269=document[_0xd17255(0x1fb)]('dataTable');_0x561269[_0xd17255(0x201)]='',_0x4512de[_0xd17255(0x1dc)](_0x451a27=>{const _0x4773db=_0xd17255,_0x18af72=_0x451a27[_0x4773db(0x1ec)]();if(!_0x5b9bdc||_0x18af72['Entreprise'][_0x4773db(0x20f)]()['includes'](_0x5b9bdc)){const _0x336cdb=document[_0x4773db(0x1e1)]('tr');_0x336cdb[_0x4773db(0x201)]=_0x4773db(0x1e6)+_0x18af72[_0x4773db(0x213)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x18af72[_0x4773db(0x212)]+_0x4773db(0x1f1)+_0x18af72[_0x4773db(0x1e3)]+_0x4773db(0x1f3)+_0x451a27['id']+_0x4773db(0x1db)+_0x18af72[_0x4773db(0x214)]+_0x4773db(0x1f3)+_0x451a27['id']+_0x4773db(0x1f9)+_0x18af72['Longitude']+_0x4773db(0x217)+_0x451a27['id']+_0x4773db(0x1e7),_0x561269[_0x4773db(0x1eb)](_0x336cdb);}});})[_0x589f94(0x210)](_0x151cbe=>{const _0xed55c0=_0x589f94;console[_0xed55c0(0x216)](_0xed55c0(0x215),_0x151cbe);});}function showTable(){const _0x383bc3=a0_0x23ceca,_0x10af08=document['getElementById']('tableContainer');_0x10af08[_0x383bc3(0x1e0)][_0x383bc3(0x1f5)]('hidden'),fetchData();}function a0_0xbd38(_0x24ade6,_0x5e04f7){const _0x5e9fed=a0_0x5e9f();return a0_0xbd38=function(_0xbd38c3,_0x229475){_0xbd38c3=_0xbd38c3-0x1da;let _0x457198=_0x5e9fed[_0xbd38c3];return _0x457198;},a0_0xbd38(_0x24ade6,_0x5e04f7);}function updateData(_0x2bd9e2,_0x4cf5ce,_0x57d72d){const _0x2ac439=a0_0x23ceca,_0x376cb2={};_0x376cb2[_0x4cf5ce]=parseFloat(_0x57d72d),db[_0x2ac439(0x202)](_0x2ac439(0x1fa))['doc'](_0x2bd9e2)[_0x2ac439(0x1ea)](_0x376cb2)[_0x2ac439(0x1df)](()=>{const _0x3deba5=_0x2ac439;console['log'](_0x3deba5(0x200));})['catch'](_0x29d83a=>{const _0x56749d=_0x2ac439;console[_0x56749d(0x216)](_0x56749d(0x206),_0x29d83a);});}function saveData(_0x1b3361,_0x15e2a8){const _0x4ff1f3=a0_0x23ceca,_0x512ddc=_0x15e2a8['closest']('tr'),_0xd0412d=parseFloat(_0x512ddc['children'][0x3]['textContent']),_0x1173bd=parseFloat(_0x512ddc[_0x4ff1f3(0x205)][0x4]['textContent']),_0x371fcb={'Latitude':_0xd0412d,'Longitude':_0x1173bd};db[_0x4ff1f3(0x202)](_0x4ff1f3(0x1fa))[_0x4ff1f3(0x1e9)](_0x1b3361)[_0x4ff1f3(0x1ea)](_0x371fcb)[_0x4ff1f3(0x1df)](()=>{const _0x515d36=_0x4ff1f3;alert(_0x515d36(0x1fc));})[_0x4ff1f3(0x210)](_0x576555=>{const _0x6cf57b=_0x4ff1f3;console[_0x6cf57b(0x216)](_0x6cf57b(0x20c),_0x576555);});}function a0_0x5e9f(){const _0x5d8748=['G-HJ408J10Q9','6073214sLFwdo','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','228697vRJYeU','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20contenteditable=\x22true\x22\x20onblur=\x22updateData(\x27','value','remove','قطارة','6FgnhMJ','324AmDSIt','\x27,\x20\x27Longitude\x27,\x20this.textContent)\x22>','entreprises','getElementById','تم\x20الحفظ','1233888YVgnFn','gpsdsp-6f3db.appspot.com','1:463226938115:web:90331e97759011296fff36','Data\x20updated\x20successfully!','innerHTML','collection','حاسي\x20بحبح','الجلفة','children','Error\x20updating\x20data:','AIzaSyCpE0sSkR4jG9UzWZs4Tf0SLeSebv9tHVA','orderBy','عين\x20وسارة','6138965xxgHCG','filterEntreprise','Error\x20saving\x20data:','38210MPcbiD','463226938115','toLowerCase','catch','3BIxMRf','Nom_structure','Type_structure','Latitude','Error\x20fetching\x20data:','error','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22saveData(\x27','11710006NBddjL','\x27,\x20\x27Latitude\x27,\x20this.textContent)\x22>','forEach','الرجاء\x20إدخال\x20كلمة\x20المرور:','2315542UoVxEI','then','classList','createElement','مسعد','Commun','https://gpsdsp-6f3db-default-rtdb.firebaseio.com','4nqaMPD','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','\x27,\x20this)\x22>حفظ</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','gpsdsp-6f3db','doc','update','appendChild','data','firestore','gpsdsp-6f3db.firebaseapp.com'];a0_0x5e9f=function(){return _0x5d8748;};return a0_0x5e9f();}function login(){const _0x4c42f0=a0_0x23ceca,_0x34820b=document[_0x4c42f0(0x1fb)](_0x4c42f0(0x20b))[_0x4c42f0(0x1f4)];let _0x29058b;switch(_0x34820b){case _0x4c42f0(0x204):_0x29058b='1930';break;case _0x4c42f0(0x203):_0x29058b='1920';break;case _0x4c42f0(0x209):_0x29058b='1910';break;case _0x4c42f0(0x1e2):_0x29058b='19440';break;case _0x4c42f0(0x1f6):_0x29058b='1950';break;default:_0x29058b='';}const _0x3de50d=prompt(_0x4c42f0(0x1dd));_0x3de50d===_0x29058b?showTable():alert('كلمة\x20المرور\x20غير\x20صحيحة');}
