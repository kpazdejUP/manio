gdjs.NewScene2Code = {};
gdjs.NewScene2Code.GDkostkaObjects1= [];
gdjs.NewScene2Code.GDkostkaObjects2= [];
gdjs.NewScene2Code.GDkostka2Objects1= [];
gdjs.NewScene2Code.GDkostka2Objects2= [];
gdjs.NewScene2Code.GDNewObjectObjects1= [];
gdjs.NewScene2Code.GDNewObjectObjects2= [];
gdjs.NewScene2Code.GDNewObject2Objects1= [];
gdjs.NewScene2Code.GDNewObject2Objects2= [];
gdjs.NewScene2Code.GDNewObject3Objects1= [];
gdjs.NewScene2Code.GDNewObject3Objects2= [];

gdjs.NewScene2Code.conditionTrue_0 = {val:false};
gdjs.NewScene2Code.condition0IsTrue_0 = {val:false};
gdjs.NewScene2Code.condition1IsTrue_0 = {val:false};


gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.NewScene2Code.GDNewObject3Objects1});gdjs.NewScene2Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "E");
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.NewScene2Code.GDNewObject3Objects1.createFrom(runtimeScene.getObjects("NewObject3"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gra", false);
}}

}


}; //End of gdjs.NewScene2Code.eventsList0xb25a8


gdjs.NewScene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewScene2Code.GDkostkaObjects1.length = 0;
gdjs.NewScene2Code.GDkostkaObjects2.length = 0;
gdjs.NewScene2Code.GDkostka2Objects1.length = 0;
gdjs.NewScene2Code.GDkostka2Objects2.length = 0;
gdjs.NewScene2Code.GDNewObjectObjects1.length = 0;
gdjs.NewScene2Code.GDNewObjectObjects2.length = 0;
gdjs.NewScene2Code.GDNewObject2Objects1.length = 0;
gdjs.NewScene2Code.GDNewObject2Objects2.length = 0;
gdjs.NewScene2Code.GDNewObject3Objects1.length = 0;
gdjs.NewScene2Code.GDNewObject3Objects2.length = 0;

gdjs.NewScene2Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['NewScene2Code'] = gdjs.NewScene2Code;
