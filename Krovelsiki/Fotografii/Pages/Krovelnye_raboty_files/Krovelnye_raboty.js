// Created by iWeb 3.0.4 local-build-20120524

function createMediaStream_id3()
{return IWCreatePhotocast("http://roofs.github.com/Krovelsiki/Fotografii/Pages/Krovelnye_raboty_files/rss.xml",false);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://roofs.github.com/Krovelsiki/Fotografii/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://roofs.github.com/Krovelsiki/Fotografii/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(2,new IWSize(306,306),new IWSize(306,0),new IWSize(306,320),27,27,0,new IWSize(10,15)),new IWPhotoFrame([IWCreateImage('Krovelnye_raboty_files/FormalShadow_01.png'),IWCreateImage('Krovelnye_raboty_files/FormalShadow_02.png'),IWCreateImage('Krovelnye_raboty_files/FormalShadow_03.png'),IWCreateImage('Krovelnye_raboty_files/FormalShadow_06.png'),IWCreateImage('Krovelnye_raboty_files/FormalShadow_12.png'),IWCreateImage('Krovelnye_raboty_files/FormalShadow_11.png'),IWCreateImage('Krovelnye_raboty_files/FormalShadow_10.png'),IWCreateImage('Krovelnye_raboty_files/FormalShadow_04.png')],null,2,0.350000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Krovelnye_raboty_files/Krovelnye_rabotyMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
