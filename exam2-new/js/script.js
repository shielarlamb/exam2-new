$(()=> {
	
	///load menu
	$.getJSON("data/menu.json", (data) => {
		loadBeveragesData(data.beverages);
		loadBakeryData(data.bakery);
		toggleElements();
		
	
					
	})
	.fail(()=> {
		console.log("Menu data cannot be loaded");		
	});
	
		function loadBakeryData(bakeryArray) {
		$("#menu p").remove();
		$("#menu h2").addClass("menuClass");
		const $bakeryDiv = $('<div class="menus">');
		$("#menu").append($bakeryDiv);
		const $h3Bakery = $("<h3>Bakery</h3>");
		$bakeryDiv.append($h3Bakery);
		const $bakeryUl = $('<ul>');
		$bakeryDiv.append($bakeryUl);
		
		bakeryArray.forEach((bakery) => {
			$bakeryUl.append(`<li>${bakery.name + " " + bakery.price}</li>`);
		})
		
		
	}
	
	function loadBeveragesData(beveragesArray) {
		$("#menu p").remove();
		$("#menu h2").addClass("menuClass");
		const $beveragesDiv = $('<div class="menus">');
		$("#menu").append($beveragesDiv);
		const $h3Beverages = $("<h3>Beverages</h3>");
		$beveragesDiv.append($h3Beverages);
		const $beveragesUl = $('<ul>');
		$beveragesDiv.append($beveragesUl);
		beveragesArray.forEach((beverages) => {
		$beveragesUl.append(`<li>${beverages.name + " " + beverages.price}</li>`);
		})
		
	}
	
	
	///add moonflower data
	$.getJSON("data/moonflowers.json", (data) => {
		
		loadHours(data.hours);
		loadStaff(data.staff);
		loadSpecials(data.specials);
		
		
		
	})
	.fail(()=> {
		console.log("Moonflowers data cannot be loaded");		
	});
	
	//// add staff
	
	$("#staff").append('<h2 class="staffH2">Staff Members</h2>');
		$("#story div").addClass("storyDiv");
		$(".storyDiv").hide();		
	
	function loadStaff(staffArray){
		
		
		const $staffDiv = $('<div  style="display:none" class="staffDiv">');
		$("#staff").append($staffDiv);
			
		staffArray.forEach((staff) => {
			$staffDiv.append(`<div class="col-sm-8"><h3>${staff.name}</h3><p>${staff.text}</p><div class="col-sm-4"><img class="img-responsive" src="images/${staff.img}" alt="Picture of ${staff.name}"></div></div> `)
			
		});
	}
	
	//load hours
	function loadHours(hoursArray){
		const $hoursList = $('<ul>');
		$("#hours p").remove();
		$("#hours").append($hoursList);
		hoursArray.forEach((hours) => {
			$hoursList.append(`<li>${hours.day + ":"+ hours.time}</li>`);
		});
	}
	
	/// weekly specials
	function loadSpecials(specialsArray) {
		const $specials = $('<p>');
		$("#specials p").empty();
		$("#specials p").append($specials);
		
		specialsArray.forEach((specials)=> {
			$specials.append(`<p>${specials.desc}<img src="images/${specials.img}"</p>`);
		});
		
	}
	
//our story
			
		$("#story h2").addClass("storyClass");
		$("#story div").addClass("storyDiv");
		$(".storyDiv").hide();		
	
		
	///toggle function
	function toggleElements() {
		$(".menuClass").on("click", function () {
			$(".menus").toggle();
						
		});	
		
		$(".staffH2").on("click", function () {
			$(".staffDiv").toggle();
		
		});
			$(".storyClass").on("click", function () {
			$(".storyDiv").toggle();
		
		});
			
	}
	
	});