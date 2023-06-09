try {
	(() => {
		var e = __$$hmAppManager$$__.currentApp;
		var n = e.current,
			{ px: _ } =
				(new DeviceRuntimeCore.WidgetFactory(
					new DeviceRuntimeCore.HmDomApi(e, n)
				),
					e.app.__globals__);
		try {
			(() => {
				var e = __$$hmAppManager$$__.currentApp,
					n = e.current;
				new DeviceRuntimeCore.WidgetFactory(
					new DeviceRuntimeCore.HmDomApi(e, n),
					"drink"
				);
				console.log("-----\x3e>>current"),
					console.log(__$$hmAppManager$$__.currentApp.pid),
					console.log(__$$hmAppManager$$__.currentApp.current);
				const datePath = "date/",
					a = [],
					a2 = [],
					a3 = [],
					a4 = [],
					a5 = [],
					a6 = [],
					t = [],
					o = [],
					m = [],
					m2 = [],
					g = [],
					h = [],
					r = [];
				for (i = 1; i <= 8; i++)
					g.push(`week/${i}.png`),
						h.push(`week/${i}.png`),
						r.push(`week/${i}.png`);
				for (i = 0; i < 10; i++)
					m.push(`numb/${i}.png`),
						m2.push(`numb/${i}.png`),
						o.push(`${datePath}${i}.png`),
						a.push(`${datePath}${i}.png`),
						a2.push(`${datePath}${i}.png`),
						a3.push(`${datePath}${i}.png`),
						a4.push(`${datePath}${i}.png`),
						a5.push(`${datePath}${i}.png`),
						a6.push(`${datePath}${i}.png`),
						t.push(`${datePath}${i}.png`);
				let s = {
					x: 0,
					y: 0,
					src: "bg.png",
					show_level: hmUI.show_level.ONLY_NORMAL
				},
					l = {
						x: 102,
						y: 230,
						week_en: g,
						week_tc: r,
						week_sc: h,
						show_level: hmUI.show_level.ONLY_NORMAL
					},
					p = {
						hour_zero: !0,
						hour_startX: 50,
						hour_startY: 63,
						hour_array: m,
						hour_space: -2,
						hour_align: hmUI.align.LEFT,
						minute_zero: !0,
						minute_startX: 50,
						minute_startY: 149,
						minute_array: m2,
						minute_space: -2,
						minute_align: hmUI.align.LEFT,
						show_level: hmUI.show_level.ONLY_NORMAL,
					},
					c = {
						x: 66,
						y: 19,
						w: 18,
						h: 20,
						alpha: 255,
						src: "battery.png",
						angle: 0,
						show_level: hmUI.show_level.ONLY_NORMAL
					},
					d = {
						x: 84,
						y: 19,
						type: hmUI.data_type.BATTERY,
						font_array: o,
						h_space: 0,
						align_h: hmUI.align.LEFT,
						show_level: hmUI.show_level.ONLY_NORMAL
					},
					u = {
						x: 61,
						y: 451,
						w: 18,
						h: 20,
						alpha: 255,
						src: "images/icon_Workout.png",
						angle: 0,
						show_level: hmUI.show_level.ONLY_NORMAL
					},
					w = {
						x: 86,
						y: 451,
						type: hmUI.data_type.STEP,
						font_array: t,
						invalid_image: "images/null.png",
						align_h: hmUI.align.LEFT,
						show_level: hmUI.show_level.ONLY_NORMAL
					},
					I = {
						month_startX: 50,
						month_startY: 233,
						month_align: hmUI.align.LEFT,
						month_zero: 1,
						month_sc_array: a,
						month_tc_array: a2,
						month_en_array: a3,
						day_follow: 1,
						day_zero: 1,
						day_en_array: a4,
						day_sc_array: a5,
						day_tc_array: a6,
						show_level: hmUI.show_level.ONLY_NORMAL
					};
				DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
				n.module = DeviceRuntimeCore.WatchFace({
					init_view() {
						var wd_list = [];

						//START_OF_CODE//

						var bg_wd = hmUI.createWidget(hmUI.widget.IMG, s)
						wd_list.push(bg_wd);

						//AFTER_BG_CODE//

						wd_list.push(hmUI.createWidget(hmUI.widget.IMG_TIME, p));
						wd_list.push(hmUI.createWidget(hmUI.widget.IMG_WEEK, l));
						wd_list.push(hmUI.createWidget(hmUI.widget.IMG_DATE, I));
						wd_list.push(hmUI.createWidget(hmUI.widget.TEXT_IMG, w));
						wd_list.push(hmUI.createWidget(hmUI.widget.TEXT_IMG, d));
						wd_list.push(hmUI.createWidget(hmUI.widget.IMG, c));
						wd_list.push(hmUI.createWidget(hmUI.widget.IMG, u));
						// IMG_TIME
						wd_list[0].setProperty(hmUI.prop.MORE, {
							"x": 0,
							"y": 0,
							"src": "bg.png"
						});
						// IMG_TIME
						wd_list[1].setProperty(hmUI.prop.MORE, {
							"hour_zero": true,
							"hour_startX": 24,
							"hour_startY": 54,
							"hour_array": [
								"numb/0.png",
								"numb/1.png",
								"numb/2.png",
								"numb/3.png",
								"numb/4.png",
								"numb/5.png",
								"numb/6.png",
								"numb/7.png",
								"numb/8.png",
								"numb/9.png"
							],
							"hour_space": -2,
							"hour_align": hmUI.align.LEFT,
							"minute_zero": true,
							"minute_startX": 24,
							"minute_startY": 184,
							"minute_array": [
								"numb/0.png",
								"numb/1.png",
								"numb/2.png",
								"numb/3.png",
								"numb/4.png",
								"numb/5.png",
								"numb/6.png",
								"numb/7.png",
								"numb/8.png",
								"numb/9.png"
							],
							"minute_space": -2,
							"minute_align": hmUI.align.LEFT,
						});
						// IMG_WEEK
						wd_list[2].setProperty(hmUI.prop.MORE, {
							"x": 36,
							"y": 148,
							"week_en": [
								"week/1.png",
								"week/2.png",
								"week/3.png",
								"week/4.png",
								"week/5.png",
								"week/6.png",
								"week/7.png",
								"week/8.png"
							],
							"week_tc": [
								"week/1.png",
								"week/2.png",
								"week/3.png",
								"week/4.png",
								"week/5.png",
								"week/6.png",
								"week/7.png",
								"week/8.png"
							],
							"week_sc": [
								"week/1.png",
								"week/2.png",
								"week/3.png",
								"week/4.png",
								"week/5.png",
								"week/6.png",
								"week/7.png",
								"week/8.png"
							]
						});
						// IMG_DATE
						wd_list[3].setProperty(hmUI.prop.MORE, {
							"month_startX": 114,
							"month_startY": 150,
							"month_align": hmUI.align.LEFT,
							"month_zero": 1,
							"month_sc_array": [
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png"
							],
							"month_tc_array": [
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png"
							],
							"month_en_array": [
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png",
								"trans.png"
							],
							"day_follow": 1,
							"day_zero": 1,
							"day_en_array": [
								"date/0.png",
								"date/1.png",
								"date/2.png",
								"date/3.png",
								"date/4.png",
								"date/5.png",
								"date/6.png",
								"date/7.png",
								"date/8.png",
								"date/9.png"
							],
							"day_sc_array": [
								"date/0.png",
								"date/1.png",
								"date/2.png",
								"date/3.png",
								"date/4.png",
								"date/5.png",
								"date/6.png",
								"date/7.png",
								"date/8.png",
								"date/9.png"
							],
							"day_tc_array": [
								"date/0.png",
								"date/1.png",
								"date/2.png",
								"date/3.png",
								"date/4.png",
								"date/5.png",
								"date/6.png",
								"date/7.png",
								"date/8.png",
								"date/9.png"
							]
						});
						// TEXT_IMG
						wd_list[4].setProperty(hmUI.prop.MORE, {
							"x": 86,
							"y": 451,
							"font_array": [
								"date/0.png",
								"date/1.png",
								"date/2.png",
								"date/3.png",
								"date/4.png",
								"date/5.png",
								"date/6.png",
								"date/7.png",
								"date/8.png",
								"date/9.png"
							],
							"invalid_image": "images/null.png",
							"align_h": hmUI.align.LEFT
						});
						// TEXT_IMG
						wd_list[5].setProperty(hmUI.prop.MORE, {
							"x": 84,
							"y": 19,
							"font_array": [
								"date/0.png",
								"date/1.png",
								"date/2.png",
								"date/3.png",
								"date/4.png",
								"date/5.png",
								"date/6.png",
								"date/7.png",
								"date/8.png",
								"date/9.png"
							],
							"h_space": 0,
							"align_h": hmUI.align.LEFT
						});
						// IMG
						wd_list[6].setProperty(hmUI.prop.MORE, {
							"x": 66,
							"y": 19,
							"w": 18,
							"h": 20,
							"alpha": 255,
							"src": "battery.png",
							"angle": 0
						});
						// IMG
						wd_list[7].setProperty(hmUI.prop.MORE, {
							"x": 61,
							"y": 451,
							"w": 18,
							"h": 20,
							"alpha": 255,
							"src": "workout.png",
							"angle": 0
						});
						hmUI.createWidget(hmUI.widget.IMG_ANIM, {
							anim_path: 'ani',
							anim_prefix: 'ani',
							anim_ext: 'png',
							anim_fps: 30,
							anim_size: 401,
							repeat_count: 0,
							anim_status: hmUI.anim_status.START,
							x: -10,
							y: 250
						})

					},
					onInit() {
						console.log("index page.js on init invoke"), this.init_view();
					},
					onReady() {
						console.log("index page.js on ready invoke");
					},
					onShow() {
						console.log("index page.js on show invoke");
					},
					onHide() {
						console.log("index page.js on hide invoke");
					},
					onDestory() {
						console.log("index page.js on destory invoke");
					}
				});
			})();
		} catch (e) {
			console.log(e);
		}
	})();
} catch (e) {
	console.log(e);
}
