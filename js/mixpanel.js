// MIXPANEL TRACK LANDING PAGE
mixpanel.track("Landing Page Loaded");

// MIXPANEL TRACK LINKS
// mixpanel.track_links("#c-nav-moreresources-btn", "Clicked Nav Link", {
// 	'referrer': document.referrer,
// 	'name':'More Reources'
// });


// code used to generate tracking code
// function init(){

// $.each($('header a[id]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name =$(this).attr('id');
	
	
// 	console.log('mixpanel.track_links("'+ ID+'", "Clicked on Nav", {"referrer": document.referrer,"name":"'+ name+'"});');	

// });


// $.each($('.c-home-groups a[id]'), function(){
// 	var ID = "#" + $(this).attr('id') ;
// 	var name =$(this).attr('id');
	
// 	console.log('mixpanel.track_links("'+ ID+'", "Clicked on Groups", {"referrer": document.referrer,"name":"'+ name+'"});');	

// });



// $.each($('.c-home-events a[id]'), function(){
// 	var ID = "#" + $(this).attr('id') ;
// 	var name = $(this).attr('data-event');
	
// 	console.log('mixpanel.track_links("'+ ID+'", "Clicked on Events", {"referrer": document.referrer,"name":"'+ name+'"});');	

// });



// $.each($('#c-home-study a[data-tag]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-tag');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Study tags\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('#c-home-play a[data-tag]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-tag');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Play tags\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('#c-home-connect a[data-tag]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-tag');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Connect tags\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('#c-home-work a[data-tag]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-tag');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Work tags\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('.c-home-topics a[data-tag]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-tag');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Topics tags\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('#c-home-work .c-topic-i-title[data-id]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-id');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Work topics\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('#c-home-play .c-topic-i-title[data-id]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-id');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Play topics\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('#c-home-study .c-topic-i-title[data-id]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-id');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Study topics\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });

// $.each($('#c-home-connect .c-topic-i-title[data-id]'), function(){
// 	var ID = "#" + $(this).attr('id');
// 	var name = $(this).attr('data-id');
	
	
// 	console.log('mixpanel.track_links(\"'+ ID+'\", \"Clicked on Connect topics\", {\"referrer\": document.referrer,\"name\":\"'+ name+'\"});');	

// });


// }




