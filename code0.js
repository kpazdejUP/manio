gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDkostkaObjects1= [];
gdjs.NewSceneCode.GDkostkaObjects2= [];
gdjs.NewSceneCode.GDkostka2Objects1= [];
gdjs.NewSceneCode.GDkostka2Objects2= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObject2Objects1= [];
gdjs.NewSceneCode.GDNewObject2Objects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gra", false);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb25a8


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewSceneCode.GDkostkaObjects1.length = 0;
gdjs.NewSceneCode.GDkostkaObjects2.length = 0;
gdjs.NewSceneCode.GDkostka2Objects1.length = 0;
gdjs.NewSceneCode.GDkostka2Objects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects2.length = 0;

gdjs.NewSceneCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
