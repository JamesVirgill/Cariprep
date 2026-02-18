/* CariPrep — Offline Search (~2KB, zero dependencies) */
(function(){
  var pages=[
    {title:"Before the Storm",url:"../before/",tags:"prepare supplies checklist evacuation shutters generator insurance planning kit water food radio batteries documents cash"},
    {title:"During the Storm",url:"../during/",tags:"shelter surge warning watch flood wind generator carbon monoxide eye wall safety rip currents forecast cone tropical"},
    {title:"After the Storm",url:"../after/",tags:"cleanup mold food safety water boil debris scam contractor damage insurance all-clear neighbors elderly"},
    {title:"Emergency Contacts",url:"../contacts/",tags:"phone call hospital police fire basra drm ambulance 911 919 utilities bpl water btc crisis centre"},
    {title:"Hurricane Shelter List",url:"../shelters/",tags:"shelter abaco andros nassau grand bahama exuma eleuthera bimini cat island long island inagua capacity 2025"},
    {title:"Printable Checklist",url:"../checklist/",tags:"print checklist water food medical documents tools communication home prep pets supplies"},
    {title:"Supply Kit Guide",url:"../supply-kit/",tags:"supplies go bag water food flashlight radio batteries medications documents cash first aid kit pack"},
    {title:"Family Emergency Plan",url:"../family-plan/",tags:"family plan evacuation contacts shelter room drills practice household emergency"},
    {title:"Storm Surge Info",url:"../during/",tags:"storm surge depth flooding water levels danger feet deadly"},
    {title:"Hurricane Watch vs Warning",url:"../during/",tags:"watch warning difference hurricane category wind"},
    {title:"Generator Safety",url:"../during/",tags:"generator carbon monoxide CO danger indoor safety"},
    {title:"Food Safety After Storm",url:"../after/",tags:"refrigerator food 4 hours power outage discard spoiled"},
    {title:"Boil Water Advisory",url:"../after/",tags:"boil water advisory tap water safe drinking"},
    {title:"Mold Prevention",url:"../after/",tags:"mold mildew cleanup dry bleach ventilate"},
    {title:"Contractor Scams",url:"../after/",tags:"scam contractor fraud price gouging unlicensed"},
  ];

  var inp=document.getElementById("search-input");
  var res=document.getElementById("search-results");
  if(!inp||!res)return;

  function escHtml(s){
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  inp.addEventListener("input",function(){
    var q=inp.value.trim().toLowerCase();
    res.innerHTML="";
    if(q.length<2){res.classList.remove("active");return;}
    var matches=pages.filter(function(p){
      return p.title.toLowerCase().indexOf(q)>=0||p.tags.indexOf(q)>=0;
    });
    if(matches.length===0){
      res.innerHTML='<div class="search-result-item" style="color:var(--muted)">No results found</div>';
      res.classList.add("active");
      return;
    }
    matches.forEach(function(m){
      var a=document.createElement("a");
      a.className="search-result-item";
      a.href=m.url;
      a.innerHTML=escHtml(m.title);
      res.appendChild(a);
    });
    res.classList.add("active");
  });

  document.addEventListener("click",function(e){
    if(!inp.contains(e.target)&&!res.contains(e.target)){
      res.classList.remove("active");
    }
  });
})();
