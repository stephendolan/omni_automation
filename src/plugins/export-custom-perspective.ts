/*{
	"type": "action",
	"targets": ["omnifocus"],
	"author": "Otto Automator",
	"identifier": "com.omni-automation.of.export-custom-perspective",
	"version": "1.3",
	"description": "Exports the chosen custom perspective to file.",
	"label": "Export Custom Perspective",
	"shortLabel": "Export Perspective",
	"paletteLabel": "Export Perspective",
  "image": "square.and.arrow.up"
}*/

interface FormValues {
    perspective: number;
}

(() => {
  const action = new PlugIn.Action(async function (_selection: any, _sender: any) {
    try {
      let perspectives: Perspective.Custom[] = [];
      perspectives = perspectives.concat(Perspective.Custom.all);

      const perspectiveNames: string[] = perspectives.map((perspective) => {
        return perspective.name;
      });

      const itemIndexes: number[] = [];
      perspectiveNames.forEach((name, index) => {
        itemIndexes.push(index);
      });

      const perspectiveMenu = new Form.Field.Option(
        "perspective", 
        "Perspective", 
        itemIndexes, 
        perspectiveNames, 
        0,
        null
      );
      perspectiveMenu.allowsNull = false;

      const inputForm = new Form();
      inputForm.addField(perspectiveMenu, null);

      const formPrompt = "Custom perspective to export:";
      const buttonTitle = "Continue";

      const formObject = await inputForm.show(formPrompt, buttonTitle);

      const chosenPerspective = perspectives[(formObject.values as FormValues)["perspective"]];
      const wrapper = chosenPerspective.fileWrapper();
      const filesaver = new FileSaver();
      await filesaver.show(wrapper);
    } catch (err: any) {
      if (!err.causedByUserCancelling) {
        new Alert(err.name, err.message).show(() => {});
      }
    }
  });

  action.validate = function (): boolean {
    return Perspective.Custom.all.length > 0;
  };

  return action;
})(); 