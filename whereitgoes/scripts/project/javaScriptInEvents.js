

const scriptsInEvents = {

	async BrainEvents_Event1_Act10(runtime, localVars)
	{
const textInput = document.getElementById("textInput")

textInput.style.text = `
  font-size: 18px;
  background-color: #111;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
`

	},

	async BrainEvents_Event18_Act12(runtime, localVars)
	{
		
	},

	async BrainEvents_Event42_Act1(runtime, localVars)
	{
const textInput = document.getElementById("textInput")

textInput.style.text = `
  font-size: 18px;
  background-color: #111;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  border: none
`

	},

	async BrainEvents_Event49_Act2(runtime, localVars)
	{
		const shareData = {
		  title: "Where It Goes App",
		  text: "Learn how to recycle with the Where It Goes App!",
		  url: "https://azak03.github.io/eng100d/whereitgoes",
		};
		navigator.share(shareData)
	},

	async BrainEvents_Event67(runtime, localVars)
	{
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