// NAVIGATION 
mixpanel.track_links("#c-nav-logo", "Clicked on Nav", {"referrer": document.referrer,"name":"c-nav-logo"}); 
mixpanel.track_links("#c-nav-home", "Clicked on Nav", {"referrer": document.referrer,"name":"c-nav-home"}); 
mixpanel.track_links("#c-nav-home-browse", "Clicked on Nav", {"referrer": document.referrer,"name":"c-nav-home-browse"}); 
mixpanel.track_links("#c-nav-study", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-study"}); 
mixpanel.track_links("#c-nav-work", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-work"}); 
mixpanel.track_links("#c-nav-play", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-play"}); 
mixpanel.track_links("#c-nav-connect", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-connect"}); 
mixpanel.track_links("#c-nav-moretopics", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-moretopics"}); 
mixpanel.track_links("#c-nav-events", "Clicked on Nav", {"referrer": document.referrer,"name":"c-nav-events"}); 
mixpanel.track_links("#c-nav-groups", "Clicked on Nav", {"referrer": document.referrer,"name":"c-nav-groups"}); 
mixpanel.track_links("#c-nav-resources", "Clicked on Nav", {"referrer": document.referrer,"name":"c-nav-resources"}); 
mixpanel.track_links("#c-nav-bible", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-bible"}); 
mixpanel.track_links("#c-nav-teacher", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-teacher"}); 
mixpanel.track_links("#c-nav-partners", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-partners"}); 
mixpanel.track_links("#c-nav-moreresources", "Clicked on Nav dropdown", {"referrer": document.referrer,"name":"c-nav-moreresources"}); 


// USER MENU
mixpanel.track_links("#signin", "Clicked on UserMenu", {"referrer": document.referrer,"name":"signin"}); 
mixpanel.track_links("#signup", "Clicked on UserMenu", {"referrer": document.referrer,"name":"register"}); 



// TOPICS
mixpanel.track_links("#Study", "Clicked on Study tags", {"referrer": document.referrer,"name":"Study"}); 
mixpanel.track_links("#Play", "Clicked on Play tags", {"referrer": document.referrer,"name":"Play"}); 
mixpanel.track_links("#Connect", "Clicked on Connect tags", {"referrer": document.referrer,"name":"Connect"});
mixpanel.track_links("#Work", "Clicked on Work tags", {"referrer": document.referrer,"name":"Work"});

// view more topics
mixpanel.track_links("#more-topics-connect", "Clicked on More topcis", {"referrer": document.referrer,"name":"More connect topics"});
mixpanel.track_links("#more-topics-work", "Clicked on More topcis", {"referrer": document.referrer,"name":"More work topics"});
mixpanel.track_links("#more-topics-play", "Clicked on More topcis", {"referrer": document.referrer,"name":"More play topics"});
mixpanel.track_links("#more-topics-study", "Clicked on More topcis", {"referrer": document.referrer,"name":"More study topics"});

// tags
mixpanel.track_links("#office-hours", "Clicked on Study tags", {"referrer": document.referrer,"name":"office-hours"}); 
mixpanel.track_links("#study-group", "Clicked on Study tags", {"referrer": document.referrer,"name":"study-group"}); 
mixpanel.track_links("#academic-writing", "Clicked on Study tags", {"referrer": document.referrer,"name":"academic-writing"}); 
mixpanel.track_links("#presentation", "Clicked on Study tags", {"referrer": document.referrer,"name":"presentation"}); 
mixpanel.track_links("#reading", "Clicked on Study tags", {"referrer": document.referrer,"name":"reading"}); 
mixpanel.track_links("#project", "Clicked on Study tags", {"referrer": document.referrer,"name":"project"}); 
mixpanel.track_links("#class-discussion", "Clicked on Study tags", {"referrer": document.referrer,"name":"class-discussion"}); 
mixpanel.track_links("#writing", "Clicked on Study tags", {"referrer": document.referrer,"name":"writing"}); 
mixpanel.track_links("#typos", "Clicked on Study tags", {"referrer": document.referrer,"name":"typos"}); 
mixpanel.track_links("#international students", "Clicked on Study tags", {"referrer": document.referrer,"name":"international students"}); 
mixpanel.track_links("#CU", "Clicked on Study tags", {"referrer": document.referrer,"name":"CU"}); 
mixpanel.track_links("#academic writing", "Clicked on Study tags", {"referrer": document.referrer,"name":"academic writing"}); 
mixpanel.track_links("#essay", "Clicked on Study tags", {"referrer": document.referrer,"name":"essay"}); 
mixpanel.track_links("#presentation", "Clicked on Study tags", {"referrer": document.referrer,"name":"presentation"}); 
mixpanel.track_links("#prezi", "Clicked on Study tags", {"referrer": document.referrer,"name":"prezi"}); 
mixpanel.track_links("#speed reading", "Clicked on Study tags", {"referrer": document.referrer,"name":"speed reading"}); 
mixpanel.track_links("#study group", "Clicked on Study tags", {"referrer": document.referrer,"name":"study group"}); 
mixpanel.track_links("#math", "Clicked on Study tags", {"referrer": document.referrer,"name":"math"}); 
mixpanel.track_links("#professors", "Clicked on Study tags", {"referrer": document.referrer,"name":"professors"}); 
mixpanel.track_links("#office hours", "Clicked on Study tags", {"referrer": document.referrer,"name":"office hours"}); 
mixpanel.track_links("#undefined", "Clicked on Study tags", {"referrer": document.referrer,"name":"more-topics-study"}); 

mixpanel.track_links("#trips", "Clicked on Play tags", {"referrer": document.referrer,"name":"trips"}); 
mixpanel.track_links("#film", "Clicked on Play tags", {"referrer": document.referrer,"name":"film"}); 
mixpanel.track_links("#shopping", "Clicked on Play tags", {"referrer": document.referrer,"name":"shopping"}); 
mixpanel.track_links("#eats", "Clicked on Play tags", {"referrer": document.referrer,"name":"eats"}); 
mixpanel.track_links("#music", "Clicked on Play tags", {"referrer": document.referrer,"name":"music"}); 
mixpanel.track_links("#sports", "Clicked on Play tags", {"referrer": document.referrer,"name":"sports"}); 
mixpanel.track_links("#broadway-show", "Clicked on Play tags", {"referrer": document.referrer,"name":"broadway-show"}); 
mixpanel.track_links("#festival", "Clicked on Play tags", {"referrer": document.referrer,"name":"festival"}); 
mixpanel.track_links("#party", "Clicked on Play tags", {"referrer": document.referrer,"name":"party"}); 
mixpanel.track_links("#trips", "Clicked on Play tags", {"referrer": document.referrer,"name":"trips"});  
mixpanel.track_links("#eats", "Clicked on Play tags", {"referrer": document.referrer,"name":"eats"}); 
mixpanel.track_links("#NYC", "Clicked on Play tags", {"referrer": document.referrer,"name":"NYC"}); 
mixpanel.track_links("#festival", "Clicked on Play tags", {"referrer": document.referrer,"name":"festival"}); 
mixpanel.track_links("#Halloween", "Clicked on Play tags", {"referrer": document.referrer,"name":"Halloween"}); 
mixpanel.track_links("#happy hours", "Clicked on Play tags", {"referrer": document.referrer,"name":"happy hours"}); 
mixpanel.track_links("#cold water", "Clicked on Play tags", {"referrer": document.referrer,"name":"cold water"}); 
mixpanel.track_links("#drama", "Clicked on Play tags", {"referrer": document.referrer,"name":"drama"}); 
mixpanel.track_links("#music", "Clicked on Play tags", {"referrer": document.referrer,"name":"music"}); 
mixpanel.track_links("#Justin Bieber", "Clicked on Play tags", {"referrer": document.referrer,"name":"Justin Bieber"}); 
mixpanel.track_links("#undefined", "Clicked on Play tags", {"referrer": document.referrer,"name":"more-topics-play"}); 

mixpanel.track_links("#education", "Clicked on Connect tags", {"referrer": document.referrer,"name":"education"}); 
mixpanel.track_links("#professional", "Clicked on Connect tags", {"referrer": document.referrer,"name":"professional"}); 
mixpanel.track_links("#interest", "Clicked on Connect tags", {"referrer": document.referrer,"name":"interest"}); 
mixpanel.track_links("#express-feelings", "Clicked on Connect tags", {"referrer": document.referrer,"name":"express-feelings"}); 
mixpanel.track_links("#relationship", "Clicked on Connect tags", {"referrer": document.referrer,"name":"relationship"}); 
mixpanel.track_links("#social-media", "Clicked on Connect tags", {"referrer": document.referrer,"name":"social-media"}); 
mixpanel.track_links("#circles", "Clicked on Connect tags", {"referrer": document.referrer,"name":"circles"}); 
mixpanel.track_links("#make-friends", "Clicked on Connect tags", {"referrer": document.referrer,"name":"make-friends"});  
mixpanel.track_links("#make friends", "Clicked on Connect tags", {"referrer": document.referrer,"name":"make friends"});  
mixpanel.track_links("#poor English", "Clicked on Connect tags", {"referrer": document.referrer,"name":"poor English"}); 
mixpanel.track_links("#self-critical", "Clicked on Connect tags", {"referrer": document.referrer,"name":"self-critical"});  
mixpanel.track_links("#antisocial", "Clicked on Connect tags", {"referrer": document.referrer,"name":"antisocial"}); 
mixpanel.track_links("#social media", "Clicked on Connect tags", {"referrer": document.referrer,"name":"social media"}); 
mixpanel.track_links("#facebook", "Clicked on Connect tags", {"referrer": document.referrer,"name":"facebook"});  
mixpanel.track_links("#circles", "Clicked on Connect tags", {"referrer": document.referrer,"name":"circles"});  
mixpanel.track_links("#party", "Clicked on Connect tags", {"referrer": document.referrer,"name":"party"});  
mixpanel.track_links("#talk to boss", "Clicked on Connect tags", {"referrer": document.referrer,"name":"talk to boss"}); 
mixpanel.track_links("#undefined", "Clicked on Connect tags", {"referrer": document.referrer,"name":"more-topics-connect"}); 

mixpanel.track_links("#dress-for-success", "Clicked on Work tags", {"referrer": document.referrer,"name":"dress-for-success"}); 
mixpanel.track_links("#interview", "Clicked on Work tags", {"referrer": document.referrer,"name":"interview"}); 
mixpanel.track_links("#biz-English", "Clicked on Work tags", {"referrer": document.referrer,"name":"biz-English"}); 
mixpanel.track_links("#biz-culture", "Clicked on Work tags", {"referrer": document.referrer,"name":"biz-culture"}); 
mixpanel.track_links("#resume", "Clicked on Work tags", {"referrer": document.referrer,"name":"resume"}); 
mixpanel.track_links("#opportunity-spotting", "Clicked on Work tags", {"referrer": document.referrer,"name":"opportunity-spotting"}); 
mixpanel.track_links("#email", "Clicked on Work tags", {"referrer": document.referrer,"name":"email"}); 
mixpanel.track_links("#biz-trips", "Clicked on Work tags", {"referrer": document.referrer,"name":"biz-trips"});  
mixpanel.track_links("#green card", "Clicked on Work tags", {"referrer": document.referrer,"name":"green card"}); 
mixpanel.track_links("#project", "Clicked on Work tags", {"referrer": document.referrer,"name":"project"}); 
mixpanel.track_links("#summer intership", "Clicked on Work tags", {"referrer": document.referrer,"name":"summer intership"});  
mixpanel.track_links("#email etiquette", "Clicked on Work tags", {"referrer": document.referrer,"name":"email etiquette"});  
mixpanel.track_links("#start up", "Clicked on Work tags", {"referrer": document.referrer,"name":"start up"}); 
mixpanel.track_links("#internship", "Clicked on Work tags", {"referrer": document.referrer,"name":"internship"});  
mixpanel.track_links("#dress code", "Clicked on Work tags", {"referrer": document.referrer,"name":"dress code"}); 
mixpanel.track_links("#women in IT", "Clicked on Work tags", {"referrer": document.referrer,"name":"women in IT"});  
mixpanel.track_links("#on-campus jobs", "Clicked on Work tags", {"referrer": document.referrer,"name":"on-campus jobs"}); 
mixpanel.track_links("#NYU", "Clicked on Work tags", {"referrer": document.referrer,"name":"NYU"});  
mixpanel.track_links("#recruiter", "Clicked on Work tags", {"referrer": document.referrer,"name":"recruiter"}); 
mixpanel.track_links("#Google", "Clicked on Work tags", {"referrer": document.referrer,"name":"Google"}); 
mixpanel.track_links("#undefined", "Clicked on Work tags", {"referrer": document.referrer,"name":"more-topics-work"}); 

// topics
mixpanel.track_links("#topic14", "Clicked on Work topics", {"referrer": document.referrer,"name":"What's the best strategy for an international student to get a green card?"}); 
mixpanel.track_links("#topic13", "Clicked on Work topics", {"referrer": document.referrer,"name":"What are the good summer research programs/Internships for international students in US?"}); 
mixpanel.track_links("#topic12", "Clicked on Work topics", {"referrer": document.referrer,"name":"Can I use business email for personal purposes?"}); 
mixpanel.track_links("#topic11", "Clicked on Work topics", {"referrer": document.referrer,"name":"How do I take full advantage of working at a start up company as an intern?"}); 
mixpanel.track_links("#topic10", "Clicked on Work topics", {"referrer": document.referrer,"name":"Is there a dress code for women in technology?"}); 
mixpanel.track_links("#topic9", "Clicked on Work topics", {"referrer": document.referrer,"name":"What are the chances of getting an on-campus job at NYU for computer science master's students?"}); 
mixpanel.track_links("#topic8", "Clicked on Work topics", {"referrer": document.referrer,"name":"How do I politely say no to a recruiter?"}); 

mixpanel.track_links("#topic7", "Clicked on Play topics", {"referrer": document.referrer,"name":"What are the best hikes near New York City and accessible via Metro North?"}); 
mixpanel.track_links("#topic6", "Clicked on Play topics", {"referrer": document.referrer,"name":"What are the best Indian restaurants in NYC?"}); 
mixpanel.track_links("#topic5", "Clicked on Play topics", {"referrer": document.referrer,"name":"Why are women's (and girls') Halloween costumes all so sexualized but not so for men?"}); 
mixpanel.track_links("#topic4", "Clicked on Play topics", {"referrer": document.referrer,"name":"What is Happy Hour?"}); 
mixpanel.track_links("#topic3", "Clicked on Play topics", {"referrer": document.referrer,"name":"What is the background of Americans drinking ice water?"}); 
mixpanel.track_links("#topic2", "Clicked on Play topics", {"referrer": document.referrer,"name":"Is there any TV series better than Game of Thrones?"}); 
mixpanel.track_links("#topic1", "Clicked on Play topics", {"referrer": document.referrer,"name":"Pop Music: What are the most hated chart-topping songs, and why?"}); 

mixpanel.track_links("#topic21", "Clicked on Study topics", {"referrer": document.referrer,"name":"What is the most embarrassing misspelling or grammatical error you have ever seen in a professional or academic presentation?"}); 
mixpanel.track_links("#topic20", "Clicked on Study topics", {"referrer": document.referrer,"name":"How are international students at Columbia University treated?"}); 
mixpanel.track_links("#topic19", "Clicked on Study topics", {"referrer": document.referrer,"name":"Is there a template to write A+ essays?"}); 
mixpanel.track_links("#topic18", "Clicked on Study topics", {"referrer": document.referrer,"name":"What are good alternatives to Prezi?"}); 
mixpanel.track_links("#topic17", "Clicked on Study topics", {"referrer": document.referrer,"name":"Does speed reading really work? If so, how?"}); 
mixpanel.track_links("#topic16", "Clicked on Study topics", {"referrer": document.referrer,"name":"What are some ways to create a study group for a math book?"}); 
mixpanel.track_links("#topic15", "Clicked on Study topics", {"referrer": document.referrer,"name":"What is a good way to get to know professors at a large school?"}); 

mixpanel.track_links("#topic28", "Clicked on Connect topics", {"referrer": document.referrer,"name":"How can I get better at talking to strangers?"}); 
mixpanel.track_links("#topic27", "Clicked on Connect topics", {"referrer": document.referrer,"name":" \"Why are Chinese students always apologising for their poor English?\""}); 
mixpanel.track_links("#topic26", "Clicked on Connect topics", {"referrer": document.referrer,"name":"Am I antisocial?"}); 
mixpanel.track_links("#topic25", "Clicked on Connect topics", {"referrer": document.referrer,"name":"What do I lose if I don't use Facebook?"}); 
mixpanel.track_links("#topic24", "Clicked on Connect topics", {"referrer": document.referrer,"name":"Which friend circle would you choose, and why?"}); 
mixpanel.track_links("#topic23", "Clicked on Connect topics", {"referrer": document.referrer,"name":"What can I do to be more social at college parties?"}); 
mixpanel.track_links("#topic22", "Clicked on Connect topics", {"referrer": document.referrer,"name":"If a company culture sucks, should you tell the CEO honestly?"}); 





// EVENTS
mixpanel.track_links("#event6", "Clicked on Events", {"referrer": document.referrer,"name":"Smorgasburg"}); 
mixpanel.track_links("#event7", "Clicked on Events", {"referrer": document.referrer,"name":"24-Karat Gold Photo Exhibit"}); 
mixpanel.track_links("#event8", "Clicked on Events", {"referrer": document.referrer,"name":"2014 Macy's Thanksgiving Day Parade"}); 
mixpanel.track_links("#event1", "Clicked on Events", {"referrer": document.referrer,"name":"Bryant Park winter skating"}); 
mixpanel.track_links("#event2", "Clicked on Events", {"referrer": document.referrer,"name":"TCS New York City Marathon"}); 
mixpanel.track_links("#event3", "Clicked on Events", {"referrer": document.referrer,"name":"Wicked"}); 
mixpanel.track_links("#event4", "Clicked on Events", {"referrer": document.referrer,"name":"Rite of Passage: The Early Years of Vienna Actionism"}); 
mixpanel.track_links("#event5", "Clicked on Events", {"referrer": document.referrer,"name":"New York Yankees"}); 


// GROUPS

mixpanel.track_links("#TC", "Clicked on Groups", {"referrer": document.referrer,"name":"TC"}); 
mixpanel.track_links("#Sports", "Clicked on Groups", {"referrer": document.referrer,"name":"Sports"}); 
mixpanel.track_links("#IT", "Clicked on Groups", {"referrer": document.referrer,"name":"IT"}); 
mixpanel.track_links("#NYU", "Clicked on Groups", {"referrer": document.referrer,"name":"NYU"}); 
mixpanel.track_links("#Movie", "Clicked on Groups", {"referrer": document.referrer,"name":"Movie"}); 
mixpanel.track_links("#Gym", "Clicked on Groups", {"referrer": document.referrer,"name":"Gym"}); 
mixpanel.track_links("#Trip", "Clicked on Groups", {"referrer": document.referrer,"name":"Trip"}); 




// track submission for search form
mixpanel.track_forms(".c-home-searchbox", "Search CulturaMeme");

	