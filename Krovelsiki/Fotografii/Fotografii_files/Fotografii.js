// Created by iWeb 3.0.4 local-build-20120524

function createMediaStream_id2()
{return IWCreateMediaCollection("http://roofs.github.com/Krovelsiki/Fotografii/Fotografii_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://roofs.github.com/Krovelsiki/Fotografii',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget4'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://roofs.github.com/Krovelsiki/Fotografii',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(1,new IWSize(492,369),new IWSize(492,32),new IWSize(618,416),27,27,0,new IWSize(32,44)),new IWPhotoFrame([IWCreateImage('Fotografii_files/FormalShadow_01.png'),IWCreateImage('Fotografii_files/FormalShadow_02.png'),IWCreateImage('Fotografii_files/FormalShadow_03.png'),IWCreateImage('Fotografii_files/FormalShadow_06.png'),IWCreateImage('Fotografii_files/FormalShadow_12.png'),IWCreateImage('Fotografii_files/FormalShadow_11.png'),IWCreateImage('Fotografii_files/FormalShadow_10.png'),IWCreateImage('Fotografii_files/FormalShadow_04.png')],null,2,1.000000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget4',null,'widget5',{showTitle:false,showMetric:false})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Fotografii_files/FotografiiMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
