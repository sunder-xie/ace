var _colNames = ['', '编码', '会议编码', '议题编码', '指标编码', '产品编号', '指标名称', '年度',		'上年度指标', '计算类型', 'WK1', 'WK2', 'WK3', 'WK4', 'WK5', 'WK6', 'WK7',		'WK8', 'WK9', 'WK10', 'WK11', 'WK12', 'WK13', 'WK14', 'WK15', 'WK16',		'WK17', 'WK18', 'WK19', 'WK20', 'WK21', 'WK22', 'WK23', 'WK24', 'WK25',		'WK26', 'WK27', 'WK28', 'WK29', 'WK30', 'WK31', 'WK32', 'WK33', 'WK34',		'WK35', 'WK36', 'WK37', 'WK38', 'WK39', 'WK40', 'WK41', 'WK42', 'WK43',		'WK44', 'WK45', 'WK46', 'WK47', 'WK48', 'WK49', 'WK50', 'WK51', 'WK52',		'WK53'];var _colModel = function() {	return [			{				name : 'myac',				editable : false,				width : 80,				fixed : true,				sortable : false,                frozen:true,				resize : false,				formatter : 'actions',				formatoptions : {					keys : false				//editformbutton:true, editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}				}			},			{				name : 'id',				editable : true,				hidden : true,				 frozen:true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'meetingId',				editable : true,				hidden : true,				 frozen:true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'topicId',				editable : true,				 frozen:true,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'normId',				editable : true,				 frozen:true,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'productId',				hidden : true,				 frozen:true,				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			},			{				name : 'name',				editable : false,				width : 100,				frozen:true			},			{				name : 'year',				hidden : true,				 frozen:true,				editable : true			},			{				name : 'lastYear',				editable : true,				frozen:false,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			}, {				name : 'calType',				editable : true,				hidden:true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk1',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk2',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk3',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk4',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk5',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk6',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk7',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk8',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk9',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk10',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk11',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk12',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk13',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk14',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk15',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk16',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk17',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk18',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk19',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk20',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk21',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk22',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk23',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk24',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk25',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk26',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk27',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk28',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk29',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk30',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk31',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk32',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk33',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk34',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk35',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk36',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk37',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk38',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk39',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk40',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk41',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk42',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk43',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk44',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk45',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk46',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk47',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk48',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk49',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk50',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk51',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk52',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'wk53',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}];}function aceSwitch(cellvalue, options, cell) {	console.log('aceSwitch');	setTimeout(function() {		$(cell).find('input[type=checkbox]').addClass(				'ace ace-switch ace-switch-5').after(				'<span class="lbl"></span>');	}, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {	setTimeout(function() {		$(cell).find('input[type=text]').datepicker({			format : 'yyyy-mm-dd',			autoclose : true		});	}, 0);}function renderBtn(cur) {	var id = $.jgrid.getAccessor(cur, 'id');	var title = $.jgrid.getAccessor(cur, 'name');	var html = [];	html.push('<a target="_blank" href="');	html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');	html.push('"');	html.push('><span class="badge badge-info">查看</span></a>');	return html.join(' ');}