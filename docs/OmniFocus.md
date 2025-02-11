# <a name='Alert'><code>Alert</code></a>

 An alert interface for displaying information to the user, blocking further interaction until the alert is dismissed.
<br/><br/>


## Constructors

### <code>new <a name='AlertConstructor.constructInstance'>Alert</a>(title: `String`, message: `String`)</code> → [`Alert`](#Alert)
 Create a new alert panel with the given title and text contents.
<br/><br/>


## Instance Functions

### <code>function <a name='Alert.show'>show</a>(callback: [`Function`](#Function)`(`&zwj;option: `Number`&zwj;`)` or `null`)</code> → [`Promise`](#Promise) of `Number`
 Displays the alert. If no options have yet been added, a default "OK" option is added. Once the user selects an option, the alert is dismissed. If a callback function was supplied, it is invoked with the zero-based index of the selected option as its argument. A `Promise` is returned as well, which may also be used to collect the result of the `Alert`.
<br/><br/>


### <code>function <a name='Alert.addOption'>addOption</a>(string: `String`)</code>
 Adds an option button to the alert.
<br/><br/>


# <a name='Application'><code>Application</code></a>



## Instance Functions

### <code>function <a name='Application.openDocument'>openDocument</a>(from: [`Document`](#Document) or `null`, url: [`URL`](#URL), completed: [`Function`](#Function)`(`&zwj;documentOrError: [`Document`](#Document) or [`Error`](#Error), alreadyOpen: `Boolean`&zwj;`)`)</code>
 Attempts to open the specified document and return a reference to it asynchronously. If the document is already open, the reference is passed along. Note that due to platform sandboxing restrictions, opening the document may fail if the application doesn't have currently permission to access the given `URL`. The document, if any, that is associated with the calling script can be passed along to help grant permission to open the new document.
 The passed in function will be passed two argument. The first will be either either the `Document` or an `Error`. On success, the second argument is a `Boolean` specifying whether the document was already open.
<br/><br/>


## Instance Properties

### <code>var <a name='Application.buildVersion'>buildVersion</code></a> → [`Version`](#Version) *read-only*
 The internal build version number for the app. See also `userVersion`.
<br/><br/>


### <code>var <a name='Application.commandKeyDown'>commandKeyDown</code></a> → `Boolean` *read-only*
 Whether the Command key is currently down.
<br/><br/>


### <code>var <a name='Application.controlKeyDown'>controlKeyDown</code></a> → `Boolean` *read-only*
 Whether the Control key is currently down.
<br/><br/>


### <code>var <a name='Application.name'>name</code></a> → `String` *read-only*
 Application name.
<br/><br/>


### <code>var <a name='Application.optionKeyDown'>optionKeyDown</code></a> → `Boolean` *read-only*
 Whether the Option key is currently down.
<br/><br/>


### <code>var <a name='Application.platformName'>platformName</code></a> → `String` *read-only*
 Returns a string describing the current platform, currently `"iOS"` or `"macOS"`.
<br/><br/>


### <code>var <a name='Application.shiftKeyDown'>shiftKeyDown</code></a> → `Boolean` *read-only*
 Whether the Shift key is currently down.
<br/><br/>


### <code>var <a name='Application.userVersion'>userVersion</code></a> → [`Version`](#Version) *read-only*
 The user-visible version number for the app. See also `buildVersion`.
<br/><br/>


### <code>var <a name='Application.version'>version</code></a> → `String` *read-only*
 Deprecated: Recommend using either `userVersion` or `buildVersion`.

 For backwards compatibility with existing scripts, this returns the same result as `buildVersion.versionString`. We recommend using either the user-visible `userVersion` or the internal `buildVersion` instead, which are more clear about which version they're returning and provide their results as `Version` objects which can be semantically compared with other `Version` objects.
<br/><br/>


# <a name='ApplyResult'><code>ApplyResult</code></a>



## Class Properties

### <code>var <a name='_ApplyResult_GeneratedWrapperConstructor.SkipChildren'>SkipChildren</code></a> → [`ApplyResult`](#ApplyResult) *read-only*
 The descendants of the current item are skipped.
<br/><br/>


### <code>var <a name='_ApplyResult_GeneratedWrapperConstructor.SkipPeers'>SkipPeers</code></a> → [`ApplyResult`](#ApplyResult) *read-only*
 The unvisited peers of the current item are skipped.
<br/><br/>


### <code>var <a name='_ApplyResult_GeneratedWrapperConstructor.Stop'>Stop</code></a> → [`ApplyResult`](#ApplyResult) *read-only*
 The call to `apply` terminates with no further items being visited.
<br/><br/>


### <code>var <a name='_ApplyResult_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`ApplyResult`](#ApplyResult) *read-only*


# <a name='Array'><code>Array</code></a>

 The built-in JavaScript [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) constructor.
<br/><br/>


# <a name='FolderArray'><code>FolderArray</code></a> : [<code>Array</code>](#Array)

 An `Array` containing `Folder` objects.
<br/><br/>


## Instance Functions

### <code>function <a name='FolderArray.byName'>byName</a>(name: `String`)</code> → [`Folder`](#Folder) or `null`
 Returns the first `Folder` contained directly in this array with the given name.
<br/><br/>


# <a name='ProjectArray'><code>ProjectArray</code></a> : [<code>Array</code>](#Array)

 An `Array` containing `Project` objects.
<br/><br/>


## Instance Functions

### <code>function <a name='ProjectArray.byName'>byName</a>(name: `String`)</code> → [`Project`](#Project) or `null`
 Returns the first `Project` contained directly in this array with the given name.
<br/><br/>


# <a name='SectionArray'><code>SectionArray</code></a> : [<code>Array</code>](#Array)

 An `Array` containing `Project` and `Folder` objects.
<br/><br/>


## Instance Functions

### <code>function <a name='SectionArray.byName'>byName</a>(name: `String`)</code> → [`Project`](#Project) or [`Folder`](#Folder) or `null`
 Returns the first `Project` or `Folder` contained directly in this array with the given name.
<br/><br/>


# <a name='Library'><code>Library</code></a> : [<code>SectionArray</code>](#SectionArray)

 An `Array` of folders and projects at the top level of the database. (This can be referenced via the top-level global variable `library`.)
<br/><br/>


## Instance Functions

### <code>function <a name='DataStoreLibrary.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;section: [`Project`](#Project) or [`Folder`](#Folder)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the given function for each `Folder` and `Project` in the `Library` and recursively into any child folders. Note that the tasks in projects are not included. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


## Instance Properties

### <code>var <a name='DataStoreLibrary.get_beginning'>beginning</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the beginning of the top-level projects and folders in the database. (Reference this using `library.beginning`.)
<br/><br/>


### <code>var <a name='DataStoreLibrary.get_ending'>ending</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the ending of the top-level projects and folders in the database. (Reference this using `library.ending`.)
<br/><br/>


# <a name='TagArray'><code>TagArray</code></a> : [<code>Array</code>](#Array)

 An `Array` containing `Tag` objects.
<br/><br/>


## Instance Functions

### <code>function <a name='TagArray.byName'>byName</a>(name: `String`)</code> → [`Tag`](#Tag) or `null`
 Returns the first `Tag` contained directly in this array with the given name.
<br/><br/>


# <a name='Tags'><code>Tags</code></a> : [<code>TagArray</code>](#TagArray)

 An `Array` of tags at the top level of the database.
<br/><br/>


## Instance Functions

### <code>function <a name='DataStoreTags.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;tag: [`Tag`](#Tag)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the given function for each `Tag` in the `Library` and recursively into any child tags. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


## Instance Properties

### <code>var <a name='DataStoreTags.get_beginning'>beginning</code></a> → [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation) *read-only*
 Returns a location referring to the beginning of the top-level tags in the database.
<br/><br/>


### <code>var <a name='DataStoreTags.get_ending'>ending</code></a> → [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation) *read-only*
 Returns a location referring to the ending of the top-level tags in the database.
<br/><br/>


# <a name='TaskArray'><code>TaskArray</code></a> : [<code>Array</code>](#Array)

 An `Array` containing `Task` objects.
<br/><br/>


## Instance Functions

### <code>function <a name='TaskArray.byName'>byName</a>(name: `String`)</code> → [`Task`](#Task) or `null`
 Returns the first `Task` contained directly in this array with the given name.
<br/><br/>


# <a name='Inbox'><code>Inbox</code></a> : [<code>TaskArray</code>](#TaskArray)

 An `Array` of tasks that are in the inbox.
<br/><br/>


## Instance Functions

### <code>function <a name='DataStoreInbox.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;task: [`Task`](#Task)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the given function for each `Task` in the `Inbox` and recursively into any child tasks. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


## Instance Properties

### <code>var <a name='DataStoreInbox.get_beginning'>beginning</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 A location that can be used when adding, duplicating, or moving tasks.
<br/><br/>


### <code>var <a name='DataStoreInbox.get_ending'>ending</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 A location that can be used when adding, duplicating, or moving tasks.
<br/><br/>


# <a name='Audio'><code>Audio</code></a>



## Class Functions

### <code>function <a name='AudioConstructor.playAlert'>playAlert</a>(alert: [`Audio.Alert`](#Audio.Alert) or `null`, completed: [`Function`](#Function)`(`&zwj;&zwj;`)` or `null`)</code>
 Play the specified `Audio.Alert`. On macOS, if no alert is specified, the user's default alert sound will be played. On iOS, there is no default alert sound and nothing will be done without specifying an alert.
<br/><br/>


# <a name='Audio.Alert'><code>Audio.Alert</code></a>



## Constructors

### <code>new <a name='AudioAlertConstructor.constructInstance'>Audio.Alert</a>(url: [`URL`](#URL))</code> → [`Audio.Alert`](#Audio.Alert)


# <a name='Calendar'><code>Calendar</code></a>



## Class Properties

### <code>var <a name='CalendarConstructor.buddhist'>buddhist</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.chinese'>chinese</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.coptic'>coptic</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.current'>current</code></a> → [`Calendar`](#Calendar) *read-only*
 The user's preferred calendar
<br/><br/>


### <code>var <a name='CalendarConstructor.ethiopicAmeteAlem'>ethiopicAmeteAlem</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.ethiopicAmeteMihret'>ethiopicAmeteMihret</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.gregorian'>gregorian</code></a> → [`Calendar`](#Calendar) *read-only*
 The Gregorian calendar.
<br/><br/>


### <code>var <a name='CalendarConstructor.hebrew'>hebrew</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.indian'>indian</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.islamic'>islamic</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.islamicCivil'>islamicCivil</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.islamicTabular'>islamicTabular</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.islamicUmmAlQura'>islamicUmmAlQura</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.iso8601'>iso8601</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.japanese'>japanese</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.persian'>persian</code></a> → [`Calendar`](#Calendar) *read-only*


### <code>var <a name='CalendarConstructor.republicOfChina'>republicOfChina</code></a> → [`Calendar`](#Calendar) *read-only*


## Instance Functions

### <code>function <a name='_Calendar.dateByAddingDateComponents'>dateByAddingDateComponents</a>(date: `Date`, components: [`DateComponents`](#DateComponents))</code> → `Date` or `null`
 Returns a new `Date` by adding the given `DateComponents`, or null if no date could be calculated.
<br/><br/>


### <code>function <a name='_Calendar.dateFromDateComponents'>dateFromDateComponents</a>(components: [`DateComponents`](#DateComponents))</code> → `Date` or `null`
 Returns a new `Date` from the given `DateComponents`, or null if no date could be calculated.
<br/><br/>


### <code>function <a name='_Calendar.dateComponentsFromDate'>dateComponentsFromDate</a>(date: `Date`)</code> → [`DateComponents`](#DateComponents)
 Returns a new `DateComponents` for the given `Date`.
<br/><br/>


### <code>function <a name='_Calendar.dateComponentsBetweenDates'>dateComponentsBetweenDates</a>(start: `Date`, end: `Date`)</code> → [`DateComponents`](#DateComponents)
 Returns the difference from the start `Date` to the end `Date` as a `DateComponents`.
<br/><br/>


### <code>function <a name='_Calendar.startOfDay'>startOfDay</a>(date: `Date`)</code> → `Date`
 Returns a `Date` for the first moment of the day containing the given `Date` according to this `Calendar`.
<br/><br/>


## Instance Properties

### <code>var <a name='_Calendar.identifier'>identifier</code></a> → `String` *read-only*
 The ISO identifier for the calendar.
<br/><br/>


### <code>var <a name='_Calendar.locale'>locale</code></a> → [`Locale`](#Locale) or `null` *read-only*
 The locale of the calendar.
<br/><br/>


### <code>var <a name='_Calendar.timeZone'>timeZone</code></a> → [`TimeZone`](#TimeZone) *read-only*
 The time zone of the calendar.
<br/><br/>


# <a name='Color'><code>Color</code></a>



## Class Functions

### <code>function <a name='ColorConstructor.RGB'>RGB</a>(r: `Number`, g: `Number`, b: `Number`, a: `Number` or `null`)</code> → [`Color`](#Color)
 Makes a new color in the `RGB` colorspace, with the given components. If the alpha component is not given, 1.0 is used.
<br/><br/>


### <code>function <a name='ColorConstructor.HSB'>HSB</a>(h: `Number`, s: `Number`, b: `Number`, a: `Number` or `null`)</code> → [`Color`](#Color)
 Makes a new color in the `HSB` colorspace, with the given components. If the alpha component is not given, 1.0 is used.
<br/><br/>


### <code>function <a name='ColorConstructor.White'>White</a>(w: `Number`, a: `Number` or `null`)</code> → [`Color`](#Color)
 Makes a new color in the `White` colorspace, with the given components. If the alpha component is not given, 1.0 is used.
<br/><br/>


## Class Properties

### <code>var <a name='ColorConstructor.black'>black</code></a> → [`Color`](#Color) *read-only*
 A color in the `White` colorspace with white component of 0.0.
<br/><br/>


### <code>var <a name='ColorConstructor.blue'>blue</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (0, 0, 1, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.brown'>brown</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (0.6, 0.4, 0.2, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.clear'>clear</code></a> → [`Color`](#Color) *read-only*
 A color in the `White` colorspace with white component of 0.0 and alpha of 0.0 ("transparent black").
<br/><br/>


### <code>var <a name='ColorConstructor.cyan'>cyan</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (0, 1, 1, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.darkGray'>darkGray</code></a> → [`Color`](#Color) *read-only*
 A color in the `White` colorspace with white component of 0.333.
<br/><br/>


### <code>var <a name='ColorConstructor.gray'>gray</code></a> → [`Color`](#Color) *read-only*
 A color in the `White` colorspace with white component of 0.5.
<br/><br/>


### <code>var <a name='ColorConstructor.green'>green</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (0, 1, 0, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.lightGray'>lightGray</code></a> → [`Color`](#Color) *read-only*
 A color in the `White` colorspace with white component of 0.667.
<br/><br/>


### <code>var <a name='ColorConstructor.magenta'>magenta</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (1, 0, 1, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.orange'>orange</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (1, 0.5, 0, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.purple'>purple</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (1, 0, 1, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.red'>red</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (1, 0, 0, 1).
<br/><br/>


### <code>var <a name='ColorConstructor.white'>white</code></a> → [`Color`](#Color) *read-only*
 A color in the `White` colorspace with white component of 1.0.
<br/><br/>


### <code>var <a name='ColorConstructor.yellow'>yellow</code></a> → [`Color`](#Color) *read-only*
 A color in the `RGB` colorspace with components (1, 1, 0, 1).
<br/><br/>


## Instance Functions

### <code>function <a name='OAColor.blend'>blend</a>(otherColor: [`Color`](#Color), fraction: `Number`)</code> → [`Color`](#Color) or `null`
 Returns a new color that is a linear combination of the receiver and `fraction` of the other color (so, a fraction of 1.0 would just return the `otherColor`. If the colors cannot be blended (for example, if they cannot be converted to the same colorspace), then `null` is returned.
<br/><br/>


## Instance Properties

### <code>var <a name='OAColor.alpha'>alpha</code></a> → `Number` *read-only*
 Returns the alpha component of the color.
<br/><br/>


### <code>var <a name='OAColor.blue'>blue</code></a> → `Number` *read-only*
 Returns the blue component of the color, after converting to a `RGB` colorspace.
<br/><br/>


### <code>var <a name='OAColor.brightness'>brightness</code></a> → `Number` *read-only*
 Returns the brightness component of the color, after converting to a `HSB` colorspace.
<br/><br/>


### <code>var <a name='OAColor.colorSpace'>colorSpace</code></a> → [`ColorSpace`](#ColorSpace) *read-only*
 Returns the colorspace of the instance.
<br/><br/>


### <code>var <a name='OAColor.green'>green</code></a> → `Number` *read-only*
 Returns the green component of the color, after converting to a `RGB` colorspace.
<br/><br/>


### <code>var <a name='OAColor.hue'>hue</code></a> → `Number` *read-only*
 Returns the hue component of the color, after converting to a `HSB` colorspace.
<br/><br/>


### <code>var <a name='OAColor.red'>red</code></a> → `Number` *read-only*
 Returns the red component of the color, after converting to a `RGB` colorspace.
<br/><br/>


### <code>var <a name='OAColor.saturation'>saturation</code></a> → `Number` *read-only*
 Returns the saturation component of the color, after converting to a `HSB` colorspace.
<br/><br/>


### <code>var <a name='OAColor.white'>white</code></a> → `Number` *read-only*
 Returns the white component of the color, after converting to a `White` colorspace.
<br/><br/>


# <a name='ColorSpace'><code>ColorSpace</code></a>



## Class Properties

### <code>var <a name='_ColorSpace_GeneratedWrapperConstructor.CMYK'>CMYK</code></a> → [`ColorSpace`](#ColorSpace) *read-only*
 A colorspace with cyan, magenta, yellow, black, and alpha components.
<br/><br/>


### <code>var <a name='_ColorSpace_GeneratedWrapperConstructor.HSB'>HSB</code></a> → [`ColorSpace`](#ColorSpace) *read-only*
 A colorspace with hue, saturation, and value (or brightness) components.
<br/><br/>


### <code>var <a name='_ColorSpace_GeneratedWrapperConstructor.Named'>Named</code></a> → [`ColorSpace`](#ColorSpace) *read-only*
 A space for named colors, like system defined colors, or specific color palette spaces.
<br/><br/>


### <code>var <a name='_ColorSpace_GeneratedWrapperConstructor.Pattern'>Pattern</code></a> → [`ColorSpace`](#ColorSpace) *read-only*
 A colorspace that wraps a pattern image.
<br/><br/>


### <code>var <a name='_ColorSpace_GeneratedWrapperConstructor.RGB'>RGB</code></a> → [`ColorSpace`](#ColorSpace) *read-only*
 The sRGB colorspace with red, green, blue, and alpha components.
<br/><br/>


### <code>var <a name='_ColorSpace_GeneratedWrapperConstructor.White'>White</code></a> → [`ColorSpace`](#ColorSpace) *read-only*
 A colorspace with white and alpha components.
<br/><br/>


### <code>var <a name='_ColorSpace_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`ColorSpace`](#ColorSpace) *read-only*


# <a name='CombinedValues'><code>CombinedValues</code></a>

 CombinedValues is used as the object of a tree node in perspectives that group by a combined set of objects (currently only Tags).
<br/><br/>


## Instance Properties

### <code>var <a name='OFMCombinedValueCollationMarker.name'>name</code></a> → `String` *read-only*
 The name displayed for this group.
<br/><br/>


### <code>var <a name='OFMCombinedValueCollationMarker.values'>values</code></a> → `Array` of [`Object`](#Object) *read-only*
 The values included in the group.
<br/><br/>


# <a name='Console'><code>Console</code></a>

 The `Console` allows scripts to log debugging, warning, or error information where it can be viewed in the system console or in the console output area. A single instance of `Console` is available to scripts as the `console` global variable.
<br/><br/>


## Instance Functions

### <code>function <a name='Console.log'>log</a>(message: [`Object`](#Object), additional: `Array` of [`Object`](#Object) or `null`)</code>
 Appends a line to the application console formed by concatenating the given `message` (after converting it to a `String`), any additional arguments separated by spaces, and finally a newline.
<br/><br/>


### <code>function <a name='Console.error'>error</a>(message: [`Object`](#Object), additional: `Array` of [`Object`](#Object) or `null`)</code>


### <code>function <a name='Console.info'>info</a>(message: [`Object`](#Object), additional: `Array` of [`Object`](#Object) or `null`)</code>


### <code>function <a name='Console.warn'>warn</a>(message: [`Object`](#Object), additional: `Array` of [`Object`](#Object) or `null`)</code>
 Just calls `Console.log`, currently.
<br/><br/>


### <code>function <a name='Console.clear'>clear</a>()</code>
 Clears the console in the user-visible window.
<br/><br/>


# <a name='Credentials'><code>Credentials</code></a>

 The `Credentials` class allows storage of private username and password pairs, `URL.Bookmark` instances, and possibly other sensitive information in the future. Instances are tied to a single plug-in and single application, and may only be created in plug-ins when they are being loaded.

 For example, when a `PlugIn.Action` is being created, you could use the following pattern:

 ```
 (() => {
     let credentials = new Credentials();

     var action = new PlugIn.Action(function(selection) {
         // ... use the captured credentials ...
     });

     return action;
 })();
 ```

 Attempts to create `Credential` instances elsewhere will throw an error. Care should be taken to store instances in anonymous closures as above, and not pass them to or store them on other objects.

 Credentials are keyed off a service identifier, which your plug-in can define however it likes.
<br/><br/>


## Constructors

### <code>new <a name='CredentialsConstructor.constructInstance'>Credentials</a>()</code> → [`Credentials`](#Credentials)
 Creates a new `Credentials` instance for the currently loading plug-in. Throws an error if called outside of plug-in loading.
<br/><br/>


## Instance Functions

### <code>function <a name='Credentials.read'>read</a>(service: `String`)</code> → Object or `null`
 Looks up the current credentials for a given service identifier. If credentials have previously been stored, an object will be returned containing `"user"` an `"password"` properties.
<br/><br/>


### <code>function <a name='Credentials.write'>write</a>(service: `String`, username: `String`, password: `String`)</code>
 Creates or updates an existing credential, storing the username and password for this service securely in the Keychain.
<br/><br/>


### <code>function <a name='Credentials.remove'>remove</a>(service: `String`)</code>
 Deletes any currently stored credentials  for the specified service, either a username and password or a URL bookmark.
<br/><br/>


### <code>function <a name='Credentials.readBookmark'>readBookmark</a>(service: `String`)</code> → [`URL.Bookmark`](#URL.Bookmark) or `null`
 Reads the entry for the given service identifier and attempts to return it as a `URL.Bookmark`, or `null` if no such entry exists.
<br/><br/>


### <code>function <a name='Credentials.writeBookmark'>writeBookmark</a>(service: `String`, bookmark: [`URL.Bookmark`](#URL.Bookmark))</code>
 Stores the `URL.Bookmark` persistently for later access.
<br/><br/>


# <a name='Crypto'><code>Crypto</code></a>

 `Crypto` provides access to some of Apple's [CryptoKit](https://developer.apple.com/documentation/cryptokit)
<br/><br/>


## Class Functions

### <code>function <a name='CryptoConstructor.randomData'>randomData</a>(length: `Number`)</code> → [`Data`](#Data)
 Copy `length` bytes of cryptographically secure random data.
<br/><br/>


# <a name='Crypto.SHA256'><code>Crypto.SHA256</code></a>

 The SHA-256 hash function.
<br/><br/>


## Constructors

### <code>new <a name='SHA256Constructor.constructInstance'>Crypto.SHA256</a>()</code> → [`Crypto.SHA256`](#Crypto.SHA256)
 Create a new SHA-256 digest.
<br/><br/>


## Instance Functions

### <code>function <a name='_SHA256.update'>update</a>(data: [`Data`](#Data))</code>
 Incrementally update the digest with the given data.
<br/><br/>


### <code>function <a name='_SHA256.finalize'>finalize</a>()</code> → [`Data`](#Data)
 Finalize any remaining digest process and return the result of the hash function.
<br/><br/>


# <a name='Crypto.SHA384'><code>Crypto.SHA384</code></a>

 The SHA-384 hash function.
<br/><br/>


## Constructors

### <code>new <a name='SHA384Constructor.constructInstance'>Crypto.SHA384</a>()</code> → [`Crypto.SHA384`](#Crypto.SHA384)
 Create a new SHA-384 digest.
<br/><br/>


## Instance Functions

### <code>function <a name='_SHA384.update'>update</a>(data: [`Data`](#Data))</code>
 Incrementally update the digest with the given data.
<br/><br/>


### <code>function <a name='_SHA384.finalize'>finalize</a>()</code> → [`Data`](#Data)
 Finalize any remaining digest process and return the result of the hash function.
<br/><br/>


# <a name='Crypto.SHA512'><code>Crypto.SHA512</code></a>

 The SHA-512 hash function.
<br/><br/>


## Constructors

### <code>new <a name='SHA512Constructor.constructInstance'>Crypto.SHA512</a>()</code> → [`Crypto.SHA512`](#Crypto.SHA512)
 Create a new SHA-512 digest.
<br/><br/>


## Instance Functions

### <code>function <a name='_SHA512.update'>update</a>(data: [`Data`](#Data))</code>
 Incrementally update the digest with the given data.
<br/><br/>


### <code>function <a name='_SHA512.finalize'>finalize</a>()</code> → [`Data`](#Data)
 Finalize any remaining digest process and return the result of the hash function.
<br/><br/>


# <a name='Data'><code>Data</code></a>

 A generic bag of bytes. Mainly useful to be interpreted / converted to some other type.
<br/><br/>


## Class Functions

### <code>function <a name='DataConstructor.fromString'>fromString</a>(string: `String`, encoding: [`StringEncoding`](#StringEncoding) or `null`)</code> → [`Data`](#Data)
 Convert the string to a `Data` using the given encoding, or UTF8 if none is specified.
<br/><br/>


### <code>function <a name='DataConstructor.fromBase64'>fromBase64</a>(string: `String`)</code> → [`Data`](#Data)


## Instance Functions

### <code>function <a name='DataWrapper.toString'>toString</a>(encoding: [`StringEncoding`](#StringEncoding) or `null`)</code> → `String`
 Convert to a `String`, assuming that this `Data` using the specified encoding, or UTF8 if none is given.
<br/><br/>


### <code>function <a name='DataWrapper.toBase64'>toBase64</a>()</code> → `String`
 Convert to a Base-64 encoded string.
<br/><br/>


## Instance Properties

### <code>var <a name='DataWrapper.length'>length</code></a> → `Number` *read-only*
 Number of bytes in this data.
<br/><br/>


### <code>var <a name='DataWrapper.toObject'>toObject</code></a> → [`Object`](#Object) or `null` *read-only*


# <a name='Database'><code>Database</code></a>



## Instance Functions

### <code>function <a name='OFMXMLDataStore.objectForURL'>objectForURL</a>(url: [`URL`](#URL))</code> → [`DatabaseObject`](#DatabaseObject) or `null`
 Returns the `DatabaseObject` for the given URL, if it exists.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.tagNamed'>tagNamed</a>(name: `String`)</code> → [`Tag`](#Tag) or `null`
 Returns the first top-level `Tag` with the given name, or `null`.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.folderNamed'>folderNamed</a>(name: `String`)</code> → [`Folder`](#Folder) or `null`
 Returns the first top-level `Folder` with the given name, or `null`.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.projectNamed'>projectNamed</a>(name: `String`)</code> → [`Project`](#Project) or `null`
 Returns the first top-level `Project` with the given name, or `null`.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.projectsMatching'>projectsMatching</a>(search: `String`)</code> → `Array` of [`Project`](#Project)
 Returns each existing `Project` that Smart Matches the given `search`. The result will be in the same order and have the same projects as would be found when searching this string in the Quick Open window.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.foldersMatching'>foldersMatching</a>(search: `String`)</code> → `Array` of [`Folder`](#Folder)
 Returns each existing `Folder` that Smart Matches the given `search`. The result will be in the same order and have the same folders as would be found when searching this string in the Quick Open window.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.tagsMatching'>tagsMatching</a>(search: `String`)</code> → `Array` of [`Tag`](#Tag)
 Returns each existing `Tag` that Smart Matches the `search`. The result will be in the same order and have the same tags as would be found when searching this string in the Quick Open window.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.taskNamed'>taskNamed</a>(name: `String`)</code> → [`Task`](#Task) or `null`
 Returns the first top-level `Task` in the inbox with the given name, or `null`.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.save'>save</a>()</code>
 Saves any unsaved changes to disk. If sync is enabled and there were unsaved changes, this also triggers a sync request.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.moveTasks'>moveTasks</a>(tasks: `Array` of [`Task`](#Task), position: [`Project`](#Project), [`Task`](#Task), or [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation))</code>
 Moves tasks to a different location.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.duplicateTasks'>duplicateTasks</a>(tasks: `Array` of [`Task`](#Task), position: [`Project`](#Project), [`Task`](#Task), or [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation))</code> → [`TaskArray`](#TaskArray)
 Makes copies of the tasks and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.convertTasksToProjects'>convertTasksToProjects</a>(tasks: `Array` of [`Task`](#Task), position: [`Folder`](#Folder) or [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation))</code> → `Array` of [`Project`](#Project)
 Converts tasks to new projects at the specified location.

 For example, to convert each top-level inbox item into a new project at the end of your library and capture the resulting projects:

 ```
 const newProjects = convertTasksToProjects(inbox, library.ending);
 ```
<br/><br/>


### <code>function <a name='OFMXMLDataStore.moveSections'>moveSections</a>(sections: `Array` of [`Project`](#Project) or [`Folder`](#Folder), position: [`Folder`](#Folder) or [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation))</code>
 Moves sections to a different location.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.duplicateSections'>duplicateSections</a>(sections: `Array` of [`Project`](#Project) or [`Folder`](#Folder), position: [`Folder`](#Folder) or [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation))</code> → [`SectionArray`](#SectionArray)
 Makes copies of the sections and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.moveTags'>moveTags</a>(tags: `Array` of [`Tag`](#Tag), position: [`Tag`](#Tag) or [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation))</code>
 Moves tags to a different location.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.duplicateTags'>duplicateTags</a>(tags: `Array` of [`Tag`](#Tag), position: [`Tag`](#Tag) or [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation))</code> → [`TagArray`](#TagArray)
 Makes copies of the tags and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.cleanUp'>cleanUp</a>()</code>
 Processes inbox items that have the required information to move into their proposed containers, performs any delayed filtering, and deletes empty items.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.undo'>undo</a>()</code>
 Undoes the last undoable action, or throws an error if there are no undoable actions.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.redo'>redo</a>()</code>
 Redoes the next redoable action, or throws an error if there are no redoable actions.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.deleteObject'>deleteObject</a>(object: [`DatabaseObject`](#DatabaseObject))</code>
 Removes the object from the Database.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.copyTasksToPasteboard'>copyTasksToPasteboard</a>(tasks: `Array` of [`Task`](#Task), pasteboard: [`Pasteboard`](#Pasteboard))</code>
 Copies the given tasks to the pasteboard in a variety of formats.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.canPasteTasks'>canPasteTasks</a>(pasteboard: [`Pasteboard`](#Pasteboard))</code> → `Boolean`
 Returns true if the pasteboard contains a type that can be imported as tasks.
<br/><br/>


### <code>function <a name='OFMXMLDataStore.pasteTasksFromPasteboard'>pasteTasksFromPasteboard</a>(pasteboard: [`Pasteboard`](#Pasteboard))</code> → `Array` of [`Task`](#Task)
 Reads the most relevant pasteboard type and imports them as tasks. The tasks should then be moved to the desired destination.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMXMLDataStore.get_app'>app</code></a> → [`Application`](#Application) *read-only*
 Returns the shared `Application`.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_baseStyle'>baseStyle</code></a> → [`Style`](#Style) *read-only*
 Returns a base `Style` suitable for creating new `Text` instances.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.canRedo'>canRedo</code></a> → `Boolean` *read-only*
 Returns true if there are redoable actions.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.canUndo'>canUndo</code></a> → `Boolean` *read-only*
 Returns true if there are undoable actions.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_console'>console</code></a> → [`Console`](#Console) *read-only*
 Returns the shared `Console`.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.document'>document</code></a> → [`DatabaseDocument`](#DatabaseDocument) or `null` *read-only*


### <code>var <a name='OFMXMLDataStore.get_flattenedFolders'>flattenedFolders</code></a> → [`FolderArray`](#FolderArray) *read-only*
 Returns a flat array of all folders in the database, sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_flattenedProjects'>flattenedProjects</code></a> → [`ProjectArray`](#ProjectArray) *read-only*
 Returns a flat array of all projects in the database, sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_flattenedSections'>flattenedSections</code></a> → [`SectionArray`](#SectionArray) *read-only*
 Returns a flat array of all folders and project in the database, sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_flattenedTags'>flattenedTags</code></a> → [`TagArray`](#TagArray) *read-only*
 Returns a flat array of all tags in the database, sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_flattenedTasks'>flattenedTasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns a flat array of all tasks in the database, including inbox items, root tasks for projects, task groups and individual tasks. Tasks are sorted by their order in the database, with the inbox preceeding the library.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_folders'>folders</code></a> → [`FolderArray`](#FolderArray) *read-only*
 Returns the top-level folders in the database.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_inbox'>inbox</code></a> → [`Inbox`](#Inbox) *read-only*
 Returns a copy of the `Task`s currently in the inbox.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_library'>library</code></a> → [`Library`](#Library) *read-only*
 Returns the top-level folders and projects in the database.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.get_projects'>projects</code></a> → [`ProjectArray`](#ProjectArray) *read-only*
 Returns the top-level folders in the database.
<br/><br/>


### <code>var <a name='OFMXMLDataStore.settings'>settings</code></a> → [`Settings`](#Settings) *read-only*


### <code>var <a name='OFMXMLDataStore.get_tags'>tags</code></a> → [`Tags`](#Tags) *read-only*
 Returns the top-level tags in the database.
<br/><br/>


# <a name='Database.Fetch'><code>Database.Fetch</code></a>



## Instance Properties

### <code>var <a name='_OFMLiveFetchBase.type'>type</code></a> → [`Database.Fetch.Type`](#Database.Fetch.Type) *read-only*


# <a name='Database.Fetch.Type'><code>Database.Fetch.Type</code></a>



## Class Properties

### <code>var <a name='_Database_Fetch_Type_GeneratedWrapperConstructor.Inbox'>Inbox</code></a> → [`Database.Fetch.Type`](#Database.Fetch.Type) *read-only*
 The inbox in a project-base perspective.
<br/><br/>


### <code>var <a name='_Database_Fetch_Type_GeneratedWrapperConstructor.Other'>Other</code></a> → [`Database.Fetch.Type`](#Database.Fetch.Type) *read-only*
 Some other fetch.
<br/><br/>


### <code>var <a name='_Database_Fetch_Type_GeneratedWrapperConstructor.Untagged'>Untagged</code></a> → [`Database.Fetch.Type`](#Database.Fetch.Type) *read-only*
 The untagged tasks in a tag-based perspective.
<br/><br/>


### <code>var <a name='_Database_Fetch_Type_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Database.Fetch.Type`](#Database.Fetch.Type) *read-only*


# <a name='DatabaseObject'><code>DatabaseObject</code></a>



## Instance Properties

### <code>var <a name='OFMObject.id'>id</code></a> → [`ObjectIdentifier`](#ObjectIdentifier) *read-only*
 Returns the identifier for this object.
<br/><br/>


### <code>var <a name='OFMObject.get_url'>url</code></a> → [`URL`](#URL) or `null` *read-only*
 Returns a URL which links to this object, if one exists
<br/><br/>


# <a name='DatedObject'><code>DatedObject</code></a> : [<code>DatabaseObject</code>](#DatabaseObject)



## Instance Properties

### <code>var <a name='OFMDatedObject.get_added'>added</code></a> → `Date` or `null`
 Returns the date the object was first saved. If the object is newly inserted, this will be `null`. For newly inserted objects, the `added` property may be set (but once an object is saved for the first time, the property is read-only).
<br/><br/>


### <code>var <a name='OFMDatedObject.get_modified'>modified</code></a> → `Date` or `null`
 Returns the date the object was most recently modified. If the object is newly inserted, this will be `null`. For newly inserted objects, the `modified` property may be set (but once an object is saved for the first time, the property is read-only).
<br/><br/>


# <a name='ActiveObject'><code>ActiveObject</code></a> : [<code>DatedObject</code>](#DatedObject)



## Instance Properties

### <code>var <a name='OFMActiveObject.active'>active</code></a> → `Boolean`
 If `true`, then this object is considered active, otherwise the object is considered dropped.
<br/><br/>


### <code>var <a name='OFMActiveObject.effectiveActive'>effectiveActive</code></a> → `Boolean` *read-only*
 Returns `true` if this object and all its containers are active.
<br/><br/>


# <a name='Folder'><code>Folder</code></a> : [<code>ActiveObject</code>](#ActiveObject)



## Class Functions

### <code>function <a name='FolderConstructor.byIdentifier'>byIdentifier</a>(identifier: `String`)</code> → [`Folder`](#Folder) or `null`
 Returns the `Folder` with the specified identifier, or `null` if no such folder exists.
<br/><br/>


## Constructors

### <code>new <a name='FolderConstructor.constructInstance'>Folder</a>(name: `String`, position: [`Folder`](#Folder) or [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) or `null`)</code> → [`Folder`](#Folder)


## Instance Functions

### <code>function <a name='OFMFolder.folderNamed'>folderNamed</a>(name: `String`)</code> → [`Folder`](#Folder) or `null`
 Returns the first child `Folder` with the given name that is contained directly in this folder, or `null`.
<br/><br/>


### <code>function <a name='OFMFolder.projectNamed'>projectNamed</a>(name: `String`)</code> → [`Project`](#Project) or `null`
 Returns the first child `Project` of this folder with the given name, or `null`.
<br/><br/>


### <code>function <a name='OFMFolder.sectionNamed'>sectionNamed</a>(name: `String`)</code> → [`Project`](#Project) or [`Folder`](#Folder) or `null`
 Returns the first child `Folder` or `Project` in this folder with the given name, or `null`.
<br/><br/>


### <code>function <a name='OFMFolder.childNamed'>childNamed</a>(name: `String`)</code> → [`Project`](#Project) or [`Folder`](#Folder) or `null`
 An alias for `sectionNamed`.
<br/><br/>


### <code>function <a name='OFMFolder.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;folder: [`Folder`](#Folder)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the given function for this `Folder` and recursively into any child folders and projects. The tasks within any projects are not included. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMFolder.get_after'>after</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the position just after this folder within its containing `Folder` or `Database`.
<br/><br/>


### <code>var <a name='OFMFolder.get_before'>before</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the position just before this folder within its containing `Folder` or `Database`.
<br/><br/>


### <code>var <a name='OFMFolder.get_beginning'>beginning</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the the beginning of the contained projects and folders in this folder.
<br/><br/>


### <code>var <a name='OFMFolder.get_children'>children</code></a> → [`SectionArray`](#SectionArray) *read-only*
 An alias for `sections`.
<br/><br/>


### <code>var <a name='OFMFolder.get_ending'>ending</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the the ending of the contained projects and folders in this folder.
<br/><br/>


### <code>var <a name='OFMFolder.get_flattenedChildren'>flattenedChildren</code></a> → [`SectionArray`](#SectionArray) *read-only*
 An alias for `flattenedSections`.
<br/><br/>


### <code>var <a name='OFMFolder.get_flattenedFolders'>flattenedFolders</code></a> → [`FolderArray`](#FolderArray) *read-only*
 Returns a flat array of all folders in this folder, sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMFolder.get_flattenedProjects'>flattenedProjects</code></a> → [`ProjectArray`](#ProjectArray) *read-only*
 Returns a flat array of all projects in this folder, sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMFolder.get_flattenedSections'>flattenedSections</code></a> → [`SectionArray`](#SectionArray) *read-only*
 Returns a flat array of all folders and project in this folder, sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMFolder.get_folders'>folders</code></a> → [`FolderArray`](#FolderArray) *read-only*
 Returns the folders contained directly as children of this folder.
<br/><br/>


### <code>var <a name='OFMFolder.name'>name</code></a> → `String`
 The name of the folder.
<br/><br/>


### <code>var <a name='OFMFolder.parent'>parent</code></a> → [`Folder`](#Folder) or `null` *read-only*
 The parent `Folder` which contains this folder.
<br/><br/>


### <code>var <a name='OFMFolder.get_projects'>projects</code></a> → [`ProjectArray`](#ProjectArray) *read-only*
 Returns the projects contained directly as children of this folder.
<br/><br/>


### <code>var <a name='OFMFolder.get_sections'>sections</code></a> → [`SectionArray`](#SectionArray) *read-only*
 Returns a sorted list of the folders and projects contained directly within this folder.
<br/><br/>


### <code>var <a name='OFMFolder.status'>status</code></a> → [`Folder.Status`](#Folder.Status)
 The folder's status.
<br/><br/>


# <a name='Tag'><code>Tag</code></a> : [<code>ActiveObject</code>](#ActiveObject)



## Class Functions

### <code>function <a name='TagConstructor.byIdentifier'>byIdentifier</a>(identifier: `String`)</code> → [`Tag`](#Tag) or `null`
 Returns the `Tag` with the specified identifier, or `null` if no such tag exists.
<br/><br/>


## Class Properties

### <code>var <a name='TagConstructor.get_forecastTag'>forecastTag</code></a> → [`Tag`](#Tag) or `null` *read-only*
 The Forecast Tag, if it is set.
<br/><br/>


## Constructors

### <code>new <a name='TagConstructor.constructInstance'>Tag</a>(name: `String`, position: [`Tag`](#Tag) or [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation) or `null`)</code> → [`Tag`](#Tag)


## Instance Functions

### <code>function <a name='OFMContext.tagNamed'>tagNamed</a>(name: `String`)</code> → [`Tag`](#Tag) or `null`
 Returns the first child `Tag` with the given name that is contained directly in this tag, or `null`.
<br/><br/>


### <code>function <a name='OFMContext.childNamed'>childNamed</a>(name: `String`)</code> → [`Tag`](#Tag) or `null`
 An alias for `tagNamed`.
<br/><br/>


### <code>function <a name='OFMContext.beforeTask'>beforeTask</a>(task: [`Task`](#Task) or `null`)</code> → [`Tag.TaskInsertionLocation`](#Tag.TaskInsertionLocation)
 Returns a location indicating the position before an existing task in the `Tag`'s tasks. If no peer `Task` is specified, or the the specified task is not in the tag's tasks, this is equivalent to `beginningOfTasks`.
<br/><br/>


### <code>function <a name='OFMContext.afterTask'>afterTask</a>(task: [`Task`](#Task) or `null`)</code> → [`Tag.TaskInsertionLocation`](#Tag.TaskInsertionLocation)
 Returns a location indicating the position after an existing task in the `Tag`'s tasks. If no peer `Task` is specified, or the the specified task is not in the tag's tasks, this is equivalent to `endingOfTasks`.
<br/><br/>


### <code>function <a name='OFMContext.moveTask'>moveTask</a>(task: [`Task`](#Task), location: [`Tag.TaskInsertionLocation`](#Tag.TaskInsertionLocation))</code>
 Moves an existing associated `Task` within the tag's list of tasks. If the task is not associated with the tag, no change is made.
<br/><br/>


### <code>function <a name='OFMContext.moveTasks'>moveTasks</a>(tasks: `Array` of [`Task`](#Task), location: [`Tag.TaskInsertionLocation`](#Tag.TaskInsertionLocation))</code>
 Moves a list of associated `Task`s within the tag's list of tasks. Any tasks not currently associated with the tag are ignored.
<br/><br/>


### <code>function <a name='OFMContext.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;tag: [`Tag`](#Tag)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the given function for this `Tag` and recursively into any child tags. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMContext.get_after'>after</code></a> → [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation) *read-only*
 Returns a location referring to the position just after this tag.
<br/><br/>


### <code>var <a name='OFMContext.allowsNextAction'>allowsNextAction</code></a> → `Boolean`
 If set and the tag is active, tasks with this tag applied cannot be the next task of a project.
<br/><br/>


### <code>var <a name='OFMContext.get_availableTasks'>availableTasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns a sorted list of the tasks associated with this tag that are currently available. Recent changes may not be reflected until a `cleanUp` is performed on the database.
<br/><br/>


### <code>var <a name='OFMContext.get_before'>before</code></a> → [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation) *read-only*
 Returns a location referring to the position just before this tag.
<br/><br/>


### <code>var <a name='OFMContext.get_beginning'>beginning</code></a> → [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation) *read-only*
 Returns a location referring to the beginning of the contained tags in this tag.
<br/><br/>


### <code>var <a name='OFMContext.get_beginningOfTasks'>beginningOfTasks</code></a> → [`Tag.TaskInsertionLocation`](#Tag.TaskInsertionLocation) *read-only*
 Returns a location indicating the position before all of the `Tag`s tasks.
<br/><br/>


### <code>var <a name='OFMContext.get_children'>children</code></a> → [`TagArray`](#TagArray) *read-only*
 An alias for `tags`.
<br/><br/>


### <code>var <a name='OFMContext.get_ending'>ending</code></a> → [`Tag.ChildInsertionLocation`](#Tag.ChildInsertionLocation) *read-only*
 Returns a location referring to the ending of the contained tags in this tag.
<br/><br/>


### <code>var <a name='OFMContext.get_endingOfTasks'>endingOfTasks</code></a> → [`Tag.TaskInsertionLocation`](#Tag.TaskInsertionLocation) *read-only*
 Returns a location indicating the position after all of the `Tag`s tasks.
<br/><br/>


### <code>var <a name='OFMContext.get_flattenedChildren'>flattenedChildren</code></a> → [`TagArray`](#TagArray) *read-only*
 An alias for `flattenedTags`.
<br/><br/>


### <code>var <a name='OFMContext.get_flattenedTags'>flattenedTags</code></a> → [`TagArray`](#TagArray) *read-only*
 Returns a flat array of all tags contained within this tag. Tags are sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMContext.name'>name</code></a> → `String`


### <code>var <a name='OFMContext.parent'>parent</code></a> → [`Tag`](#Tag) or `null` *read-only*
 The parent `Tag` which contains this tag.
<br/><br/>


### <code>var <a name='OFMContext.get_projects'>projects</code></a> → [`ProjectArray`](#ProjectArray) *read-only*
 A convenience property that returns only `Project`s for the root tasks associated with this `Tag`.
<br/><br/>


### <code>var <a name='OFMContext.get_remainingTasks'>remainingTasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns a sorted list of the tasks associated with this tag that remaing to be completed. Recent changes may not be reflected until a `cleanUp` is performed on the database.
<br/><br/>


### <code>var <a name='OFMContext.status'>status</code></a> → [`Tag.Status`](#Tag.Status)
 The current status of the tag as a whole, which is derived from `allowsNextAction` and `active`.
<br/><br/>


### <code>var <a name='OFMContext.get_tags'>tags</code></a> → [`TagArray`](#TagArray) *read-only*
 Returns a sorted list of the tags contained directly within this tag, sorted by their library order.
<br/><br/>


### <code>var <a name='OFMContext.get_tasks'>tasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns a sorted list of the tasks associated with this tag.
<br/><br/>


# <a name='Task'><code>Task</code></a> : [<code>ActiveObject</code>](#ActiveObject)



## Class Functions

### <code>function <a name='TaskConstructor.byParsingTransportText'>byParsingTransportText</a>(text: `String`, singleTask: `Boolean` or `null`)</code> → `Array` of [`Task`](#Task)
 Returns an array of tasks by parsing the transport text formatted input. Optionally, only the first task can be requested (but will still be returned in an array).
<br/><br/>


### <code>function <a name='TaskConstructor.byIdentifier'>byIdentifier</a>(identifier: `String`)</code> → [`Task`](#Task) or `null`
 Returns the `Task` with the specified identifier, or `null` if no such task exists.
<br/><br/>


## Constructors

### <code>new <a name='TaskConstructor.constructInstance'>Task</a>(name: `String`, position: [`Project`](#Project), [`Task`](#Task), or [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) or `null`)</code> → [`Task`](#Task)
 Returns a new `Task` at the given location. If a project or task is given as a location, the new task is placed at the end of the children of that parent. If no location is specified, then the task is created at the end of the inbox.
<br/><br/>


## Instance Functions

### <code>function <a name='OFMTask.taskNamed'>taskNamed</a>(name: `String`)</code> → [`Task`](#Task) or `null`
 Returns the first child `Task` with the given name that is contained directly in this task, or `null`.
<br/><br/>


### <code>function <a name='OFMTask.childNamed'>childNamed</a>(name: `String`)</code> → [`Task`](#Task) or `null`
 An alias for `taskNamed`.
<br/><br/>


### <code>function <a name='OFMTask.appendStringToNote'>appendStringToNote</a>(stringToAppend: `String`)</code>
 Appends `stringToAppend` to the end of the `Task`'s `note`.
<br/><br/>


### <code>function <a name='OFMTask.addLinkedFileURL'>addLinkedFileURL</a>(url: [`URL`](#URL))</code>
 Links a file URL to this task. In order to be considered a file URL, `url` must have the `file` scheme. That is, `url` must be of the form `file://path-to-file`. The file at `url` will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the `addAttachment` function. Linking files is especially useful for large files, as including large files in the database can degrade app performance.
<br/><br/>


### <code>function <a name='OFMTask.removeLinkedFileWithURL'>removeLinkedFileWithURL</a>(url: [`URL`](#URL))</code>
 Removes the first link to a file with the given `url`. This removes the bookmark that leads to the file at `url`. If the file itself is present in the database, use the `removeAttachmentAtIndex` function instead.
<br/><br/>


### <code>function <a name='OFMTask.addAttachment'>addAttachment</a>(attachment: [`FileWrapper`](#FileWrapper))</code>
 Adds `attachment` as an attachment to the task. If the attachment is large, consider using the `addLinkedFileURL` function instead. Including large attachments in the database can degrade app performance.
<br/><br/>


### <code>function <a name='OFMTask.removeAttachmentAtIndex'>removeAttachmentAtIndex</a>(index: `Number`)</code>
 Removes the attachment at `index` from this task's `attachments` array.
<br/><br/>


### <code>function <a name='OFMTask.beforeTag'>beforeTag</a>(tag: [`Tag`](#Tag) or `null`)</code> → [`Task.TagInsertionLocation`](#Task.TagInsertionLocation)
 Returns a location indicating the position before an existing tag in the `Task`'s tags. If no peer `Tag` is specified, or the the specified tag is not in the task's tags, this is equivalent to `beginningOfTags`.
<br/><br/>


### <code>function <a name='OFMTask.afterTag'>afterTag</a>(tag: [`Tag`](#Tag) or `null`)</code> → [`Task.TagInsertionLocation`](#Task.TagInsertionLocation)
 Returns a location indicating the position after an existing tag in the `Task`'s tags. If no peer `Tag` is specified, or the the specified tag is not in the task's tags, this is equivalent to `endingOfTags`.
<br/><br/>


### <code>function <a name='OFMTask.addTag'>addTag</a>(tag: [`Tag`](#Tag), location: [`Task.TagInsertionLocation`](#Task.TagInsertionLocation) or `null`)</code>
 Adds a `Tag` to this task at the specified location relative to its other tags, or at the end if no location is specified. If the tag is already present, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
<br/><br/>


### <code>function <a name='OFMTask.addTags'>addTags</a>(tags: `Array` of [`Tag`](#Tag), location: [`Task.TagInsertionLocation`](#Task.TagInsertionLocation) or `null`)</code>
 Adds multiple `Tag`s to this this task at the specified location relative to its other tags, or at the end if no location is specified.. For any tags already associated with the `Task`, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
<br/><br/>


### <code>function <a name='OFMTask.moveTag'>moveTag</a>(tag: [`Tag`](#Tag), location: [`Task.TagInsertionLocation`](#Task.TagInsertionLocation))</code>
 Moves an existing associated `Tag` within the task's list of tags. If the tag is not associated with the task, no change is made.
<br/><br/>


### <code>function <a name='OFMTask.moveTags'>moveTags</a>(tags: `Array` of [`Tag`](#Tag), location: [`Task.TagInsertionLocation`](#Task.TagInsertionLocation))</code>
 Moves a list of associated `Tag`s within the task's list of tags. Any tags not currently associated with the task are ignored.
<br/><br/>


### <code>function <a name='OFMTask.removeTag'>removeTag</a>(tag: [`Tag`](#Tag))</code>
 Removes a `Tag` from this task. If the tag is not associated with this task, no change is made.
<br/><br/>


### <code>function <a name='OFMTask.removeTags'>removeTags</a>(tags: `Array` of [`Tag`](#Tag))</code>
 Removes multiple `Tag`s from this task. If a tag is not associated with this task, no change is made.
<br/><br/>


### <code>function <a name='OFMTask.clearTags'>clearTags</a>()</code>
 Removes multiple `Tag`s from this task. If a tag is not associated with this task, no change is made.
<br/><br/>


### <code>function <a name='OFMTask.markComplete'>markComplete</a>(date: `Date` or `null`)</code> → [`Task`](#Task)
 If the task is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating tasks, this makes a clone of the task and marks that clone as completed. In either case, the task that has been marked completed is returned.
<br/><br/>


### <code>function <a name='OFMTask.markIncomplete'>markIncomplete</a>()</code>
 If the task is completed, marks it as incomplete.
<br/><br/>


### <code>function <a name='OFMTask.drop'>drop</a>(allOccurrences: `Boolean`, dateDropped: `Date` or `null`)</code>
 Drops this `Task`. If true is passed in for `allOccurrences` then this task will not repeat, even if it has a `repititionRule` set on it. If false is passed in for `allOccurrences`, this task will repeat as normal. If `dateDropped` is specified, it will be used as the drop date.
<br/><br/>


### <code>function <a name='OFMTask.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;task: [`Task`](#Task)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the given function for this `Task` and recursively into any child task. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


### <code>function <a name='OFMTask.addNotification'>addNotification</a>(info: `Number` or `Date`)</code> → [`Task.Notification`](#Task.Notification)
 Add a notification from the specification in `info`. Supplying a `Date` creates an absolute notification that will fire at that date. Supplying a `Double` will create a due-relative notification. Specifying a due relative notification when this task's effectiveDueDate is not set will result in an error.
<br/><br/>


### <code>function <a name='OFMTask.removeNotification'>removeNotification</a>(notification: [`Task.Notification`](#Task.Notification))</code>
 Remove an active notification for this task. Supplying a notification that is not in this task's `notifications` array, or a notification that has `task` to something other than this task results in an error.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMTask.get_after'>after</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 The location after this task within its parent task's children. If this task has no parent task, then this is the position adjacent to it in its container.
<br/><br/>


### <code>var <a name='OFMTask.get_assignedContainer'>assignedContainer</code></a> → [`Project`](#Project), [`Task`](#Task), or [`Inbox`](#Inbox) or `null`
 For tasks in the inbox, the tentatively assigned project or parent task, which will be applied on cleanup.
<br/><br/>


### <code>var <a name='OFMTask.get_attachments'>attachments</code></a> → `Array` of [`FileWrapper`](#FileWrapper)
 An array of `FileWrapper` objects representing the attachments associated with the task.
<br/><br/>


### <code>var <a name='OFMTask.get_before'>before</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 The location before this task within its parent task's children. If this task has no parent task, then this is the position adjacent to it in its container.
<br/><br/>


### <code>var <a name='OFMTask.get_beginning'>beginning</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 The location at the beginning of this task's children.
<br/><br/>


### <code>var <a name='OFMTask.get_beginningOfTags'>beginningOfTags</code></a> → [`Task.TagInsertionLocation`](#Task.TagInsertionLocation) *read-only*
 Returns a location indicating the position before all of the `Task`s tags.
<br/><br/>


### <code>var <a name='OFMTask.get_children'>children</code></a> → [`TaskArray`](#TaskArray) *read-only*
 An alias for `tasks`.
<br/><br/>


### <code>var <a name='OFMTask.completed'>completed</code></a> → `Boolean` *read-only*
 True if the task has been marked completed. Note that a task may be effectively considered completed if a containing task is marked completed.
<br/><br/>


### <code>var <a name='OFMTask.completedByChildren'>completedByChildren</code></a> → `Boolean`
 If set, the Task will be automatically marked completed when its last child Task is marked completed.
<br/><br/>


### <code>var <a name='OFMTask.completionDate'>completionDate</code></a> → `Date` or `null` *read-only*
 If set, the Task is completed.
<br/><br/>


### <code>var <a name='OFMTask.containingProject'>containingProject</code></a> → [`Project`](#Project) or `null` *read-only*
 The `Project` that this `Task` is contained in, either as the root of the project or indirectly from a parent task. If this task is in the inbox, then this will be `null`.
<br/><br/>


### <code>var <a name='OFMTask.deferDate'>deferDate</code></a> → `Date` or `null`
 If set, the Task is not actionable until this date.
<br/><br/>


### <code>var <a name='OFMTask.dropDate'>dropDate</code></a> → `Date` or `null` *read-only*
 If set, the Task is dropped.
<br/><br/>


### <code>var <a name='OFMTask.dueDate'>dueDate</code></a> → `Date` or `null`
 If set, the Task should be completed by this date.
<br/><br/>


### <code>var <a name='OFMTask.effectiveCompletedDate'>effectiveCompletedDate</code></a> → `Date` or `null` *read-only*
 Deprecated: Please use the `effectiveCompletionDate` property instead.
<br/><br/>


### <code>var <a name='OFMTask.effectiveCompletionDate'>effectiveCompletionDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective completion date for the `Task`, based on its local `completionDate` and those of its containers.
<br/><br/>


### <code>var <a name='OFMTask.effectiveDeferDate'>effectiveDeferDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective defer date for the `Task`, based on its local `deferDate` and those of its containers.
<br/><br/>


### <code>var <a name='OFMTask.effectiveDropDate'>effectiveDropDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective drop date for the `Task`, based on its local `dropDate` and those of its containers.
<br/><br/>


### <code>var <a name='OFMTask.effectiveDueDate'>effectiveDueDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective due date for the `Task`, based on its local `dateDue` and those of its containers.
<br/><br/>


### <code>var <a name='OFMTask.effectiveFlagged'>effectiveFlagged</code></a> → `Boolean` *read-only*
 Returns the computed effective flagged status for the `Task`, based on its local `flagged` and those of its containers.
<br/><br/>


### <code>var <a name='OFMTask.get_ending'>ending</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 The location at the end of this task's children.
<br/><br/>


### <code>var <a name='OFMTask.get_endingOfTags'>endingOfTags</code></a> → [`Task.TagInsertionLocation`](#Task.TagInsertionLocation) *read-only*
 Returns a location indicating the position after all of the `Task`s tags.
<br/><br/>


### <code>var <a name='OFMTask.estimatedMinutes'>estimatedMinutes</code></a> → `Number` or `null`
 The estimated number of minutes this task will take to finish, or `null` if no estimate has been made.
<br/><br/>


### <code>var <a name='OFMTask.flagged'>flagged</code></a> → `Boolean`
 The flagged status of the task.
<br/><br/>


### <code>var <a name='OFMTask.get_flattenedChildren'>flattenedChildren</code></a> → [`TaskArray`](#TaskArray) *read-only*
 An alias for `flattenedTasks`.
<br/><br/>


### <code>var <a name='OFMTask.get_flattenedTasks'>flattenedTasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns a flat array of all tasks contained within this task. Tasks are sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMTask.hasChildren'>hasChildren</code></a> → `Boolean` *read-only*
 Returns `true` if this task has children, more efficiently than checking if `children` is empty.
<br/><br/>


### <code>var <a name='OFMTask.inInbox'>inInbox</code></a> → `Boolean` *read-only*
 True if the task is a direct child of the inbox, but not if the task is contained by another task that is in the inbox.
<br/><br/>


### <code>var <a name='OFMTask.linkedFileURLs'>linkedFileURLs</code></a> → `Array` of [`URL`](#URL) *read-only*
 The list of file URLs linked to this task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.
<br/><br/>


### <code>var <a name='OFMTask.name'>name</code></a> → `String`
 The title of the task.
<br/><br/>


### <code>var <a name='OFMTask.note'>note</code></a> → `String`
 The task's note.
<br/><br/>


### <code>var <a name='OFMTask.get_noteText'>noteText</code></a> → [`Text`](#Text)
 The task's note as a rich `Text` object.
<br/><br/>


### <code>var <a name='OFMTask.notifications'>notifications</code></a> → `Array` of [`Task.Notification`](#Task.Notification) *read-only*
 An array of the notifications that are active for this task.
<br/><br/>


### <code>var <a name='OFMTask.parent'>parent</code></a> → [`Task`](#Task) or `null` *read-only*
 The parent `Task` which contains this task.
<br/><br/>


### <code>var <a name='OFMTask.project'>project</code></a> → [`Project`](#Project) or `null` *read-only*
 The `Project` that this `Task` is the root task of, or `null` if this task is in the inbox or contained by another task.
<br/><br/>


### <code>var <a name='OFMTask.repetitionRule'>repetitionRule</code></a> → [`Task.RepetitionRule`](#Task.RepetitionRule) or `null`
 The object holding the repetition properties for this task, or null if it is not repeating.
<br/><br/>


### <code>var <a name='OFMTask.sequential'>sequential</code></a> → `Boolean`
 If `true`, then children of this task form a dependency chain. For example, the first task blocks the second one until the first is completed.
<br/><br/>


### <code>var <a name='OFMTask.get_shouldUseFloatingTimeZone'>shouldUseFloatingTimeZone</code></a> → `Boolean`
 When set, the `dueDate` and `deferDate` properties will use floating time zones. (Note: if a `Task` has no due or defer dates assigned, this property will revert to the database's default setting.)
<br/><br/>


### <code>var <a name='OFMTask.get_tags'>tags</code></a> → [`TagArray`](#TagArray) *read-only*
 Returns the `Tag`s associated with this `Task`.
<br/><br/>


### <code>var <a name='OFMTask.taskStatus'>taskStatus</code></a> → [`Task.Status`](#Task.Status) *read-only*
 Returns the current status of the task.
<br/><br/>


### <code>var <a name='OFMTask.get_tasks'>tasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns all the tasks contained directly in this task, sorted by their library order.
<br/><br/>


# <a name='Perspective.Custom'><code>Perspective.Custom</code></a> : [<code>DatedObject</code>](#DatedObject)



## Class Functions

### <code>function <a name='PerspectiveConstructor.byName'>byName</a>(name: `String`)</code> → [`Perspective.Custom`](#Perspective.Custom) or `null`
 A custom perspective with the given name, if one exists. If there are multiple perspectives with the same name, it is not defined which will be returned.
<br/><br/>


### <code>function <a name='PerspectiveConstructor.byIdentifier'>byIdentifier</a>(identifier: `String`)</code> → [`Perspective.Custom`](#Perspective.Custom) or `null`
 Returns the custom perspective with the specified identifier, or `null` if no such perspective exists.
<br/><br/>


## Class Properties

### <code>var <a name='PerspectiveConstructor.get_all'>all</code></a> → `Array` of [`Perspective.Custom`](#Perspective.Custom) *read-only*
 Returns all the custom perspectives.
<br/><br/>


## Instance Functions

### <code>function <a name='OFMPerspective.fileWrapper'>fileWrapper</a>()</code> → [`FileWrapper`](#FileWrapper)
 Returns an archived file wrapper for the custom perspective. The file wrapper's preferred filename will be the name of the perspective with an appropriate file extension applied. Its contents will include a plist representing the perspective's settings, along with any image attachments needed to display its icon.
<br/><br/>


### <code>function <a name='OFMPerspective.writeFileRepresentationIntoDirectory'>writeFileRepresentationIntoDirectory</a>(parentURL: [`URL`](#URL))</code> → [`URL`](#URL)
 Writes the perspective's `fileWrapper()` within a given parent directory URL, returning the URL of the saved FileWrapper. This function requires sandboxed access to the parent folder; it may be easier to work with the perspective's `fileWrapper()`, which can be accessed directly or saved to disk using `FileSaver`.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMPerspective.get_archivedFilterRules'>archivedFilterRules</code></a> → [`Object`](#Object)
 For a custom perspective, `archivedFilterRules` holds a JSON archive representing the perspective's rules. These rules will be interpreted differently based on the `archivedTopLevelFilterAggregation` setting.
<br/><br/>


### <code>var <a name='OFMPerspective.archivedTopLevelFilterAggregation'>archivedTopLevelFilterAggregation</code></a> → `String` or `null`
 For a custom perspective, the `archivedTopLevelFilterAggregation` indicates which aggregation method is being used to interpret the `archivedFilterRules`: "all", "any", or "none"
<br/><br/>


### <code>var <a name='OFMPerspective.identifier'>identifier</code></a> → `String` *read-only*
 The unique identifier of the custom perspective.
<br/><br/>


### <code>var <a name='OFMPerspective.name'>name</code></a> → `String`
 The name of the custom perspective.
<br/><br/>


# <a name='Task.Notification'><code>Task.Notification</code></a> : [<code>DatedObject</code>](#DatedObject)



## Instance Properties

### <code>var <a name='OFMAlarm.get_absoluteFireDate'>absoluteFireDate</code></a> → `Date`
 The absolute date at which this notification will fire, if its `kind` is `absolute`. Getting or setting this property throws an error if this notification's `kind` is not `absolute`.
<br/><br/>


### <code>var <a name='OFMAlarm.initialFireDate'>initialFireDate</code></a> → `Date` *read-only*
 The time at which this notification will fire. For due or defer-relative notifications, this date will change with its `task` object's due and defer dates.
<br/><br/>


### <code>var <a name='OFMAlarm.isSnoozed'>isSnoozed</code></a> → `Boolean` *read-only*
 Whether or not this notification has been snoozed.
<br/><br/>


### <code>var <a name='OFMAlarm.kind'>kind</code></a> → [`Task.Notification.Kind`](#Task.Notification.Kind) *read-only*
 This notification's kind. A `kind` of `unknown` indicates that the notification is in an invalid state.
<br/><br/>


### <code>var <a name='OFMAlarm.nextFireDate'>nextFireDate</code></a> → `Date` or `null` *read-only*
 The next time at which this notification will fire. This will only have a value if the `initialFireDate` is not yet reached, or this notification's `repeatInterval` is greater than 0.
<br/><br/>


### <code>var <a name='OFMAlarm.get_relativeFireOffset'>relativeFireOffset</code></a> → `Number`
 The relative offset in minutes at which this notification will fire from the specified date on its `task`. Getting or setting this property throws an error if this notification's `kind` is not either `dueRelative` or `deferRelative`.
<br/><br/>


### <code>var <a name='OFMAlarm.repeatInterval'>repeatInterval</code></a> → `Number`
 How often in seconds this notification will fire once its `initialFireDate` is reached. Setting this to 0 or any negative number will cease repetition of this notification.
<br/><br/>


### <code>var <a name='OFMAlarm.task'>task</code></a> → [`Task`](#Task) or `null` *read-only*
 The `Task` object this notification will fire for.
<br/><br/>


### <code>var <a name='OFMAlarm.usesFloatingTimeZone'>usesFloatingTimeZone</code></a> → `Boolean` *read-only*
 Whether or not the notification's fire date uses floating time zones. This can only return true if the notification's `kind` is absolute`. This can be changed by setting `shouldUseFloatingTimeZone` on this notification's `task`
<br/><br/>


# <a name='Project'><code>Project</code></a> : [<code>DatabaseObject</code>](#DatabaseObject)



## Class Functions

### <code>function <a name='ProjectConstructor.byIdentifier'>byIdentifier</a>(identifier: `String`)</code> → [`Project`](#Project) or `null`
 Returns the `Project` with the specified identifier, or `null` if no such project exists.
<br/><br/>


## Constructors

### <code>new <a name='ProjectConstructor.constructInstance'>Project</a>(name: `String`, position: [`Folder`](#Folder) or [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) or `null`)</code> → [`Project`](#Project)


## Instance Functions

### <code>function <a name='OFMProjectInfo.taskNamed'>taskNamed</a>(name: `String`)</code> → [`Task`](#Task) or `null`
 Returns the first top-level `Task` in this project the given name, or `null`.
<br/><br/>


### <code>function <a name='OFMProjectInfo.appendStringToNote'>appendStringToNote</a>(stringToAppend: `String`)</code>
 Appends `stringToAppend` to the end of the `Project`'s root `Task`'s `note`.
<br/><br/>


### <code>function <a name='OFMProjectInfo.addAttachment'>addAttachment</a>(attachment: [`FileWrapper`](#FileWrapper))</code>
 Adds `attachment` as an attachment to the `Project`'s root `Task`. If the attachment is large, consider using the `addLinkedFileURL` function instead. Including large attachments in the database can degrade app performance.
<br/><br/>


### <code>function <a name='OFMProjectInfo.removeAttachmentAtIndex'>removeAttachmentAtIndex</a>(index: `Number`)</code>
 Removes the attachment at `index` from this `Project`'s root `Task`'s `attachments` array.
<br/><br/>


### <code>function <a name='OFMProjectInfo.markComplete'>markComplete</a>(date: `Date` or `null`)</code> → [`Task`](#Task)
 If the project is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating project, this makes a clone of the project and marks that clone as completed. In either case, the project that has been marked completed is returned.
<br/><br/>


### <code>function <a name='OFMProjectInfo.markIncomplete'>markIncomplete</a>()</code>
 If the project is completed, marks it as incomplete.
<br/><br/>


### <code>function <a name='OFMProjectInfo.addNotification'>addNotification</a>(info: `Number` or `Date`)</code> → [`Task.Notification`](#Task.Notification)
 Add a notification to the project from the specification in `info`. Supplying a `Date` creates an absolute notification that will fire at that date. Supplying a `Double` will create a due-relative notification. Specifying a due-relative notification when this project's `task`'s effectiveDueDate is not set will result in an error.
<br/><br/>


### <code>function <a name='OFMProjectInfo.removeNotification'>removeNotification</a>(notification: [`Task.Notification`](#Task.Notification))</code>
 Remove an active notification for this project. Supplying a notification that is not in this task's `notifications` array, or a notification that has `task` to something other than this project's `task` results in an error.
<br/><br/>


### <code>function <a name='OFMProjectInfo.addTag'>addTag</a>(tag: [`Tag`](#Tag))</code>
 Adds a `Tag` to this project, appending it to the end of the list of associated tags. If the tag is already present, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
<br/><br/>


### <code>function <a name='OFMProjectInfo.addTags'>addTags</a>(tags: `Array` of [`Tag`](#Tag))</code>
 Adds multiple `Tag`s to this project, appending them to the end of the list of associated tags. For any tags already associated with the `Task`, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
<br/><br/>


### <code>function <a name='OFMProjectInfo.removeTag'>removeTag</a>(tag: [`Tag`](#Tag))</code>
 Removes a `Tag` from this project. If the tag is not associated with this project, no change is made.
<br/><br/>


### <code>function <a name='OFMProjectInfo.removeTags'>removeTags</a>(tags: `Array` of [`Tag`](#Tag))</code>
 Removes multiple `Tag`s from this project. If a tag is not associated with this project, no change is made.
<br/><br/>


### <code>function <a name='OFMProjectInfo.clearTags'>clearTags</a>()</code>
 Removes multiple `Tag`s from this project. If a tag is not associated with this project, no change is made.
<br/><br/>


### <code>function <a name='OFMProjectInfo.addLinkedFileURL'>addLinkedFileURL</a>(url: [`URL`](#URL))</code>
 Links a file URL to this task. In order to be considered a file URL, `url` must have the `file` scheme. That is, `url` must be of the form `file://path-to-file`. The file at `url` will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the `addAttachment` function. Linking files is especially useful for large files, as including large files in the database can degrade app performance. This function throws an error if invoked on iOS.
<br/><br/>


### <code>function <a name='OFMProjectInfo.removeLinkedFileWithURL'>removeLinkedFileWithURL</a>(url: [`URL`](#URL))</code>
 Removes the first link to a file with the given `url`. This removes the bookmark that leads to the file at `url`. If the file itself is present in the database, use the `removeAttachmentAtIndex` function instead.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMProjectInfo.get_after'>after</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the position just after this project within its containing `Folder` or `Database`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_attachments'>attachments</code></a> → `Array` of [`FileWrapper`](#FileWrapper)
 An array of `FileWrapper` objects representing the attachments associated with the `Project`'s root `Task`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_before'>before</code></a> → [`Folder.ChildInsertionLocation`](#Folder.ChildInsertionLocation) *read-only*
 Returns a location referring to the position just before this project within its containing `Folder` or `Database`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_beginning'>beginning</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 Returns a location referring to the position after the last `Task` directly contained in the root `task` of this project.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_children'>children</code></a> → [`TaskArray`](#TaskArray) *read-only*
 An alias for `tasks`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_completed'>completed</code></a> → `Boolean` *read-only*
 True if the project has been marked completed. Note that a project may be effectively considered completed if a containing project is marked completed.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_completedByChildren'>completedByChildren</code></a> → `Boolean`
 If set, the project will be automatically marked completed when its last child Task is marked completed.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_completionDate'>completionDate</code></a> → `Date` or `null`
 If set, the project is completed.
<br/><br/>


### <code>var <a name='OFMProjectInfo.containsSingletonActions'>containsSingletonActions</code></a> → `Boolean`
 If set to `true`, the project contains single tasks, and has no next task.
<br/><br/>


### <code>var <a name='OFMProjectInfo.defaultSingletonActionHolder'>defaultSingletonActionHolder</code></a> → `Boolean`
 If set to `true`, this is the `Project` that inbox tasks that have enough information specified (as selected by the user's preferences) will be filed into upon a clean-up.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_deferDate'>deferDate</code></a> → `Date` or `null`
 If set, the project is not actionable until this date.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_dropDate'>dropDate</code></a> → `Date` or `null`
 If set, the project is dropped.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_dueDate'>dueDate</code></a> → `Date` or `null`
 If set, the project should be completed by this date.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_effectiveCompletedDate'>effectiveCompletedDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective completion date for the `Project`, based on its local `completionDate` and those of its containers.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_effectiveDeferDate'>effectiveDeferDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective defer date for the `Project`, based on its local `deferDate` and those of its containers.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_effectiveDropDate'>effectiveDropDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective drop date for the `Project`, based on its local `dropDate` and those of its containers.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_effectiveDueDate'>effectiveDueDate</code></a> → `Date` or `null` *read-only*
 Returns the computed effective due date for the `Project`, based on its local `dateDue` and those of its containers.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_effectiveFlagged'>effectiveFlagged</code></a> → `Boolean` *read-only*
 Returns the computed effective flagged status for the `Project`, based on its local `flagged` and those of its containers.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_ending'>ending</code></a> → [`Task.ChildInsertionLocation`](#Task.ChildInsertionLocation) *read-only*
 Returns a location referring to the position before the first `Task` directly contained in the root `task` of this project.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_estimatedMinutes'>estimatedMinutes</code></a> → `Number` or `null`
 The estimated number of minutes this `Project` will take to finish, or `null` if no estimate has been made.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_flagged'>flagged</code></a> → `Boolean`
 The flagged status of the project.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_flattenedChildren'>flattenedChildren</code></a> → [`TaskArray`](#TaskArray) *read-only*
 An alias for `flattenedTasks`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_flattenedTasks'>flattenedTasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns a flat array of all tasks contained within this `Project`'s root `Task`. Tasks are sorted by their order in the database.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_hasChildren'>hasChildren</code></a> → `Boolean` *read-only*
 Returns `true` if this `Project`'s root `Task` has children, more efficiently than checking if `children` is empty.
<br/><br/>


### <code>var <a name='OFMProjectInfo.lastReviewDate'>lastReviewDate</code></a> → `Date` or `null`
 The date on which the last review was performed. See also `nextReviewDate`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_linkedFileURLs'>linkedFileURLs</code></a> → `Array` of [`URL`](#URL) *read-only*
 The list of file URLs linked to this project's root task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_name'>name</code></a> → `String`
 The name of the `Project`s root task.
<br/><br/>


### <code>var <a name='OFMProjectInfo.nextReviewDate'>nextReviewDate</code></a> → `Date` or `null`
 The scheduled date for the next review. See also `nextReviewDate`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.nextTask'>nextTask</code></a> → [`Task`](#Task) or `null` *read-only*
 Returns the very next task that can be completed in the project, or `null` if there is none or the project contains singleton actions.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_note'>note</code></a> → `String`
 The `Project`'s root `Task`'s note.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_noteText'>noteText</code></a> → [`Text`](#Text)
 The `Project`'s root `Task`'s note as a rich `Text` object.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_notifications'>notifications</code></a> → `Array` of [`Task.Notification`](#Task.Notification) *read-only*
 An array of the notifications that are active for this project.
<br/><br/>


### <code>var <a name='OFMProjectInfo.parentFolder'>parentFolder</code></a> → [`Folder`](#Folder) or `null` *read-only*
 The `Folder` which contains this project.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_repetitionRule'>repetitionRule</code></a> → [`Task.RepetitionRule`](#Task.RepetitionRule) or `null`
 The object holding the repetition properties for this project, or null if it is not repeating.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_reviewInterval'>reviewInterval</code></a> → [`Project.ReviewInterval`](#Project.ReviewInterval)
 The object holding the review repetition properties for this project. See also `lastReviewDate and `nextReviewDate`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_sequential'>sequential</code></a> → `Boolean`
 If `true`, then children of this project form a dependency chain. For example, the first task blocks the second one until the first is completed.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_shouldUseFloatingTimeZone'>shouldUseFloatingTimeZone</code></a> → `Boolean`
 When set, the `dueDate` and `deferDate` properties will use floating time zones. (Note: if a `Project` has no due or defer dates assigned, this property will revert to the database's default setting.)
<br/><br/>


### <code>var <a name='OFMProjectInfo.status'>status</code></a> → [`Project.Status`](#Project.Status)
 The current status of the project as a whole. This does not reflect the status of individual tasks within the project root task -- a project may be marked with the `Done` status and its individual tasks will be left with the completion state they had, in case the status is changed again to `Active`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_tags'>tags</code></a> → [`TagArray`](#TagArray) *read-only*
 Returns the `Tag`s associated with this `Project`.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_task'>task</code></a> → [`Task`](#Task) *read-only*
 Returns the root task of the project, which holds the bulk of the project information, as well as being the container for tasks within the project. If you wish to copy the project or move it to a location that requires tasks, you would use this task as the object to be copied or moved.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_taskStatus'>taskStatus</code></a> → [`Task.Status`](#Task.Status) *read-only*
 Returns the current status of the project.
<br/><br/>


### <code>var <a name='OFMProjectInfo.get_tasks'>tasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns all the tasks contained directly in this `Project`'s root `Task`, sorted by their library order.
<br/><br/>


# <a name='DateComponents'><code>DateComponents</code></a>



## Constructors

### <code>new <a name='DateComponentsConstructor.constructInstance'>DateComponents</a>()</code> → [`DateComponents`](#DateComponents)


## Instance Properties

### <code>var <a name='_DateComponents.date'>date</code></a> → `Date` or `null` *read-only*


### <code>var <a name='_DateComponents.day'>day</code></a> → `Number` or `null`


### <code>var <a name='_DateComponents.era'>era</code></a> → `Number` or `null`


### <code>var <a name='_DateComponents.hour'>hour</code></a> → `Number` or `null`


### <code>var <a name='_DateComponents.minute'>minute</code></a> → `Number` or `null`


### <code>var <a name='_DateComponents.month'>month</code></a> → `Number` or `null`


### <code>var <a name='_DateComponents.nanosecond'>nanosecond</code></a> → `Number` or `null`


### <code>var <a name='_DateComponents.second'>second</code></a> → `Number` or `null`


### <code>var <a name='_DateComponents.timeZone'>timeZone</code></a> → [`TimeZone`](#TimeZone) or `null`


### <code>var <a name='_DateComponents.year'>year</code></a> → `Number` or `null`


# <a name='DateRange'><code>DateRange</code></a>



## Instance Properties

### <code>var <a name='OFMDateRangeCollationMarker.end'>end</code></a> → `Date` *read-only*


### <code>var <a name='OFMDateRangeCollationMarker.name'>name</code></a> → `String` *read-only*


### <code>var <a name='OFMDateRangeCollationMarker.start'>start</code></a> → `Date` *read-only*


# <a name='Decimal'><code>Decimal</code></a>

 The `Decimal` class provides support for operating on base-10 numbers, which may not be exactly representable by types like the built-in JavaScript `Number` class. Note that `Decimal` does not use the built-in arithmetic operations; for example, to add two `Decimal` instances, you must use the `add()` function.
<br/><br/>


## Class Functions

### <code>function <a name='DecimalConstructor.fromString'>fromString</a>(string: `String`)</code> → [`Decimal`](#Decimal)
 Parses the given string into a `Decimal`. If the string cannot be parsed, `notANumber` is returned.
<br/><br/>


## Class Properties

### <code>var <a name='DecimalConstructor.maximum'>maximum</code></a> → [`Decimal`](#Decimal) *read-only*
 Returns the maximum representable `Decimal` value.
<br/><br/>


### <code>var <a name='DecimalConstructor.minimum'>minimum</code></a> → [`Decimal`](#Decimal) *read-only*
 Returns the minimum representable `Decimal` value.
<br/><br/>


### <code>var <a name='DecimalConstructor.notANumber'>notANumber</code></a> → [`Decimal`](#Decimal) *read-only*
 Returns a `Decimal` that represents a non-number value. Any arithmetic operations involving non-number values will return `notANumber`.
<br/><br/>


### <code>var <a name='DecimalConstructor.one'>one</code></a> → [`Decimal`](#Decimal) *read-only*
 Returns a `Decimal` representing one.
<br/><br/>


### <code>var <a name='DecimalConstructor.zero'>zero</code></a> → [`Decimal`](#Decimal) *read-only*
 Returns a `Decimal` representing zero.
<br/><br/>


## Instance Functions

### <code>function <a name='NSDecimalNumber.toString'>toString</a>()</code> → `String`
 Converts the `Decimal` to a `String` representation.
<br/><br/>


### <code>function <a name='NSDecimalNumber.add'>add</a>(number: [`Decimal`](#Decimal))</code> → [`Decimal`](#Decimal)
 Generates a new `Decimal` by adding the argument and the receiver.
<br/><br/>


### <code>function <a name='NSDecimalNumber.subtract'>subtract</a>(number: [`Decimal`](#Decimal))</code> → [`Decimal`](#Decimal)
 Generates a new `Decimal` by subtracting the argument from the receiver.
<br/><br/>


### <code>function <a name='NSDecimalNumber.multiply'>multiply</a>(number: [`Decimal`](#Decimal))</code> → [`Decimal`](#Decimal)
 Generates a new `Decimal` by multiplying the argument and the receiver.
<br/><br/>


### <code>function <a name='NSDecimalNumber.divide'>divide</a>(number: [`Decimal`](#Decimal))</code> → [`Decimal`](#Decimal)
 Generates a new `Decimal` by dividing the receiver by the argument.
<br/><br/>


### <code>function <a name='NSDecimalNumber.compare'>compare</a>(number: [`Decimal`](#Decimal))</code> → `Number`
 Compares the receiver and argument. If the receiver is less than the argument, -1 is returned. If the receiver is greater than the argument, 1 is returned. Otherwise, 0 is returned. `notANumber` is considered less than any valid number, and equal to itself.
<br/><br/>


### <code>function <a name='NSDecimalNumber.equals'>equals</a>(number: [`Decimal`](#Decimal))</code> → `Boolean`
 Returns `true` if the receiver and argument represent the same number (or both are `notANumber`), and `false` otherwise.
<br/><br/>


# <a name='Device'><code>Device</code></a>



## Class Properties

### <code>var <a name='DeviceConstructor.get_current'>current</code></a> → [`Device`](#Device) *read-only*
 The device the current application is running on.
<br/><br/>


## Instance Properties

### <code>var <a name='Device.iOS'>iOS</code></a> → `Boolean` *read-only*
 A convenience that returns `true` on iPhone and iPad devices
<br/><br/>


### <code>var <a name='Device.iPad'>iPad</code></a> → `Boolean` *read-only*
 A convenience that returns `true` only on iPad devices, but not on iPhone devices.
<br/><br/>


### <code>var <a name='Device.mac'>mac</code></a> → `Boolean` *read-only*
 A convenience that returns `true` only on Mac devices.
<br/><br/>


### <code>var <a name='Device.get_operatingSystemVersion'>operatingSystemVersion</code></a> → [`Version`](#Version) *read-only*
 The current operation system version running on the device
<br/><br/>


### <code>var <a name='Device.type'>type</code></a> → [`DeviceType`](#DeviceType) or `null` *read-only*
 The general type of the current device
<br/><br/>


### <code>var <a name='Device.visionPro'>visionPro</code></a> → `Boolean` *read-only*
 A convenience that returns `true` only on Apple Vision Pro devices.
<br/><br/>


# <a name='DeviceType'><code>DeviceType</code></a>



## Class Properties

### <code>var <a name='_DeviceType_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`DeviceType`](#DeviceType) *read-only*


### <code>var <a name='_DeviceType_GeneratedWrapperConstructor.iPad'>iPad</code></a> → [`DeviceType`](#DeviceType) *read-only*
 An iPad
<br/><br/>


### <code>var <a name='_DeviceType_GeneratedWrapperConstructor.iPhone'>iPhone</code></a> → [`DeviceType`](#DeviceType) *read-only*
 An iPhone
<br/><br/>


### <code>var <a name='_DeviceType_GeneratedWrapperConstructor.mac'>mac</code></a> → [`DeviceType`](#DeviceType) *read-only*
 A Mac device
<br/><br/>


### <code>var <a name='_DeviceType_GeneratedWrapperConstructor.visionPro'>visionPro</code></a> → [`DeviceType`](#DeviceType) *read-only*
 An Apple Vision Pro
<br/><br/>


# <a name='Document'><code>Document</code></a>



## Class Functions

### <code>function <a name='NSDocumentProxyConstructor.makeNew'>makeNew</a>(resultFunction: [`Function`](#Function)`(`&zwj;document: [`Document`](#Document) or [`Error`](#Error)&zwj;`)` or `null`)</code> → [`Promise`](#Promise) of [`Document`](#Document)
 Create a new document, which can be populated with data and then presented. On iOS, if the document is not presented by the time the `resultFunction` returns, it will be closed. On macOS, the document will be left around and accessible to the running script. `resultFunction` is executed before any functions tethered to the result Promise are executed. Returns a `Promise` that will yield the new document or an error.
<br/><br/>


### <code>function <a name='NSDocumentProxyConstructor.makeNewAndShow'>makeNewAndShow</a>(resultFunction: [`Function`](#Function)`(`&zwj;document: [`Document`](#Document) or [`Error`](#Error)&zwj;`)` or `null`)</code> → [`Promise`](#Promise) of [`Document`](#Document)
 Create a new document and presents it. Returns a `Promise` that will yield the new document or an error.
<br/><br/>


## Instance Functions

### <code>function <a name='NSDocument.close'>close</a>(didCancel: [`Function`](#Function)`(`&zwj;document: [`Document`](#Document)&zwj;`)` or `null`)</code>
 Close this document. If for some reason the document cannot be closed, the `didCancel` function may be called at some point in the future, with the original document as the single argument. For example, on the Mac the user may review unsaved changes and may cancel the close operation. If the document is closed, the `didCancel` function will not be called at all.
<br/><br/>


### <code>function <a name='NSDocument.save'>save</a>()</code>
 Save this document.
<br/><br/>


### <code>function <a name='NSDocument.fileWrapper'>fileWrapper</a>(type: `String` or `null`)</code> → [`FileWrapper`](#FileWrapper)
 Deprecated: Please use `makeFileWrapper()` instead.
 Returns a new `FileWrapper` representing the contents of the document formatted as the specified type, or its current `fileType` if a `null` is passed for the type.
<br/><br/>


### <code>function <a name='NSDocument.makeFileWrapper'>makeFileWrapper</a>(baseName: `String`, type: `String` or `null`)</code> → [`Promise`](#Promise) of [`FileWrapper`](#FileWrapper)
 Generates a `FileWrapper` representing the contents of the document formatted as the specified type, or its current `fileType` if a `null` is passed for the type. Returns a `Promise` that will yield the file wrapper or an error. The returned file wrapper will have a name based off the given `baseName` and the default path extension for the requested file type.
<br/><br/>


### <code>function <a name='NSDocument.undo'>undo</a>()</code>
 Undo the last done action.
<br/><br/>


### <code>function <a name='NSDocument.redo'>redo</a>()</code>
 Redo the last undone action.
<br/><br/>


### <code>function <a name='NSDocument.show'>show</a>(completed: [`Function`](#Function)`(`&zwj;&zwj;`)` or `null`)</code>
 Presents the document, ordering the window forward on macOS, and possibly closing the existing document and opening the new on on iOS. Calls the completion function once the document is shown.
<br/><br/>


## Instance Properties

### <code>var <a name='NSDocument.canRedo'>canRedo</code></a> → `Boolean` *read-only*
 Whether there are currently any actions that can be redone.
<br/><br/>


### <code>var <a name='NSDocument.canUndo'>canUndo</code></a> → `Boolean` *read-only*
 Whether there are currently any actions that can be undone.
<br/><br/>


### <code>var <a name='NSDocument.fileType'>fileType</code></a> → `String` or `null` *read-only*
 The file type identifier the document uses when saving, if set.
<br/><br/>


### <code>var <a name='NSDocument.name'>name</code></a> → `String` or `null` *read-only*
 Document name.
<br/><br/>


### <code>var <a name='NSDocument.writableTypes'>writableTypes</code></a> → `Array` of `String` *read-only*
 A list of all of the file types that this document can be written as.
<br/><br/>


# <a name='DatabaseDocument'><code>DatabaseDocument</code></a> : [<code>Document</code>](#Document)



## Instance Functions

### <code>function <a name='Document.newWindow'>newWindow</a>()</code> → [`Promise`](#Promise) of [`DocumentWindow`](#DocumentWindow)
 Returns a `Promise` that will yield either a newly created and displayed `Window` or an error. On macOS, this method respects the System Preference governing new window behavior (tab vs. window). That preference is accessible at `System Preferences` > `Dock` > `Prefer tabs when opening documents`.
<br/><br/>


### <code>function <a name='Document.newTabOnWindow'>newTabOnWindow</a>(window: [`DocumentWindow`](#DocumentWindow))</code> → [`Promise`](#Promise) of [`DocumentWindow`](#DocumentWindow)
 Returns a `Promise` that will yield either a new tab adjacent to `window` or an error. This is not available on iOS.
<br/><br/>


### <code>function <a name='Document.sync'>sync</a>()</code> → [`Promise`](#Promise) of `Boolean`
 Returns a `Promise` that will yield either `true` indicating a successful sync, or an error.
<br/><br/>


## Instance Properties

### <code>var <a name='Document.windows'>windows</code></a> → `Array` of [`DocumentWindow`](#DocumentWindow) *read-only*


# <a name='Email'><code>Email</code></a>

 A set of parameters for generating an email.
<br/><br/>


## Constructors

### <code>new <a name='EmailConstructor.constructInstance'>Email</a>()</code> → [`Email`](#Email)


## Instance Functions

### <code>function <a name='Email.generate'>generate</a>()</code>
 Presents the generated email to the user for them to send (or discard). On iOS, any included attachment `FileWrapper`s that are directories will be converted to Zip files.
<br/><br/>


## Instance Properties

### <code>var <a name='Email.blindCarbonCopy'>blindCarbonCopy</code></a> → `String` or `Array` of `String` or `null`


### <code>var <a name='Email.body'>body</code></a> → `String` or `null`


### <code>var <a name='Email.carbonCopy'>carbonCopy</code></a> → `String` or `Array` of `String` or `null`


### <code>var <a name='Email.fileWrappers'>fileWrappers</code></a> → `Array` of [`FileWrapper`](#FileWrapper)


### <code>var <a name='Email.receiver'>receiver</code></a> → `String` or `Array` of `String` or `null`


### <code>var <a name='Email.subject'>subject</code></a> → `String` or `null`


# <a name='Error'><code>Error</code></a>

 The built-in JavaScript [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) constructor.
<br/><br/>


## Instance Properties

### <code>var <a name='ErrorObject.causedByUserCancelling'>causedByUserCancelling</code></a> → `Boolean` *read-only*
 Returns true for errors that are caused by the user cancelling an operation. For example, if the user selects the Cancel button in a `FilePicker`, the `Promise` will signal an error that reflects this.
<br/><br/>


# <a name='FilePicker'><code>FilePicker</code></a>

 A `FilePicker` allows the user to select `URL`s for files via the system-supplied file picking interface.
<br/><br/>


## Constructors

### <code>new <a name='FilePickerConstructor.constructInstance'>FilePicker</a>()</code> → [`FilePicker`](#FilePicker)
 Returns a new `FilePicker` with default settings.
<br/><br/>


## Instance Functions

### <code>function <a name='FilePicker.show'>show</a>()</code> → [`Promise`](#Promise) of `Array` of [`URL`](#URL)
 Presents the system file selection interface to the user, allowing them to choose one or more files of the given types. The returned `Promise` will yield the chosen `URL`s on success. If the user cancels chosing, the `Promise` will be rejected. Note that even when picking a single file or folder, the result will be an array of `URL`s.
<br/><br/>


## Instance Properties

### <code>var <a name='FilePicker.folders'>folders</code></a> → `Boolean`
 If `true`, then folders may be selected, but not files. In this case, `types` is ignored. Defaults to `false`.
<br/><br/>


### <code>var <a name='FilePicker.message'>message</code></a> → `String`
 A message to display describing what files are being picked. This is currently only supported on macOS.
<br/><br/>


### <code>var <a name='FilePicker.multiple'>multiple</code></a> → `Boolean`
 If `true`, then multiple files may be selected. Defaults to `false`.
<br/><br/>


### <code>var <a name='FilePicker.types'>types</code></a> → `Array` of [`TypeIdentifier`](#TypeIdentifier) or `null`
 The file types that will be allowed. If `null`, all file types will be allowed. Defaults to `null`.
<br/><br/>


# <a name='FileSaver'><code>FileSaver</code></a>

 A `FileSaver` allows the user to save a `FileWrapper` to a `URL`s via the system-supplied file picking interface.
<br/><br/>


## Constructors

### <code>new <a name='FileSaverConstructor.constructInstance'>FileSaver</a>()</code> → [`FileSaver`](#FileSaver)
 Returns a new `FileSaver` with default settings.
<br/><br/>


## Instance Functions

### <code>function <a name='FileSaver.show'>show</a>(fileWrapper: [`FileWrapper`](#FileWrapper))</code> → [`Promise`](#Promise) of [`URL`](#URL)
 Presents the system file saving interface to the user, allowing them to choose a location and file name to save the file wrapper. The returned `Promise` will yield the chosen `URL` on success. If the user cancels chosing, the `Promise` will be rejected.
<br/><br/>


## Instance Properties

### <code>var <a name='FileSaver.message'>message</code></a> → `String`
 A message to display describing what file is being saved. This is currently only supported on macOS.
<br/><br/>


### <code>var <a name='FileSaver.nameLabel'>nameLabel</code></a> → `String`
 The label shown next to the user-editable file name field. This is currently only supported on macOS.
<br/><br/>


### <code>var <a name='FileSaver.prompt'>prompt</code></a> → `String`
 The prompt shown on the the save button. This is currently only supported on macOS.
<br/><br/>


### <code>var <a name='FileSaver.types'>types</code></a> → `Array` of [`TypeIdentifier`](#TypeIdentifier) or `null`
 The file types that will be allowed. If `null`, all file types will be allowed. Defaults to `null`.
<br/><br/>


# <a name='FileWrapper'><code>FileWrapper</code></a>



## Class Functions

### <code>function <a name='FileWrapperConstructor.withContents'>withContents</a>(name: `String` or `null`, contents: [`Data`](#Data))</code> → [`FileWrapper`](#FileWrapper)
 Returns a new `FileWrapper` that represents a flat file containing the given data.
<br/><br/>


### <code>function <a name='FileWrapperConstructor.withChildren'>withChildren</a>(name: `String` or `null`, children: `Array` of [`FileWrapper`](#FileWrapper))</code> → [`FileWrapper`](#FileWrapper)
 Returns a new `FileWrapper` that represents a directory with the given child file wrappers. Each child file wrapper must have a unique name specified.
<br/><br/>


### <code>function <a name='FileWrapperConstructor.fromURL'>fromURL</a>(url: [`URL`](#URL), options: `Array` of [`FileWrapper.ReadingOptions`](#FileWrapper.ReadingOptions) or `null`)</code> → [`FileWrapper`](#FileWrapper)
 Reads a `FileWrapper` from an existing URL.
<br/><br/>


## Instance Functions

### <code>function <a name='FileWrapper.childNamed'>childNamed</a>(name: `String`)</code> → [`FileWrapper`](#FileWrapper) or `null`
 Returns the child file wrapper with the specified name, or `null` if the receiver is not a directory or doesn't have a child with that name.
<br/><br/>


### <code>function <a name='FileWrapper.filenameForChild'>filenameForChild</a>(child: [`FileWrapper`](#FileWrapper))</code> → `String` or `null`
 Returns the unique file name that will be used for the given child `FileWrapper`, or `null` if this file wrapper is not a child of the receiver.
<br/><br/>


### <code>function <a name='FileWrapper.write'>write</a>(url: [`URL`](#URL), options: `Array` of [`FileWrapper.WritingOptions`](#FileWrapper.WritingOptions) or `null`, originalContentsURL: [`URL`](#URL) or `null`)</code>
 Writes the `FileWrapper` to the given `URL`.
 <span class="danger">NOTE: Any existing file or folder at the desination `URL` will be replaced. Care must be taken when developing scripts to avoid unintended data loss.</span>
<br/><br/>


## Instance Properties

### <code>var <a name='FileWrapper.children'>children</code></a> → `Array` of [`FileWrapper`](#FileWrapper) *read-only*
 Returns an `Array` of child `FileWrappers`, if this represents a directory. Otherwise, an empty array is returned.
<br/><br/>


### <code>var <a name='FileWrapper.contents'>contents</code></a> → [`Data`](#Data) or `null` *read-only*
 Returns the regular file contents of the wrapper, if this represents a regular file. Otherwise, `null` is returned.
<br/><br/>


### <code>var <a name='FileWrapper.destination'>destination</code></a> → [`URL`](#URL) or `null` *read-only*
 Returns the destination if this represents a symbolic link. Otherwise, `null` is returned.
<br/><br/>


### <code>var <a name='FileWrapper.get_filename'>filename</code></a> → `String` or `null`
 Returns the actual file name that was last read for this file wrapper. Depending on the names of other sibling wrappers, this may not be what file name will be written.
<br/><br/>


### <code>var <a name='FileWrapper.get_preferredFilename'>preferredFilename</code></a> → `String` or `null`
 Returns the preferred file name that should be used when writing the file wrapper if no other file in the same parent directory wrapper is in use.
<br/><br/>


### <code>var <a name='FileWrapper.type'>type</code></a> → [`FileWrapper.Type`](#FileWrapper.Type) *read-only*
 Returns the type of this `FileWrapper`.
<br/><br/>


# <a name='FileWrapper.ReadingOptions'><code>FileWrapper.ReadingOptions</code></a>



## Class Properties

### <code>var <a name='_FileWrapper_ReadingOptions_GeneratedWrapperConstructor.Immediate'>Immediate</code></a> → [`FileWrapper.ReadingOptions`](#FileWrapper.ReadingOptions) *read-only*
 Whether the contents are read immediately, or (by default) as the file wrappers are accessed.
<br/><br/>


### <code>var <a name='_FileWrapper_ReadingOptions_GeneratedWrapperConstructor.WihtoutMapping'>WihtoutMapping</code></a> → [`FileWrapper.ReadingOptions`](#FileWrapper.ReadingOptions) *read-only*
 Allow disabling file mapping.
<br/><br/>


### <code>var <a name='_FileWrapper_ReadingOptions_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`FileWrapper.ReadingOptions`](#FileWrapper.ReadingOptions) *read-only*


# <a name='FileWrapper.Type'><code>FileWrapper.Type</code></a>



## Class Properties

### <code>var <a name='_FileWrapper_Type_GeneratedWrapperConstructor.Directory'>Directory</code></a> → [`FileWrapper.Type`](#FileWrapper.Type) *read-only*
 A `FileWrapper` that represents a directory with zero or more child wrappers.
<br/><br/>


### <code>var <a name='_FileWrapper_Type_GeneratedWrapperConstructor.File'>File</code></a> → [`FileWrapper.Type`](#FileWrapper.Type) *read-only*
 A `FileWrapper` that represents a regular file with data contents.
<br/><br/>


### <code>var <a name='_FileWrapper_Type_GeneratedWrapperConstructor.Link'>Link</code></a> → [`FileWrapper.Type`](#FileWrapper.Type) *read-only*
 A `FileWrapper` that represents a symbolic link to another location.
<br/><br/>


### <code>var <a name='_FileWrapper_Type_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`FileWrapper.Type`](#FileWrapper.Type) *read-only*


# <a name='FileWrapper.WritingOptions'><code>FileWrapper.WritingOptions</code></a>



## Class Properties

### <code>var <a name='_FileWrapper_WritingOptions_GeneratedWrapperConstructor.Atomic'>Atomic</code></a> → [`FileWrapper.WritingOptions`](#FileWrapper.WritingOptions) *read-only*
 Write the entire `FileWrapper` atomically, so that either the entire file package is replaced or none of it is.
<br/><br/>


### <code>var <a name='_FileWrapper_WritingOptions_GeneratedWrapperConstructor.UpdateNames'>UpdateNames</code></a> → [`FileWrapper.WritingOptions`](#FileWrapper.WritingOptions) *read-only*
 On successful writing, update the filename of each file wrapper recursively so that following writes can use performance optimizations using hard links.
<br/><br/>


### <code>var <a name='_FileWrapper_WritingOptions_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`FileWrapper.WritingOptions`](#FileWrapper.WritingOptions) *read-only*


# <a name='Folder.ChildInsertionLocation'><code>Folder.ChildInsertionLocation</code></a>

 A location specified relative to an existing `Folder`, `Project`, or `Database`. These cannot be instantiated directly, rather they are returned from properties like `Folder.beginning`, `Project.before`, or `Database.ending`.
<br/><br/>


# <a name='Folder.Status'><code>Folder.Status</code></a>



## Class Properties

### <code>var <a name='_Folder_Status_GeneratedWrapperConstructor.Active'>Active</code></a> → [`Folder.Status`](#Folder.Status) *read-only*
 The folder is active.
<br/><br/>


### <code>var <a name='_Folder_Status_GeneratedWrapperConstructor.Dropped'>Dropped</code></a> → [`Folder.Status`](#Folder.Status) *read-only*
 The folder has been dropped.
<br/><br/>


### <code>var <a name='_Folder_Status_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Folder.Status`](#Folder.Status) *read-only*


# <a name='ForecastDay'><code>ForecastDay</code></a>

 An object representing one of the selectable days in the forecast perspective.
<br/><br/>


## Class Properties

### <code>var <a name='ForecastDayConstructor.get_badgeCountsIncludeDeferredItems'>badgeCountsIncludeDeferredItems</code></a> → `Boolean`
 Determines whether or not badges on Forecast days include items that are not yet available.
<br/><br/>


## Instance Functions

### <code>function <a name='OFMForecastDayNode.badgeKind'>badgeKind</a>()</code> → [`ForecastDay.Status`](#ForecastDay.Status)
 The status of the badge on this forecast day.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMForecastDayNode.badgeCount'>badgeCount</code></a> → `Number` *read-only*
 The number of available tasks on this forecast day.
<br/><br/>


### <code>var <a name='OFMForecastDayNode.date'>date</code></a> → `Date` *read-only*
 The date this forecast day represents. If this day's kind is `Past` or `DistantFuture` the date returned will be years from the current time.
<br/><br/>


### <code>var <a name='OFMForecastDayNode.deferredCount'>deferredCount</code></a> → `Number` *read-only*
 The number of remaining deferred tasks on this forecast day.
<br/><br/>


### <code>var <a name='OFMForecastDayNode.kind'>kind</code></a> → [`ForecastDay.Kind`](#ForecastDay.Kind) *read-only*


### <code>var <a name='OFMForecastDayNode.name'>name</code></a> → `String` *read-only*


# <a name='ForecastDay.Kind'><code>ForecastDay.Kind</code></a>



## Class Properties

### <code>var <a name='_ForecastDay_Kind_GeneratedWrapperConstructor.Day'>Day</code></a> → [`ForecastDay.Kind`](#ForecastDay.Kind) *read-only*
 The node represents a specific day in the Forecast week or month grid.
<br/><br/>


### <code>var <a name='_ForecastDay_Kind_GeneratedWrapperConstructor.DistantFuture'>DistantFuture</code></a> → [`ForecastDay.Kind`](#ForecastDay.Kind) *read-only*
 The node represents all days more than a year from now.
<br/><br/>


### <code>var <a name='_ForecastDay_Kind_GeneratedWrapperConstructor.FutureMonth'>FutureMonth</code></a> → [`ForecastDay.Kind`](#ForecastDay.Kind) *read-only*
 The node represents a month within the next year.
<br/><br/>


### <code>var <a name='_ForecastDay_Kind_GeneratedWrapperConstructor.Past'>Past</code></a> → [`ForecastDay.Kind`](#ForecastDay.Kind) *read-only*
 The node represents all days in the past.
<br/><br/>


### <code>var <a name='_ForecastDay_Kind_GeneratedWrapperConstructor.Today'>Today</code></a> → [`ForecastDay.Kind`](#ForecastDay.Kind) *read-only*
 The node represents today.
<br/><br/>


### <code>var <a name='_ForecastDay_Kind_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`ForecastDay.Kind`](#ForecastDay.Kind) *read-only*


# <a name='ForecastDay.Status'><code>ForecastDay.Status</code></a>



## Class Properties

### <code>var <a name='_ForecastDay_Status_GeneratedWrapperConstructor.Available'>Available</code></a> → [`ForecastDay.Status`](#ForecastDay.Status) *read-only*
 There is at least one available task on the node's day, but no task is due soon or overdue. The node's badgeCount is the number of available tasks.
<br/><br/>


### <code>var <a name='_ForecastDay_Status_GeneratedWrapperConstructor.DueSoon'>DueSoon</code></a> → [`ForecastDay.Status`](#ForecastDay.Status) *read-only*
 There is at least one available task on the node's day, and at least one task due that day is due soon, but no tasks due that day are overdue. The node's badgeCount is the number of available tasks.
<br/><br/>


### <code>var <a name='_ForecastDay_Status_GeneratedWrapperConstructor.NoneAvailable'>NoneAvailable</code></a> → [`ForecastDay.Status`](#ForecastDay.Status) *read-only*
 There are no available tasks on the node's day. The node's badgeCount is guaranteed to be zero.
<br/><br/>


### <code>var <a name='_ForecastDay_Status_GeneratedWrapperConstructor.Overdue'>Overdue</code></a> → [`ForecastDay.Status`](#ForecastDay.Status) *read-only*
 There is at least one available task on the node's day, and at least one task due that day is overdue. The node's badgeCount is the number of available tasks.
<br/><br/>


### <code>var <a name='_ForecastDay_Status_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`ForecastDay.Status`](#ForecastDay.Status) *read-only*


# <a name='Form'><code>Form</code></a>

 `Form` provides a mechanism to collect input from the user. Each form contains one or more instances of subclasses of `Field`, which are given a key. As the form is filled out, `values` object is populated with the values from the user interface.
<br/><br/>


## Constructors

### <code>new <a name='FormConstructor.constructInstance'>Form</a>()</code> → [`Form`](#Form)


## Instance Functions

### <code>function <a name='Form.addField'>addField</a>(field: [`Form.Field`](#Form.Field), index: `Number` or `null`)</code>
 Adds the new `Field` to the `Form`, at the indicated position, or at the end if no position is specified. If the field has a default value, it will be added to the `values` result object immediately.
<br/><br/>


### <code>function <a name='Form.removeField'>removeField</a>(field: [`Form.Field`](#Form.Field))</code>
 Removes the `Field from the `Form`. Any entry in the `values` for this field will be removed as well.
<br/><br/>


### <code>function <a name='Form.show'>show</a>(title: `String`, confirmTitle: `String`)</code> → [`Promise`](#Promise) of [`Form`](#Form)
 Present the `Form` to the user, and return a `Promise` to be fullfilled or rejected when the user commits or cancels the form.
<br/><br/>


## Instance Properties

### <code>var <a name='Form.fields'>fields</code></a> → `Array` of [`Form.Field`](#Form.Field) *read-only*
 The current `Field` instances in the form, which will be visible to the user entering input.
<br/><br/>


### <code>var <a name='Form.validate'>validate</code></a> → [`Function`](#Function)`(`&zwj;Form: [`Form`](#Form)&zwj;`)` → `Boolean` or `null`
 A function to check whether the entered values are acceptable. The form to validate is passed as the argument and the function is expected to return a boolean result or null to perform default validation. If an `Error` is thrown, it's message will be displayed in the form as the reason for validation failure. Note that the validation function may add or remove fields and update entries in the `values` object (which will cause the interface to be updated). This is called any time the user edits values, or a field is added or removed. If no `validate` function is specified or it returns `null`, some per-field default validation will be performed (see `Form.Field.Option`. If the `validate` function returns a boolean result, no default validation will be performed.
<br/><br/>


### <code>var <a name='Form.values'>values</code></a> → [`Object`](#Object) *read-only*
 An object with the collected values for each field, stored under the key for that field.
<br/><br/>


# <a name='Form.Field'><code>Form.Field</code></a>

 A single entry for a user input value in a `Form`. Each field can only be added to a single `Form`. This class cannot be constructed directly.
<br/><br/>


## Instance Properties

### <code>var <a name='Field.displayName'>displayName</code></a> → `String` or `null` *read-only*
 Human readable string used as the label for this field.
<br/><br/>


### <code>var <a name='Field.key'>key</code></a> → `String` *read-only*
 Key to use when storing the value for this field in the containing form's `values` object.
<br/><br/>


# <a name='Form.Field.Checkbox'><code>Form.Field.Checkbox</code></a> : [<code>Form.Field</code>](#Form.Field)



## Constructors

### <code>new <a name='CheckboxFieldConstructor.constructInstance'>Form.Field.Checkbox</a>(key: `String`, displayName: `String` or `null`, value: `Boolean` or `null`)</code> → [`Form.Field.Checkbox`](#Form.Field.Checkbox)
 Returns a new `Checkbox` field, optionally with an initial value (which will be `false` if no value is specified).
<br/><br/>


# <a name='Form.Field.Date'><code>Form.Field.Date</code></a> : [<code>Form.Field</code>](#Form.Field)



## Constructors

### <code>new <a name='DateFieldConstructor.constructInstance'>Form.Field.Date</a>(key: `String`, displayName: `String` or `null`, value: `Date` or `null`, formatter: [`Formatter.Date`](#Formatter.Date) or `null`)</code> → [`Form.Field.Date`](#Form.Field.Date)
 Returns a new `Date` field, optionally with an initial value, and optionally a date formatter. If no formatter is specified, a default one will be created that follows the user's date formatting preferences to display and determine component ordering when parsing dates. Relative dates like "1d", "tomorrow", "now" can also be entered.
<br/><br/>


# <a name='Form.Field.MultipleOptions'><code>Form.Field.MultipleOptions</code></a> : [<code>Form.Field</code>](#Form.Field)



## Constructors

### <code>new <a name='MultipleOptionsFieldConstructor.constructInstance'>Form.Field.MultipleOptions</a>(key: `String`, displayName: `String` or `null`, options: `Array` of [`Object`](#Object), names: `Array` of `String` or `null`, selected: `Array` of [`Object`](#Object))</code> → [`Form.Field.MultipleOptions`](#Form.Field.MultipleOptions)
 Returns a new `MultipleOptions` field, allowing the user to pick multiple items from a list of option objects. A list of names may also be given, which must have the same length as the options array if so. If no names are given, the objects are converted to strings for display. An array of zero or more initially selected objects (which must be members of the options array) may also be given. An empty array is valid input for the initially selected items. Additionally, it is valid for `MultipleOptions` fields to have a value that is an empty array.
<br/><br/>


# <a name='Form.Field.Option'><code>Form.Field.Option</code></a> : [<code>Form.Field</code>](#Form.Field)



## Constructors

### <code>new <a name='OptionFieldConstructor.constructInstance'>Form.Field.Option</a>(key: `String`, displayName: `String` or `null`, options: `Array` of [`Object`](#Object), names: `Array` of `String` or `null`, selected: [`Object`](#Object) or `null`, nullOptionTitle: `String` or `null`)</code> → [`Form.Field.Option`](#Form.Field.Option)
 Returns a new `Option` field, allowing the user to pick from a list of option objects. A list of names may also be given, which must have the same length as the options array if so. If no names are given, the objects are converted to strings for display. An initially selected object (which must be a member of the options array) may also be given. If the field is not configured to allow a `null` value and no initially `selected` value is specified, the user must select a value before the field is considered valid under the default form validation.
<br/><br/>


## Instance Properties

### <code>var <a name='OptionField.allowsNull'>allowsNull</code></a> → `Boolean`
 If set to `true`, an option will be added to allow selecting `null`.
<br/><br/>


### <code>var <a name='OptionField.nullOptionTitle'>nullOptionTitle</code></a> → `String` or `null`
 If `null` is allowed, this will be used for the title of that option. Otherwise a default title will be used.
<br/><br/>


# <a name='Form.Field.Password'><code>Form.Field.Password</code></a> : [<code>Form.Field</code>](#Form.Field)

 A field for text-based input, optionally using a `Formatter` to convert the string value into a different type.
<br/><br/>


## Constructors

### <code>new <a name='PasswordFieldConstructor.constructInstance'>Form.Field.Password</a>(key: `String`, displayName: `String` or `null`, value: `String` or `null`)</code> → [`Form.Field.Password`](#Form.Field.Password)
 Returns a new `Password` field, optionally with an initial value. The displayed text will be obscured.
<br/><br/>


# <a name='Form.Field.String'><code>Form.Field.String</code></a> : [<code>Form.Field</code>](#Form.Field)

 A field for text-based input, optionally using a `Formatter` to convert the string value into a different type.
<br/><br/>


## Constructors

### <code>new <a name='StringFieldConstructor.constructInstance'>Form.Field.String</a>(key: `String`, displayName: `String` or `null`, value: [`Object`](#Object) or `null`, formatter: [`Formatter`](#Formatter) or `null`)</code> → [`Form.Field.String`](#Form.Field.String)
 Returns a new `String` field, optionally with an initial value and formatter. If a formatter is specified, the value should be of the output type from the formatter or null. If no formatter is specified, the value should be a string or null.
<br/><br/>


# <a name='Formatter'><code>Formatter</code></a>



# <a name='Formatter.Date'><code>Formatter.Date</code></a> : [<code>Formatter</code>](#Formatter)



## Class Functions

### <code>function <a name='RelativeDateFormatterConstructor.withStyle'>withStyle</a>(dateStyle: [`Formatter.Date.Style`](#Formatter.Date.Style), timeStyle: [`Formatter.Date.Style`](#Formatter.Date.Style) or `null`)</code> → [`Formatter.Date`](#Formatter.Date)
 A formatter that will display dates according to the specified date and time formats selected in system settings.
<br/><br/>


### <code>function <a name='RelativeDateFormatterConstructor.withFormat'>withFormat</a>(format: `String`)</code> → [`Formatter.Date`](#Formatter.Date)
 Returns a formatter with a specific ICU date format and the user's current locale, calendar, and timeZone. See <http://userguide.icu-project.org/formatparse/datetime/> for details on date format strings.
<br/><br/>


## Class Properties

### <code>var <a name='RelativeDateFormatterConstructor.get_iso8601'>iso8601</code></a> → [`Formatter.Date`](#Formatter.Date) *read-only*
 Return a date formatter that produces ISO-8601 formatted dates, using the Gregorian calendar and the UTC time zone.
<br/><br/>


## Instance Functions

### <code>function <a name='OFRelativeDateFormatter.stringFromDate'>stringFromDate</a>(date: `Date`)</code> → `String`


### <code>function <a name='OFRelativeDateFormatter.dateFromString'>dateFromString</a>(string: `String`)</code> → `Date` or `null`


## Instance Properties

### <code>var <a name='OFRelativeDateFormatter.get_calendar'>calendar</code></a> → [`Calendar`](#Calendar)


### <code>var <a name='OFRelativeDateFormatter.dateFormat'>dateFormat</code></a> → `String` *read-only*


### <code>var <a name='OFRelativeDateFormatter.locale'>locale</code></a> → [`Locale`](#Locale)


### <code>var <a name='OFRelativeDateFormatter.get_timeZone'>timeZone</code></a> → [`TimeZone`](#TimeZone)


# <a name='Formatter.Decimal'><code>Formatter.Decimal</code></a> : [<code>Formatter</code>](#Formatter)

 This formatter class formats and parses `Decimal`-valued strings (note, _not_ `Number` values).
<br/><br/>


## Class Functions

### <code>function <a name='NumberFormatterConstructor.currency'>currency</a>(code: `String` or `null`)</code> → [`Formatter.Decimal`](#Formatter.Decimal)
 Returns a new formatter that will display the value as a currency value. An ISO currency code may be specified to pick a specific currency, or null may be passed to use the default currency for the user's locale. If the argument is not a valid currency code, an error will be thrown.
<br/><br/>


## Class Properties

### <code>var <a name='NumberFormatterConstructor.currencyCodes'>currencyCodes</code></a> → `Array` of `String` *read-only*
 Deprecated: Please use the `currencyCode` property on `Locale` instead.
 Returns the list of known ISO currency codes
<br/><br/>


### <code>var <a name='NumberFormatterConstructor.custom'>custom</code></a> → [`Formatter.Decimal`](#Formatter.Decimal) *read-only*
 Returns a new formatter that can be configured with custom settings.
<br/><br/>


### <code>var <a name='NumberFormatterConstructor.decimal'>decimal</code></a> → [`Formatter.Decimal`](#Formatter.Decimal) *read-only*
 Returns a new number formatter that will use both a decimal separator.
<br/><br/>


### <code>var <a name='NumberFormatterConstructor.percent'>percent</code></a> → [`Formatter.Decimal`](#Formatter.Decimal) *read-only*
 Returns a new number formatter that will display the value as a percentage.
<br/><br/>


### <code>var <a name='NumberFormatterConstructor.percentWithDecimal'>percentWithDecimal</code></a> → [`Formatter.Decimal`](#Formatter.Decimal) *read-only*
 Returns a new number formatter that will display the value as a percentage with a decimal separator.
<br/><br/>


### <code>var <a name='NumberFormatterConstructor.plain'>plain</code></a> → [`Formatter.Decimal`](#Formatter.Decimal) *read-only*
 Returns a new number formatter that will not use any separators.
<br/><br/>


### <code>var <a name='NumberFormatterConstructor.thousandsAndDecimal'>thousandsAndDecimal</code></a> → [`Formatter.Decimal`](#Formatter.Decimal) *read-only*
 Returns a new number formatter that will use both a thousands and decimal separator.
<br/><br/>


## Instance Functions

### <code>function <a name='OONumberFormatter.stringFromDecimal'>stringFromDecimal</a>(number: [`Decimal`](#Decimal))</code> → `String` or `null`
 Format a `Decimal` as a string, based on the rules set on the formatter.
<br/><br/>


### <code>function <a name='OONumberFormatter.decimalFromString'>decimalFromString</a>(string: `String`)</code> → [`Decimal`](#Decimal) or `null`
 Parses a `Decimal` from a string, based on the rules set on the formatter. Returns `null` if the value was not recognized.
<br/><br/>


## Instance Properties

### <code>var <a name='OONumberFormatter.get_decimalSeparator'>decimalSeparator</code></a> → `String`
 The string to display between the whole portion of a number and the decimal portion.
<br/><br/>


### <code>var <a name='OONumberFormatter.get_negativeFormat'>negativeFormat</code></a> → `String`
 A format string to use for negative values.
<br/><br/>


### <code>var <a name='OONumberFormatter.get_positiveFormat'>positiveFormat</code></a> → `String`
 A format string to use for positive values.
<br/><br/>


### <code>var <a name='OONumberFormatter.get_thousandsSeparator'>thousandsSeparator</code></a> → `String` or `null`
 The string to display between groups of digits representing powers of a thousand.
<br/><br/>


### <code>var <a name='OONumberFormatter.get_zeroSymbol'>zeroSymbol</code></a> → `String` or `null`
 The string to use when displaying a zero value. If this is `null`, the `positiveFormat` is used.
<br/><br/>


# <a name='Formatter.Duration'><code>Formatter.Duration</code></a> : [<code>Formatter</code>](#Formatter)



## Constructors

### <code>new <a name='TimeSpanFormatterConstructor.constructInstance'>Formatter.Duration</a>()</code> → [`Formatter.Duration`](#Formatter.Duration)


## Instance Functions

### <code>function <a name='OOTimeSpanFormatter.stringFromDecimal'>stringFromDecimal</a>(number: [`Decimal`](#Decimal))</code> → `String` or `null`


### <code>function <a name='OOTimeSpanFormatter.decimalFromString'>decimalFromString</a>(string: `String`)</code> → [`Decimal`](#Decimal) or `null`


## Instance Properties

### <code>var <a name='OOTimeSpanFormatter.hoursPerDay'>hoursPerDay</code></a> → `Number`


### <code>var <a name='OOTimeSpanFormatter.hoursPerWeek'>hoursPerWeek</code></a> → `Number`


### <code>var <a name='OOTimeSpanFormatter.useVerboseFormat'>useVerboseFormat</code></a> → `Boolean`


# <a name='Formatter.Date.Style'><code>Formatter.Date.Style</code></a>



## Class Properties

### <code>var <a name='_Formatter_Date_Style_GeneratedWrapperConstructor.Full'>Full</code></a> → [`Formatter.Date.Style`](#Formatter.Date.Style) *read-only*
 Use the user's "full" format as selected in system settings.
<br/><br/>


### <code>var <a name='_Formatter_Date_Style_GeneratedWrapperConstructor.Long'>Long</code></a> → [`Formatter.Date.Style`](#Formatter.Date.Style) *read-only*
 Use the user's "long" format as selected in system settings.
<br/><br/>


### <code>var <a name='_Formatter_Date_Style_GeneratedWrapperConstructor.Medium'>Medium</code></a> → [`Formatter.Date.Style`](#Formatter.Date.Style) *read-only*
 Use the user's "medium" format as selected in system settings.
<br/><br/>


### <code>var <a name='_Formatter_Date_Style_GeneratedWrapperConstructor.Short'>Short</code></a> → [`Formatter.Date.Style`](#Formatter.Date.Style) *read-only*
 Use the user's "short" format as selected in system settings.
<br/><br/>


### <code>var <a name='_Formatter_Date_Style_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Formatter.Date.Style`](#Formatter.Date.Style) *read-only*


# <a name='Function'><code>Function</code></a>

 The built-in JavaScript [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) constructor.
<br/><br/>


# <a name='Image'><code>Image</code></a>



## Class Functions

### <code>function <a name='ImageConstructor.symbolNamed'>symbolNamed</a>(name: `String`)</code> → [`Image`](#Image) or `null`
 Returns an image given a symbol name.
<br/><br/>


# <a name='LigatureStyle'><code>LigatureStyle</code></a>



## Class Properties

### <code>var <a name='_LigatureStyle_GeneratedWrapperConstructor.All'>All</code></a> → [`LigatureStyle`](#LigatureStyle) *read-only*
 Use all of the available ligatures.
<br/><br/>


### <code>var <a name='_LigatureStyle_GeneratedWrapperConstructor.Essential'>Essential</code></a> → [`LigatureStyle`](#LigatureStyle) *read-only*
 Use ligatures that are required for proper rendering of text.
<br/><br/>


### <code>var <a name='_LigatureStyle_GeneratedWrapperConstructor.Standard'>Standard</code></a> → [`LigatureStyle`](#LigatureStyle) *read-only*
 Use the default ligatures for the given script.
<br/><br/>


### <code>var <a name='_LigatureStyle_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`LigatureStyle`](#LigatureStyle) *read-only*


# <a name='Locale'><code>Locale</code></a>



## Class Properties

### <code>var <a name='LocaleConstructor.identifiers'>identifiers</code></a> → `Array` of `String` *read-only*
 The list of known ISO locale identifiers.
<br/><br/>


## Constructors

### <code>new <a name='LocaleConstructor.constructInstance'>Locale</a>(identifier: `String`)</code> → [`Locale`](#Locale)


## Instance Properties

### <code>var <a name='_Locale.calendar'>calendar</code></a> → [`Calendar`](#Calendar) *read-only*
 The calendar for the locale.
<br/><br/>


### <code>var <a name='_Locale.currencyCode'>currencyCode</code></a> → `String` or `null` *read-only*
 The currency code for the locale.
<br/><br/>


### <code>var <a name='_Locale.identifier'>identifier</code></a> → `String` *read-only*
 The ISO locale identifier for this object.
<br/><br/>


# <a name='MenuItem'><code>MenuItem</code></a>



## Instance Properties

### <code>var <a name='ActionMenuItem.checked'>checked</code></a> → `Boolean`
 If true, a checkmark is displayed next to the `MenuItem`'s label.
<br/><br/>


### <code>var <a name='ActionMenuItem.image'>image</code></a> → [`Image`](#Image) or `null`
 An optional image to be displayed with the `MenuItem`.
<br/><br/>


### <code>var <a name='ActionMenuItem.label'>label</code></a> → `String`
 The string displayed to describe the `MenuItem`'s action.
<br/><br/>


# <a name='NamedStyle.List'><code>NamedStyle.List</code></a>



## Instance Functions

### <code>function <a name='OSNamedStyleList.add'>add</a>(name: `String` or `null`)</code> → [`NamedStyle`](#NamedStyle)
 Makes a new `NamedStyle` at the end of the `NamedStyleList`, and optionally assigns it a name.
<br/><br/>


### <code>function <a name='OSNamedStyleList.byName'>byName</a>(name: `String`)</code> → [`NamedStyle`](#NamedStyle) or `null`
 Returns the first named style that has the specified `name`, or `null` if none do.
<br/><br/>


### <code>function <a name='OSNamedStyleList.byIdentifier'>byIdentifier</a>(identifier: `String`)</code> → [`NamedStyle`](#NamedStyle) or `null`
 Returns the single named style with the specified `identifier`, or `null` if no style has that `identifier`.
<br/><br/>


### <code>function <a name='OSNamedStyleList.moveStyles'>moveStyles</a>(styles: `Array` of [`NamedStyle`](#NamedStyle), position: [`NamedStylePosition`](#NamedStylePosition))</code>
 Reorders the named styles within the `NamedStyleList`. This cannot be used to move styles between documents.
<br/><br/>


### <code>function <a name='OSNamedStyleList.duplicateStyles'>duplicateStyles</a>(styles: `Array` of [`NamedStyle`](#NamedStyle), position: [`NamedStylePosition`](#NamedStylePosition))</code> → `Array` of [`NamedStyle`](#NamedStyle)


## Instance Properties

### <code>var <a name='OSNamedStyleList.all'>all</code></a> → `Array` of [`NamedStyle`](#NamedStyle) *read-only*
 Returns the list of all `NamedStyles`. Note that the order determine which attribute values are applied if two named styles have conflicting settings.
<br/><br/>


### <code>var <a name='OSNamedStyleList.get_beginning'>beginning</code></a> → [`NamedStylePosition`](#NamedStylePosition) *read-only*
 Returns a `NamedStylePosition` that indicates the position before any existing named styles.
<br/><br/>


### <code>var <a name='OSNamedStyleList.get_end'>end</code></a> → [`NamedStylePosition`](#NamedStylePosition) *read-only*
 Returns a `NamedStylePosition` that indicates the position before after existing named styles.
<br/><br/>


# <a name='NamedStylePosition'><code>NamedStylePosition</code></a>



# <a name='Notification'><code>Notification</code></a>



## Constructors

### <code>new <a name='NotificationConstructor.constructInstance'>Notification</a>(title: `String`)</code> → [`Notification`](#Notification)


## Instance Functions

### <code>function <a name='_Notification.show'>show</a>()</code> → [`Promise`](#Promise) of [`Notification`](#Notification)
 Attempts to present the notification and returns a `Promise` which will yield the notification object itself if it is clicked or tapped, or an error if it cannot be presented or is dismissed.
<br/><br/>


## Instance Properties

### <code>var <a name='_Notification.subtitle'>subtitle</code></a> → `String` or `null`


### <code>var <a name='_Notification.title'>title</code></a> → `String`


# <a name='ObjectIdentifier'><code>ObjectIdentifier</code></a>

 A unique identifier referring to a `DatabaseObject`.
<br/><br/>


## Instance Properties

### <code>var <a name='ODOObjectID.get_objectClass'>objectClass</code></a> → [`Object`](#Object) or `null` *read-only*
 Returns the constructor object that would be used for instances of the class for this `ObjectIdentifier`.
<br/><br/>


### <code>var <a name='ODOObjectID.primaryKey'>primaryKey</code></a> → `String` *read-only*
 Returns the primary key of the object identifier.
<br/><br/>


# <a name='Pasteboard'><code>Pasteboard</code></a>

 A pasteboard temporarily holds representations of items of different types for transfer between different applications or different locations in the application.
<br/><br/>


## Class Functions

### <code>function <a name='PasteboardConstructor.makeUnique'>makeUnique</a>()</code> → [`Pasteboard`](#Pasteboard)
 Creates a new unique pasteboard.
<br/><br/>


## Class Properties

### <code>var <a name='PasteboardConstructor.get_general'>general</code></a> → [`Pasteboard`](#Pasteboard) *read-only*
 The `Pasteboard` used for user-initiated copy/paste support.
<br/><br/>


## Instance Functions

### <code>function <a name='Pasteboard.availableType'>availableType</a>(types: `Array` of [`TypeIdentifier`](#TypeIdentifier))</code> → [`TypeIdentifier`](#TypeIdentifier) or `null`
 The first type from the provided list which is available on the pasteboard, or `null` if none are available.
<br/><br/>


### <code>function <a name='Pasteboard.addItems'>addItems</a>(items: `Array` of [`Pasteboard.Item`](#Pasteboard.Item))</code>
 Appends the new items to the pasteboard.
<br/><br/>


### <code>function <a name='Pasteboard.clear'>clear</a>()</code>
 Remove all items from the pasteboard.
<br/><br/>


### <code>function <a name='Pasteboard.dataForType'>dataForType</a>(type: [`TypeIdentifier`](#TypeIdentifier))</code> → [`Data`](#Data) or `null`
 The `Data` representation for the given type in this pasteboard, or `null` if none is available.
<br/><br/>


### <code>function <a name='Pasteboard.setDataForType'>setDataForType</a>(data: [`Data`](#Data), type: [`TypeIdentifier`](#TypeIdentifier))</code>
 Set the `Data` representation for the given type in this pasteboard, replacing any previously set data.
<br/><br/>


### <code>function <a name='Pasteboard.stringForType'>stringForType</a>(type: [`TypeIdentifier`](#TypeIdentifier))</code> → `String` or `null`
 The `String` representation for the given type in this pasteboard, or `null` if none is available.
<br/><br/>


### <code>function <a name='Pasteboard.setStringForType'>setStringForType</a>(string: `String`, type: [`TypeIdentifier`](#TypeIdentifier))</code>
 Set the `String` representation for the given type in this pasteboard, replacing any previously set data.
<br/><br/>


## Instance Properties

### <code>var <a name='Pasteboard.get_URL'>URL</code></a> → [`URL`](#URL) or `null`
 Gets or sets the pasteboard content as a single URL.
<br/><br/>


### <code>var <a name='Pasteboard.get_URLs'>URLs</code></a> → `Array` of [`URL`](#URL) or `null`
 Gets or sets the pasteboard content as a list of URLs.
<br/><br/>


### <code>var <a name='Pasteboard.get_color'>color</code></a> → [`Color`](#Color) or `null`
 Gets or sets the pasteboard content as a single color.
<br/><br/>


### <code>var <a name='Pasteboard.get_colors'>colors</code></a> → `Array` of [`Color`](#Color) or `null`
 Gets or sets the pasteboard content as a list of colors.
<br/><br/>


### <code>var <a name='Pasteboard.hasColors'>hasColors</code></a> → `Boolean` *read-only*
 Returns `true` if the pasteboard contains one or more colors.
<br/><br/>


### <code>var <a name='Pasteboard.hasImages'>hasImages</code></a> → `Boolean` *read-only*
 Returns `true` if the pasteboard contains one or more images.
<br/><br/>


### <code>var <a name='Pasteboard.hasStrings'>hasStrings</code></a> → `Boolean` *read-only*
 Returns `true` if the pasteboard contains one or more strings.
<br/><br/>


### <code>var <a name='Pasteboard.hasURLs'>hasURLs</code></a> → `Boolean` *read-only*
 Returns `true` if the pasteboard contains one or more URLs.
<br/><br/>


### <code>var <a name='Pasteboard.get_image'>image</code></a> → [`Image`](#Image) or `null`
 Gets or sets the pasteboard content as a single image.
<br/><br/>


### <code>var <a name='Pasteboard.get_images'>images</code></a> → `Array` of [`Image`](#Image) or `null`
 Gets or sets the pasteboard content as a list of images.
<br/><br/>


### <code>var <a name='Pasteboard.get_items'>items</code></a> → `Array` of [`Pasteboard.Item`](#Pasteboard.Item)
 The array of individual items on the pasteboard, each potentially with their own set of types.
<br/><br/>


### <code>var <a name='Pasteboard.get_string'>string</code></a> → `String` or `null`
 Gets or sets the pasteboard content as a single plain-text string.
<br/><br/>


### <code>var <a name='Pasteboard.get_strings'>strings</code></a> → `Array` of `String` or `null`
 Gets or sets the pasteboard content as a list of plain-text strings.
<br/><br/>


### <code>var <a name='Pasteboard.types'>types</code></a> → `Array` of [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The list of pasteboard types currently available on the pasteboard.
<br/><br/>


# <a name='Pasteboard.Item'><code>Pasteboard.Item</code></a>



## Constructors

### <code>new <a name='PasteboardItemConstructor.constructInstance'>Pasteboard.Item</a>()</code> → [`Pasteboard.Item`](#Pasteboard.Item)
 Make a new empty pasteboard item with no contents.
<br/><br/>


## Instance Functions

### <code>function <a name='PasteboardItem.dataForType'>dataForType</a>(type: [`TypeIdentifier`](#TypeIdentifier))</code> → [`Data`](#Data) or `null`
 The `Data` representation for the given type in this pasteboard item, or `null` if none is available.
<br/><br/>


### <code>function <a name='PasteboardItem.setDataForType'>setDataForType</a>(data: [`Data`](#Data), type: [`TypeIdentifier`](#TypeIdentifier))</code>
 Set the `Data` representation for the given type in this pasteboard item, replacing any previously set data.
<br/><br/>


### <code>function <a name='PasteboardItem.stringForType'>stringForType</a>(type: [`TypeIdentifier`](#TypeIdentifier))</code> → `String` or `null`
 The `String` representation for the given type in this pasteboard item, or `null` if none is available.
<br/><br/>


### <code>function <a name='PasteboardItem.setStringForType'>setStringForType</a>(string: `String`, type: [`TypeIdentifier`](#TypeIdentifier))</code>
 Set the `String` representation for the given type in this pasteboard item, replacing any previously set data.
<br/><br/>


## Instance Properties

### <code>var <a name='PasteboardItem.types'>types</code></a> → `Array` of [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The list of types available for this pasteboard item.
<br/><br/>


# <a name='Perspective'><code>Perspective</code></a>



## Class Properties

### <code>var <a name='PerspectiveScriptingNamespaceConstructor.get_all'>all</code></a> → `Array` of [`Perspective.BuiltIn`](#Perspective.BuiltIn) or [`Perspective.Custom`](#Perspective.Custom) *read-only*
 Returns all the built-in and custom perspectives, in their user-preferred order.
<br/><br/>


### <code>var <a name='PerspectiveScriptingNamespaceConstructor.get_favorites'>favorites</code></a> → `Array` of [`Perspective.BuiltIn`](#Perspective.BuiltIn) or [`Perspective.Custom`](#Perspective.Custom) *read-only*
 Returns the favorite perspectives.
<br/><br/>


# <a name='Perspective.BuiltIn'><code>Perspective.BuiltIn</code></a>



## Class Properties

### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Flagged'>Flagged</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 The flagged items.
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Forecast'>Forecast</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 The upcoming due items.
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Inbox'>Inbox</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 The inbox of tasks.
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Nearby'>Nearby</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 Nearby items on a map (iOS only).
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Projects'>Projects</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 The library of projects.
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Review'>Review</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 The projects needing review.
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Search'>Search</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 A search of the database. This perspective cannot be set, but might be reported if the user is searching.
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.Tags'>Tags</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*
 The hierarchy of tags.
<br/><br/>


### <code>var <a name='_Perspective_BuiltIn_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Perspective.BuiltIn`](#Perspective.BuiltIn) *read-only*


## Instance Properties

### <code>var <a name='OFMBuiltInPerspectiveIdentifier.Wrapper.name'>name</code></a> → `String` *read-only*
 The name of the built in perspective.
<br/><br/>


# <a name='PlugIn'><code>PlugIn</code></a>



## Class Functions

### <code>function <a name='PlugInConstructor.find'>find</a>(identifier: `String`, minimumVersion: [`Version`](#Version) or `null`)</code> → [`PlugIn`](#PlugIn) or `null`


## Class Properties

### <code>var <a name='PlugInConstructor.get_all'>all</code></a> → `Array` of [`PlugIn`](#PlugIn) *read-only*


## Instance Functions

### <code>function <a name='PlugInScriptObject.library'>library</a>(identifier: `String`)</code> → [`PlugIn.Library`](#PlugIn.Library) or `null`
 Looks for a `PlugIn.Library` in the receiver and returns it if found.
<br/><br/>


### <code>function <a name='PlugInScriptObject.action'>action</a>(identifier: `String`)</code> → [`PlugIn.Action`](#PlugIn.Action) or `null`


### <code>function <a name='PlugInScriptObject.handler'>handler</a>(identifier: `String`)</code> → [`PlugIn.Handler`](#PlugIn.Handler) or `null`


### <code>function <a name='PlugInScriptObject.resourceNamed'>resourceNamed</a>(name: `String`)</code> → [`URL`](#URL) or `null`


### <code>function <a name='PlugInScriptObject.imageNamed'>imageNamed</a>(name: `String`)</code> → [`Image`](#Image) or `null`


### <code>function <a name='PlugInScriptObject.localizedResourceNamed'>localizedResourceNamed</a>(filename: `String`)</code> → [`FileWrapper`](#FileWrapper) or `null`


## Instance Properties

### <code>var <a name='PlugInScriptObject.URL'>URL</code></a> → [`URL`](#URL) or `null` *read-only*
 Returns the original URL from whence this `PlugIn` came, if known.
<br/><br/>


### <code>var <a name='PlugInScriptObject.actions'>actions</code></a> → `Array` of [`PlugIn.Action`](#PlugIn.Action) *read-only*


### <code>var <a name='PlugInScriptObject.author'>author</code></a> → `String` *read-only*
 Returns the author for the `PlugIn`.
<br/><br/>


### <code>var <a name='PlugInScriptObject.get_description'>description</code></a> → `String` *read-only*
 Returns the description provided for the `PlugIn`.
<br/><br/>


### <code>var <a name='PlugInScriptObject.displayName'>displayName</code></a> → `String` *read-only*
 Returns the localized, human-readable name for the `PlugIn`.
<br/><br/>


### <code>var <a name='PlugInScriptObject.handlers'>handlers</code></a> → `Array` of [`PlugIn.Handler`](#PlugIn.Handler) *read-only*


### <code>var <a name='PlugInScriptObject.identifier'>identifier</code></a> → `String` *read-only*
 The unique identifier of the `PlugIn`.
<br/><br/>


### <code>var <a name='PlugInScriptObject.libraries'>libraries</code></a> → `Array` of [`PlugIn.Library`](#PlugIn.Library) *read-only*


### <code>var <a name='PlugInScriptObject.version'>version</code></a> → [`Version`](#Version) *read-only*
 Returns the current `Version` for the `PlugIn`.
<br/><br/>


# <a name='PlugIn.Action'><code>PlugIn.Action</code></a>



## Constructors

### <code>new <a name='PlugInActionConstructor.constructInstance'>PlugIn.Action</a>(perform: [`Function`](#Function))</code> → [`PlugIn.Action`](#PlugIn.Action)
 Returns a new `PlugIn.Action`. Only used within an action JavaScript file embedded within a PlugIn.
<br/><br/>


## Instance Properties

### <code>var <a name='PlugInActionScriptObject.get_description'>description</code></a> → `String` *read-only*


### <code>var <a name='PlugInActionScriptObject.get_label'>label</code></a> → `String` *read-only*
 Returns the default label to use for interface controls that invoke the action.
<br/><br/>


### <code>var <a name='PlugInActionScriptObject.get_longLabel'>longLabel</code></a> → `String` *read-only*
 Returns the label to use for interface controls that invoke the action, when a long amount of space is available.
<br/><br/>


### <code>var <a name='PlugInActionScriptObject.get_mediumLabel'>mediumLabel</code></a> → `String` *read-only*
 Returns the label to use for interface controls that invoke the action, when a medium amount of space is available.
<br/><br/>


### <code>var <a name='PlugInActionScriptObject.get_name'>name</code></a> → `String` *read-only*
 Returns the name of the `PlugIn.Action`.
<br/><br/>


### <code>var <a name='PlugInActionScriptObject.get_paletteLabel'>paletteLabel</code></a> → `String` *read-only*
 Returns the label to use for interface controls that show a prototype of the action control, such as on a macOS toolbar configuration sheet.
<br/><br/>


### <code>var <a name='PlugInActionScriptObject.get_perform'>perform</code></a> → [`Function`](#Function) *read-only*


### <code>var <a name='PlugInActionScriptObject.get_plugIn'>plugIn</code></a> → [`PlugIn`](#PlugIn) *read-only*
 Returns the `PlugIn` that contains this object.
<br/><br/>


### <code>var <a name='PlugInActionScriptObject.get_shortLabel'>shortLabel</code></a> → `String` *read-only*
 Returns the label to use for interface controls that invoke the action, when a short amount of space is available.
<br/><br/>


### <code>var <a name='PlugInActionScriptObject.validate'>validate</code></a> → [`Function`](#Function) or `null`
 A function to check whether the action is supported, given the current application state, as determined by the arguments passed (typically including the selection). This optional Function may be configured while the `Action` is being loaded, but after that the `Action` will be frozen.
<br/><br/>


# <a name='PlugIn.Handler'><code>PlugIn.Handler</code></a>



## Constructors

### <code>new <a name='PlugInHandlerConstructor.constructInstance'>PlugIn.Handler</a>(invoke: [`Function`](#Function))</code> → [`PlugIn.Handler`](#PlugIn.Handler)
 Returns a new `PlugIn.Handler`. Only used within an handler JavaScript file embedded within a PlugIn.
<br/><br/>


## Instance Properties

### <code>var <a name='PlugInHandlerScriptObject.get_invoke'>invoke</code></a> → [`Function`](#Function) *read-only*
 The `Function` that will be executed for each handler registered for an event posted by an application object.
<br/><br/>


### <code>var <a name='PlugInHandlerScriptObject.get_name'>name</code></a> → `String` *read-only*
 Returns the name of the `PlugIn.Handler`.
<br/><br/>


### <code>var <a name='PlugInHandlerScriptObject.get_plugIn'>plugIn</code></a> → [`PlugIn`](#PlugIn) *read-only*
 Returns the `PlugIn` that contains this object.
<br/><br/>


### <code>var <a name='PlugInHandlerScriptObject.willAttach'>willAttach</code></a> → [`Function`](#Function) or `null`
 An optional `Function` that can be set on `PlugIn.Handler` as it is being loaded (but not after). This function is passed the application object that post events to trigger the handler. The return value should be a state object that is JSON archivable (or `undefined` if the handler has no state to maintain across invocations).
<br/><br/>


### <code>var <a name='PlugInHandlerScriptObject.willDetach'>willDetach</code></a> → [`Function`](#Function) or `null`
 An optional `Function` that can be set on `PlugIn.Handler` as it is being loaded (but not after). Called when a previously attached `PlugIn.Handler` is being detached from an application object. Any return value or thrown error are ignored.
<br/><br/>


# <a name='PlugIn.Library'><code>PlugIn.Library</code></a>

 An object that represents a library from a plug-in.
<br/><br/>


## Constructors

### <code>new <a name='LibraryConstructor.constructInstance'>PlugIn.Library</a>(version: [`Version`](#Version))</code> → [`PlugIn.Library`](#PlugIn.Library)
 Returns a new `Library`. Typically only used within a library JavaScript file embedded within a PlugIn.
<br/><br/>


## Instance Properties

### <code>var <a name='PlugInLibraryScriptObject.get_name'>name</code></a> → `String` *read-only*
 Returns the name of the `PlugIn.Library`.
<br/><br/>


### <code>var <a name='PlugInLibraryScriptObject.get_plugIn'>plugIn</code></a> → [`PlugIn`](#PlugIn) *read-only*
 Returns the `PlugIn` that contains this object.
<br/><br/>


### <code>var <a name='PlugInLibraryScriptObject.get_version'>version</code></a> → [`Version`](#Version) *read-only*
 Returns the `Version` of this library, as passed to the constructor.
<br/><br/>


# <a name='Preferences'><code>Preferences</code></a>



## Constructors

### <code>new <a name='PreferencesContructor.constructInstance'>Preferences</a>(identifier: `String` or `null`)</code> → [`Preferences`](#Preferences)
 Creates a new `Preferences` instance. The identifier specified may be `null` to create an instance for the currently loading plug-in. If it is `null` and a plug-in is not being loaded, an error will be thrown. Key/value pairs stored in the instance will be prefixed with the identifier and a ".".
<br/><br/>


## Instance Functions

### <code>function <a name='Preferences.read'>read</a>(key: `String`)</code> → [`Object`](#Object) or `null`
 Returns the previously stored value for the given key, or `null` if no value is stored.
<br/><br/>


### <code>function <a name='Preferences.readBoolean'>readBoolean</a>(key: `String`)</code> → `Boolean`
 Returns the previously stored value as a `Boolean`, or `false` if there is no stored value or it can't be converted to a `Boolean`.
<br/><br/>


### <code>function <a name='Preferences.readString'>readString</a>(key: `String`)</code> → `String` or `null`
 Returns the previously stored value as a `String`, or `null` if there is no stored value or it is not a `String`.
<br/><br/>


### <code>function <a name='Preferences.readNumber'>readNumber</a>(key: `String`)</code> → `Number`
 Returns the previously stored value as a `Number`, or `null` if there is no stored value or it is not a `Number`.
<br/><br/>


### <code>function <a name='Preferences.readDate'>readDate</a>(key: `String`)</code> → `Date` or `null`
 Returns the previously stored value as a `Date`, or `null` if there is no stored value or it is not a `Date`.
<br/><br/>


### <code>function <a name='Preferences.readData'>readData</a>(key: `String`)</code> → [`Data`](#Data) or `null`
 Returns the previously stored value as a `Data`, or `null` if there is no stored value or it is not a `Data`.
<br/><br/>


### <code>function <a name='Preferences.write'>write</a>(key: `String`, value: `Boolean`, `String`, `Number`, `Date`, or [`Data`](#Data) or `null`)</code>
 Stores the specified key/value pair, or removes the pair if `value` is `null`.
<br/><br/>


### <code>function <a name='Preferences.remove'>remove</a>(key: `String`)</code>
 Removes and previously stored value for the given key.
<br/><br/>


## Instance Properties

### <code>var <a name='Preferences.get_identifier'>identifier</code></a> → `String` *read-only*
 The scoping identifier the instance given when created, or the plug-in identifier if none was given.
<br/><br/>


# <a name='Project.ReviewInterval'><code>Project.ReviewInterval</code></a>

 `Project.ReviewInterval` is a value object which represents a simple repetition interval. Because it's a value object rather than a proxy, changing its properties doesn't affect any projects directly. To change a project's review interval, update the value and assign it back to the project's `reviewInterval` property:

 ```
 let project = projectNamed("Miscellaneous");
 let reviewInterval = project.reviewInterval;
 reviewInterval.steps = 3;
 reviewInterval.unit = "months";
 project.reviewInterval = reviewInterval;
 ```

 Note: At one time these simple repetition intervals were also used for task repetitions, but over time we replaced those with the more flexible `Task.RepetitionRule`. Eventually we expect to also replace this review interval with flexible repetition rules.
<br/><br/>


## Instance Properties

### <code>var <a name='ProjectReviewInterval.steps'>steps</code></a> → `Number`
 The count of `units` to use for this interval (e.g. "14" days or "12" months).
<br/><br/>


### <code>var <a name='ProjectReviewInterval.unit'>unit</code></a> → `String`
 The units to use (e.g. "days", "weeks", "months", "years").
<br/><br/>


# <a name='Project.Status'><code>Project.Status</code></a>



## Class Properties

### <code>var <a name='_Project_Status_GeneratedWrapperConstructor.Active'>Active</code></a> → [`Project.Status`](#Project.Status) *read-only*
 The project is active.
<br/><br/>


### <code>var <a name='_Project_Status_GeneratedWrapperConstructor.Done'>Done</code></a> → [`Project.Status`](#Project.Status) *read-only*
 The project has been marked as completed.
<br/><br/>


### <code>var <a name='_Project_Status_GeneratedWrapperConstructor.Dropped'>Dropped</code></a> → [`Project.Status`](#Project.Status) *read-only*
 The project has been dropped.
<br/><br/>


### <code>var <a name='_Project_Status_GeneratedWrapperConstructor.OnHold'>OnHold</code></a> → [`Project.Status`](#Project.Status) *read-only*
 The project has been put on-hold.
<br/><br/>


### <code>var <a name='_Project_Status_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Project.Status`](#Project.Status) *read-only*


# <a name='Promise'><code>Promise</code></a>

 The built-in JavaScript [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) constructor.
<br/><br/>


# <a name='QuickOpenScriptAction'><code>QuickOpenScriptAction</code></a>



## Instance Properties

### <code>var <a name='OFMPlugInActionCompletionOption.image'>image</code></a> → [`Image`](#Image) or `null`
 An optional image to be displayed with the `MenuItem`.
<br/><br/>


### <code>var <a name='OFMPlugInActionCompletionOption.label'>label</code></a> → `String`
 The string displayed to describe the `MenuItem`'s action.
<br/><br/>


# <a name='Selection'><code>Selection</code></a>

 An object representing the current selection in a `Window`.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMActionSelection.allObjects'>allObjects</code></a> → `Array` of [`Object`](#Object) *read-only*
 Returns all the objects in the selection.
<br/><br/>


### <code>var <a name='OFMActionSelection.database'>database</code></a> → [`Database`](#Database) or `null` *read-only*
 Returns the `Database` object in the selection, if any.
<br/><br/>


### <code>var <a name='OFMActionSelection.get_databaseObjects'>databaseObjects</code></a> → `Array` of [`DatabaseObject`](#DatabaseObject) *read-only*
 Returns all the `DatabaseObject` objects in the selection, if any.
<br/><br/>


### <code>var <a name='OFMActionSelection.document'>document</code></a> → [`DatabaseDocument`](#DatabaseDocument) or `null` *read-only*
 The `Document` containing the selection.
<br/><br/>


### <code>var <a name='OFMActionSelection.get_folders'>folders</code></a> → [`FolderArray`](#FolderArray) *read-only*
 Returns all the `Folder` objects in the selection, if any.
<br/><br/>


### <code>var <a name='OFMActionSelection.get_projects'>projects</code></a> → [`ProjectArray`](#ProjectArray) *read-only*
 Returns all the `Project` objects in the selection, if any.
<br/><br/>


### <code>var <a name='OFMActionSelection.get_tags'>tags</code></a> → [`TagArray`](#TagArray) *read-only*
 Returns all the `Tag` objects in the selection, if any.
<br/><br/>


### <code>var <a name='OFMActionSelection.get_tasks'>tasks</code></a> → [`TaskArray`](#TaskArray) *read-only*
 Returns all the `Task` objects in the selection, if any.
<br/><br/>


### <code>var <a name='OFMActionSelection.window'>window</code></a> → [`DocumentWindow`](#DocumentWindow) or `null` *read-only*
 The `Window` containing the selection.
<br/><br/>


# <a name='Settings'><code>Settings</code></a>

 `Settings` represent the database synchronized configuration values. *NOTE:* editing these should be done with care, as storing invalid values may corrupt your database or produce instability in the various client applications.
<br/><br/>


## Instance Functions

### <code>function <a name='OFMSettingWrapper.defaultObjectForKey'>defaultObjectForKey</a>(key: `String`)</code> → [`Object`](#Object) or `null`


### <code>function <a name='OFMSettingWrapper.hasNonDefaultObjectForKey'>hasNonDefaultObjectForKey</a>(key: `String`)</code> → `Boolean`


### <code>function <a name='OFMSettingWrapper.objectForKey'>objectForKey</a>(key: `String`)</code> → [`Object`](#Object) or `null`


### <code>function <a name='OFMSettingWrapper.setObjectForKey'>setObjectForKey</a>(value: [`Object`](#Object) or `null`, key: `String`)</code>


### <code>function <a name='OFMSettingWrapper.boolForKey'>boolForKey</a>(key: `String`)</code> → `Boolean`


### <code>function <a name='OFMSettingWrapper.setBoolForKey'>setBoolForKey</a>(value: `Boolean`, key: `String`)</code>


### <code>function <a name='OFMSettingWrapper.integerForKey'>integerForKey</a>(key: `String`)</code> → `Number`


### <code>function <a name='OFMSettingWrapper.setIntegerForKey'>setIntegerForKey</a>(value: `Number`, key: `String`)</code>


## Instance Properties

### <code>var <a name='OFMSettingWrapper.keys'>keys</code></a> → `Array` of `String` *read-only*


# <a name='SharePanel'><code>SharePanel</code></a>

 An interface that can display the system share interaction for the given items.
<br/><br/>


## Constructors

### <code>new <a name='SharePanelConstructor.constructInstance'>SharePanel</a>(items: `Array` of [`URL`](#URL), `String`, [`Image`](#Image), or [`FileWrapper`](#FileWrapper))</code> → [`SharePanel`](#SharePanel)
 Create a new share panel with the given items.
<br/><br/>


## Instance Functions

### <code>function <a name='SharePanel.addItem'>addItem</a>(shareItem: [`URL`](#URL), `String`, [`Image`](#Image), or [`FileWrapper`](#FileWrapper))</code>
 Appends the item to the end of `items`.
<br/><br/>


### <code>function <a name='SharePanel.addItems'>addItems</a>(shareItems: `Array` of [`URL`](#URL), `String`, [`Image`](#Image), or [`FileWrapper`](#FileWrapper))</code>
 Appends the contents of the given array to the end of `items`.
<br/><br/>


### <code>function <a name='SharePanel.removeItem'>removeItem</a>(shareItem: [`URL`](#URL), `String`, [`Image`](#Image), or [`FileWrapper`](#FileWrapper))</code>
 Removes the first occurrence of the item from `items` if it is present in `items`.
<br/><br/>


### <code>function <a name='SharePanel.removeItems'>removeItems</a>(shareItems: `Array` of [`URL`](#URL), `String`, [`Image`](#Image), or [`FileWrapper`](#FileWrapper))</code>
 Removes the first occurrence of each member of the given array from `items` if that member is present in `items`.
<br/><br/>


### <code>function <a name='SharePanel.clearItems'>clearItems</a>()</code>
 Sets `items` to an empty array. Note: Calling `show` when `items` is empty results in an error, so be sure to add new items after calling this and before calling `show`.
<br/><br/>


### <code>function <a name='SharePanel.show'>show</a>()</code>
 Presents the share panel for its items. Calling this when `items` is empty will result in an error.
<br/><br/>


## Instance Properties

### <code>var <a name='SharePanel.items'>items</code></a> → `Array` of [`URL`](#URL), `String`, [`Image`](#Image), or [`FileWrapper`](#FileWrapper)
 The items that will be supplied to the system share interaction upon calling `show`.
<br/><br/>


# <a name='Speech'><code>Speech</code></a>



# <a name='Speech.Boundary'><code>Speech.Boundary</code></a>



## Class Properties

### <code>var <a name='_Speech_Boundary_GeneratedWrapperConstructor.Immediate'>Immediate</code></a> → [`Speech.Boundary`](#Speech.Boundary) *read-only*


### <code>var <a name='_Speech_Boundary_GeneratedWrapperConstructor.Word'>Word</code></a> → [`Speech.Boundary`](#Speech.Boundary) *read-only*


### <code>var <a name='_Speech_Boundary_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Speech.Boundary`](#Speech.Boundary) *read-only*


# <a name='Speech.Synthesizer'><code>Speech.Synthesizer</code></a>



## Constructors

### <code>new <a name='SpeechSynthesizerConstructor.constructInstance'>Speech.Synthesizer</a>()</code> → [`Speech.Synthesizer`](#Speech.Synthesizer)


## Instance Functions

### <code>function <a name='AVSpeechSynthesizer.speakUtterance'>speakUtterance</a>(utterance: [`Speech.Utterance`](#Speech.Utterance))</code>
 Enqueues the utterance. If the utterance is already enqueued or speaking, throws an error.
<br/><br/>


### <code>function <a name='AVSpeechSynthesizer.stopSpeaking'>stopSpeaking</a>(boundary: [`Speech.Boundary`](#Speech.Boundary))</code> → `Boolean`


### <code>function <a name='AVSpeechSynthesizer.pauseSpeaking'>pauseSpeaking</a>(boundary: [`Speech.Boundary`](#Speech.Boundary))</code> → `Boolean`


### <code>function <a name='AVSpeechSynthesizer.continueSpeaking'>continueSpeaking</a>()</code> → `Boolean`


## Instance Properties

### <code>var <a name='AVSpeechSynthesizer.paused'>paused</code></a> → `Boolean` *read-only*


### <code>var <a name='AVSpeechSynthesizer.speaking'>speaking</code></a> → `Boolean` *read-only*


# <a name='Speech.Utterance'><code>Speech.Utterance</code></a>



## Class Properties

### <code>var <a name='SpeechUtteranceConstructor.defaultSpeechRate'>defaultSpeechRate</code></a> → `Number` *read-only*


### <code>var <a name='SpeechUtteranceConstructor.maximumSpeechRate'>maximumSpeechRate</code></a> → `Number` *read-only*


### <code>var <a name='SpeechUtteranceConstructor.minimumSpeechRate'>minimumSpeechRate</code></a> → `Number` *read-only*


## Constructors

### <code>new <a name='SpeechUtteranceConstructor.constructInstance'>Speech.Utterance</a>(string: `String`)</code> → [`Speech.Utterance`](#Speech.Utterance)


## Instance Properties

### <code>var <a name='AVSpeechUtterance.pitchMultiplier'>pitchMultiplier</code></a> → `Number`
 A value between 0.5 and 2.0, controlling the picth of the utterance.
<br/><br/>


### <code>var <a name='AVSpeechUtterance.postUtteranceDelay'>postUtteranceDelay</code></a> → `Number`


### <code>var <a name='AVSpeechUtterance.preUtteranceDelay'>preUtteranceDelay</code></a> → `Number`


### <code>var <a name='AVSpeechUtterance.prefersAssistiveTechnologySettings'>prefersAssistiveTechnologySettings</code></a> → `Boolean`
 If an assistive technology is on, like VoiceOver, the user's selected voice, rate and other settings will be used for this speech utterance instead of the default values. If no assistive technologies are on, then the values of the properties on AVSpeechUtterance will be used. Note that querying the properties will not refect the user's settings.
<br/><br/>


### <code>var <a name='AVSpeechUtterance.rate'>rate</code></a> → `Number`
 A value between `Speech.Utterance.minimumSpeechRate` and `Speech.Utterance.maximumSpeechRate` controlling the rate of speech for the utterance.
<br/><br/>


### <code>var <a name='AVSpeechUtterance.string'>string</code></a> → `String` or `null` *read-only*


### <code>var <a name='AVSpeechUtterance.voice'>voice</code></a> → [`Speech.Voice`](#Speech.Voice) or `null`
 The voice to use for this utterance, or `null` in which case the default voice will be used.
<br/><br/>


### <code>var <a name='AVSpeechUtterance.volume'>volume</code></a> → `Number`
 A value between 0.0 and 1.0 controller the volume of the utterance.
<br/><br/>


# <a name='Speech.Voice'><code>Speech.Voice</code></a>



## Class Functions

### <code>function <a name='SpeechVoiceConstructor.withLanguage'>withLanguage</a>(code: `String` or `null`)</code> → [`Speech.Voice`](#Speech.Voice) or `null`
 Returns a voice for the given BCP-47 language code (such as `en-US` or `fr-CA`), or the default voice if passed `null`. Returns `null` for an invalid langauge code.
<br/><br/>


### <code>function <a name='SpeechVoiceConstructor.withIdentifier'>withIdentifier</a>(identifier: `String`)</code> → [`Speech.Voice`](#Speech.Voice) or `null`
 Returns the voice with the given identifier, or `null` if not found.
<br/><br/>


## Class Properties

### <code>var <a name='SpeechVoiceConstructor.allVoices'>allVoices</code></a> → `Array` of [`Speech.Voice`](#Speech.Voice) *read-only*


### <code>var <a name='SpeechVoiceConstructor.currentLanguageCode'>currentLanguageCode</code></a> → `String` *read-only*


## Instance Properties

### <code>var <a name='AVSpeechSynthesisVoice.gender'>gender</code></a> → [`Speech.Voice.Gender`](#Speech.Voice.Gender) *read-only*


### <code>var <a name='AVSpeechSynthesisVoice.identifier'>identifier</code></a> → `String` *read-only*


### <code>var <a name='AVSpeechSynthesisVoice.language'>language</code></a> → `String` *read-only*


### <code>var <a name='AVSpeechSynthesisVoice.name'>name</code></a> → `String` *read-only*


# <a name='Speech.Voice.Gender'><code>Speech.Voice.Gender</code></a>



## Class Properties

### <code>var <a name='_Speech_Voice_Gender_GeneratedWrapperConstructor.Female'>Female</code></a> → [`Speech.Voice.Gender`](#Speech.Voice.Gender) *read-only*


### <code>var <a name='_Speech_Voice_Gender_GeneratedWrapperConstructor.Male'>Male</code></a> → [`Speech.Voice.Gender`](#Speech.Voice.Gender) *read-only*


### <code>var <a name='_Speech_Voice_Gender_GeneratedWrapperConstructor.Unspecified'>Unspecified</code></a> → [`Speech.Voice.Gender`](#Speech.Voice.Gender) *read-only*


### <code>var <a name='_Speech_Voice_Gender_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Speech.Voice.Gender`](#Speech.Voice.Gender) *read-only*


# <a name='StringEncoding'><code>StringEncoding</code></a>



## Class Properties

### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.ASCII'>ASCII</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.ISO2022JP'>ISO2022JP</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.ISOLatin1'>ISOLatin1</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.ISOLatin2'>ISOLatin2</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.JapaneseEUC'>JapaneseEUC</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.MacOSRoman'>MacOSRoman</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.NextStep'>NextStep</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.NonLossyASCII'>NonLossyASCII</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.ShiftJIS'>ShiftJIS</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.Symbol'>Symbol</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.UTF16'>UTF16</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.UTF16BigEndian'>UTF16BigEndian</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.UTF16LittleEndian'>UTF16LittleEndian</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.UTF32'>UTF32</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.UTF32BigEndian'>UTF32BigEndian</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.UTF32LittleEndian'>UTF32LittleEndian</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.UTF8'>UTF8</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.Unicode'>Unicode</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.WindowsCP1250'>WindowsCP1250</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.WindowsCP1251'>WindowsCP1251</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.WindowsCP1252'>WindowsCP1252</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.WindowsCP1253'>WindowsCP1253</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.WindowsCP1254'>WindowsCP1254</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='_StringEncoding_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`StringEncoding`](#StringEncoding) *read-only*


# <a name='Style'><code>Style</code></a>



## Instance Functions

### <code>function <a name='OSStyle.set'>set</a>(attribute: [`Style.Attribute`](#Style.Attribute), value: [`Object`](#Object) or `null`)</code> → `Boolean`
 Sets (or clears) the value for the given style attribute.
 Styles that cascade from this one will inherit this value, if they don't define their own value or have a closer ancestor style that does.
 Returns true if a change was actually made, false otherwise. Throws an error if the key does not map to a known attribute, or if the value is of the wrong type for the specified attribute.
<br/><br/>


### <code>function <a name='OSStyle.get'>get</a>(attribute: [`Style.Attribute`](#Style.Attribute))</code> → [`Object`](#Object) or `null`
 Looks up the value for the specified style attribute locally, in the cascading and inherited styles, and finally falling back to the default value for the style attribute.
<br/><br/>


### <code>function <a name='OSStyle.localValueForAttribute'>localValueForAttribute</a>(attribute: [`Style.Attribute`](#Style.Attribute))</code> → [`Object`](#Object) or `null`
 Looks up the value for the specified style attribute locally, returning null if it is not set.
<br/><br/>


### <code>function <a name='OSStyle.addNamedStyle'>addNamedStyle</a>(namedStyle: [`NamedStyle`](#NamedStyle))</code>
 Adds the specified `NamedStyle` to the set of named styles to include in this `Style`. If the style is already present, or if this would create a loop (adding two `NamedStyles` to each other's list of named styles), an error will be thrown.
<br/><br/>


### <code>function <a name='OSStyle.removeNamedStyle'>removeNamedStyle</a>(namedStyle: [`NamedStyle`](#NamedStyle))</code>
 Removes the specified `NamedStyle` from the set of named styles to include in this `Style`. If the style is not present, an error will be thrown.
<br/><br/>


### <code>function <a name='OSStyle.influencedBy'>influencedBy</a>(otherStyle: [`Style`](#Style))</code> → `Boolean`
 Returns `true` if the receiver is influenced, directly or indirectly from the passed `Style`.
<br/><br/>


### <code>function <a name='OSStyle.setStyle'>setStyle</a>(style: [`Style`](#Style))</code>
 Updates all the attributes and inherited styles on the receiver to be the same as the argument `Style`.
<br/><br/>


### <code>function <a name='OSStyle.clear'>clear</a>()</code>
 Removes all the locally applied style attribute values for this `Style`.
<br/><br/>


## Instance Properties

### <code>var <a name='OSStyle.get_fontFillColor'>fontFillColor</code></a> → [`Color`](#Color)
 The color used to fill text. Setting the color to `null` will remove the setting for this style.
<br/><br/>


### <code>var <a name='OSStyle.get_link'>link</code></a> → [`URL`](#URL) or `null` *read-only*
 Returns the `URL` link for a style, or `null` if there is no link applied. Note that `get(Style.Attribute.Link)` on the same style will return the default `URL` with an empty `toString()` value when there is no URL applied. If the style represents a file attachment and there is no specific link attribute set, the `URL` for the file attachment will be returned. If the style represents an file attachment that is embedded in the document, `null` will be returned.
<br/><br/>


### <code>var <a name='OSStyle.locallyDefinedAttributes'>locallyDefinedAttributes</code></a> → `Array` of [`Style.Attribute`](#Style.Attribute) *read-only*
 Returns an array of the `Style.Attribute`s defined on this `Style`.
<br/><br/>


### <code>var <a name='OSStyle.namedStyles'>namedStyles</code></a> → `Array` of [`NamedStyle`](#NamedStyle) *read-only*
 Returns the `NamedStyle`s that are directly associated with this `Style`. If a style attribute lookup doesn't find a value in the local style, then the named styles will be searched.
<br/><br/>


# <a name='NamedStyle'><code>NamedStyle</code></a> : [<code>Style</code>](#Style)



## Instance Functions

### <code>function <a name='OSNamedStyle.remove'>remove</a>()</code>
 Removes the `NamedStyle` from the document. Any references to it are disconnected as well.
<br/><br/>


## Instance Properties

### <code>var <a name='OSNamedStyle.get_after'>after</code></a> → [`NamedStylePosition`](#NamedStylePosition) *read-only*
 Returns a `NamedStylePosition` that indicates the slot after this item.
<br/><br/>


### <code>var <a name='OSNamedStyle.get_before'>before</code></a> → [`NamedStylePosition`](#NamedStylePosition) *read-only*
 Returns a `NamedStylePosition` that indicates the slot before this item.
<br/><br/>


### <code>var <a name='OSNamedStyle.identifier'>identifier</code></a> → `String` *read-only*
 A unique identifier for the style, which is suitable for long-lived references.
<br/><br/>


### <code>var <a name='OSNamedStyle.name'>name</code></a> → `String`
 The name of the style that is presented in the interface.
<br/><br/>


# <a name='Style.Attribute'><code>Style.Attribute</code></a>



## Class Properties

### <code>var <a name='StyleAttributeConstructor.BackgroundColor'>BackgroundColor</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.BaselineOffset'>BaselineOffset</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.BaselineSuperscript'>BaselineSuperscript</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.Expansion'>Expansion</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontCondensed'>FontCondensed</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontFamily'>FontFamily</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontFillColor'>FontFillColor</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontFixedPitch'>FontFixedPitch</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontItalic'>FontItalic</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontName'>FontName</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontNarrow'>FontNarrow</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontSize'>FontSize</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontStrokeColor'>FontStrokeColor</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontStrokeWidth'>FontStrokeWidth</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.FontWeight'>FontWeight</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.KerningAdjustment'>KerningAdjustment</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.LigatureSelection'>LigatureSelection</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.Link'>Link</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.Obliqueness'>Obliqueness</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphAlignment'>ParagraphAlignment</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphBaseWritingDirection'>ParagraphBaseWritingDirection</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphDefaultTabInterval'>ParagraphDefaultTabInterval</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphFirstLineHeadIndent'>ParagraphFirstLineHeadIndent</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphHeadIndent'>ParagraphHeadIndent</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphLineHeightMultiple'>ParagraphLineHeightMultiple</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphLineSpacing'>ParagraphLineSpacing</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphMaximumLineHeight'>ParagraphMaximumLineHeight</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphMinimumLineHeight'>ParagraphMinimumLineHeight</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphSpacing'>ParagraphSpacing</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphSpacingBefore'>ParagraphSpacingBefore</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphTabStops'>ParagraphTabStops</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ParagraphTailIndent'>ParagraphTailIndent</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ShadowBlurRadius'>ShadowBlurRadius</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ShadowColor'>ShadowColor</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.ShadowOffset'>ShadowOffset</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.StrikethroughAffinity'>StrikethroughAffinity</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.StrikethroughColor'>StrikethroughColor</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.StrikethroughPattern'>StrikethroughPattern</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.StrikethroughStyle'>StrikethroughStyle</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.UnderlineAffinity'>UnderlineAffinity</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.UnderlineColor'>UnderlineColor</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.UnderlinePattern'>UnderlinePattern</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


### <code>var <a name='StyleAttributeConstructor.UnderlineStyle'>UnderlineStyle</code></a> → [`Style.Attribute`](#Style.Attribute) *read-only*


## Instance Properties

### <code>var <a name='OSStyleAttribute.get_defaultValue'>defaultValue</code></a> → [`Object`](#Object) *read-only*
 Returns the default value that will be used when a style has no local value for this attribute, nor do any of its associated styles.
<br/><br/>


### <code>var <a name='OSStyleAttribute.key'>key</code></a> → `String` *read-only*
 Returns the string used to identify this attribute when calling `get` or `set` on a `Style` instance.
<br/><br/>


# <a name='Tag.ChildInsertionLocation'><code>Tag.ChildInsertionLocation</code></a>

 A location specified relative to an existing `Tag` or `Database`. These cannot be instantiated directly, rather they are returned from properties like `Tag.before` or `Database.beginning`.
<br/><br/>


# <a name='Tag.Status'><code>Tag.Status</code></a>



## Class Properties

### <code>var <a name='_Tag_Status_GeneratedWrapperConstructor.Active'>Active</code></a> → [`Tag.Status`](#Tag.Status) *read-only*
 The tag is active.
<br/><br/>


### <code>var <a name='_Tag_Status_GeneratedWrapperConstructor.Dropped'>Dropped</code></a> → [`Tag.Status`](#Tag.Status) *read-only*
 The tag has been dropped.
<br/><br/>


### <code>var <a name='_Tag_Status_GeneratedWrapperConstructor.OnHold'>OnHold</code></a> → [`Tag.Status`](#Tag.Status) *read-only*
 The tag has been put on-hold.
<br/><br/>


### <code>var <a name='_Tag_Status_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Tag.Status`](#Tag.Status) *read-only*


# <a name='Tag.TaskInsertionLocation'><code>Tag.TaskInsertionLocation</code></a>

 A location specifying the order of a `Task` within a `Tag`. These cannot be instantiated directly, rather they are returned from properties like `Tag.beforeTask()` or `Tag.endingOfTasks`. (For a complete list of locations, open the navigation sidebar and use its filter to search for `Tag.TaskInsertionLocation`.)
<br/><br/>


# <a name='Task.ChildInsertionLocation'><code>Task.ChildInsertionLocation</code></a>

 A location specified relative to an existing `Task` or `Database`. These cannot be instantiated directly, rather they are returned from properties like `Task.before`, `Inbox.ending`, or `Project.beginning`. (For a complete list of locations, open the navigation sidebar and use its filter to search for `Task.ChildInsertionLocation`.)
<br/><br/>


# <a name='Task.Notification.Kind'><code>Task.Notification.Kind</code></a>



## Class Properties

### <code>var <a name='_Task_Notification_Kind_GeneratedWrapperConstructor.Absolute'>Absolute</code></a> → [`Task.Notification.Kind`](#Task.Notification.Kind) *read-only*
 This notification fires on a given date, regardless of its task's due and defer dates.
<br/><br/>


### <code>var <a name='_Task_Notification_Kind_GeneratedWrapperConstructor.DueRelative'>DueRelative</code></a> → [`Task.Notification.Kind`](#Task.Notification.Kind) *read-only*
 This notification fires at a time relative to its task's due date.
<br/><br/>


### <code>var <a name='_Task_Notification_Kind_GeneratedWrapperConstructor.Unknown'>Unknown</code></a> → [`Task.Notification.Kind`](#Task.Notification.Kind) *read-only*
 It is not known what this notification's fire date is relative to.
<br/><br/>


### <code>var <a name='_Task_Notification_Kind_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Task.Notification.Kind`](#Task.Notification.Kind) *read-only*


# <a name='Task.RepetitionMethod'><code>Task.RepetitionMethod</code></a>



## Class Properties

### <code>var <a name='_Task_RepetitionMethod_GeneratedWrapperConstructor.DeferUntilDate'>DeferUntilDate</code></a> → [`Task.RepetitionMethod`](#Task.RepetitionMethod) *read-only*


### <code>var <a name='_Task_RepetitionMethod_GeneratedWrapperConstructor.DueDate'>DueDate</code></a> → [`Task.RepetitionMethod`](#Task.RepetitionMethod) *read-only*


### <code>var <a name='_Task_RepetitionMethod_GeneratedWrapperConstructor.Fixed'>Fixed</code></a> → [`Task.RepetitionMethod`](#Task.RepetitionMethod) *read-only*


### <code>var <a name='_Task_RepetitionMethod_GeneratedWrapperConstructor.None'>None</code></a> → [`Task.RepetitionMethod`](#Task.RepetitionMethod) *read-only*
 The task does not repeat.
<br/><br/>


### <code>var <a name='_Task_RepetitionMethod_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Task.RepetitionMethod`](#Task.RepetitionMethod) *read-only*


# <a name='Task.RepetitionRule'><code>Task.RepetitionRule</code></a>

 A `Task.RepetitionRule` describes a pattern of dates using a ICS formatted recurrence string and a `Task.RepetitionMethod` to describe how those dates are applied to a `Task`.
<br/><br/>


## Constructors

### <code>new <a name='RepetitionRuleConstructor.constructInstance'>Task.RepetitionRule</a>(ruleString: `String`, method: [`Task.RepetitionMethod`](#Task.RepetitionMethod))</code> → [`Task.RepetitionRule`](#Task.RepetitionRule)
 Returns a new `Task.RepetitionRule` with the specified ICS rule string and repetition method. The the rule string is not valid, or combination with the method is not supported, an error will be thrown.
<br/><br/>


## Instance Functions

### <code>function <a name='OFMRepetitionRule.firstDateAfterDate'>firstDateAfterDate</a>(date: `Date`)</code> → `Date`
 Returns the first date described by the repetition rule that is after the given date.
<br/><br/>


## Instance Properties

### <code>var <a name='OFMRepetitionRule.method'>method</code></a> → [`Task.RepetitionMethod`](#Task.RepetitionMethod) *read-only*
 The method used to create the repetition rule.
<br/><br/>


### <code>var <a name='OFMRepetitionRule.ruleString'>ruleString</code></a> → `String` *read-only*
 The ICS rule string used to create the repetition rule.
<br/><br/>


# <a name='Task.Status'><code>Task.Status</code></a>



## Class Properties

### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.Available'>Available</code></a> → [`Task.Status`](#Task.Status) *read-only*
 The task is available to work on.
<br/><br/>


### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.Blocked'>Blocked</code></a> → [`Task.Status`](#Task.Status) *read-only*
 The task is not available to work on currently, due to a future defer date, a preceeding task in a sequential project, or having an on-hold tag associated.
<br/><br/>


### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.Completed'>Completed</code></a> → [`Task.Status`](#Task.Status) *read-only*
 The task is already completed.
<br/><br/>


### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.Dropped'>Dropped</code></a> → [`Task.Status`](#Task.Status) *read-only*
 The task will not be worked on.
<br/><br/>


### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.DueSoon'>DueSoon</code></a> → [`Task.Status`](#Task.Status) *read-only*
 The task is incomplete and due soon.
<br/><br/>


### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.Next'>Next</code></a> → [`Task.Status`](#Task.Status) *read-only*
 The task is the first available task in a project.
<br/><br/>


### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.Overdue'>Overdue</code></a> → [`Task.Status`](#Task.Status) *read-only*
 The task is incomplete overdue.
<br/><br/>


### <code>var <a name='_Task_Status_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Task.Status`](#Task.Status) *read-only*


# <a name='Task.TagInsertionLocation'><code>Task.TagInsertionLocation</code></a>

 A location specifying the order of a `Tag` within a `Task`. These cannot be instantiated directly, rather they are returned from properties like `Task.beforeTag()` or `Task.endingOfTags`. (For a complete list of locations, open the navigation sidebar and use its filter to search for `Task.TagInsertionLocation`.)
<br/><br/>


# <a name='Text'><code>Text</code></a>



## Class Functions

### <code>function <a name='JSTextConstructor.makeFileAttachment'>makeFileAttachment</a>(fileWrapper: [`FileWrapper`](#FileWrapper), style: [`Style`](#Style))</code> → [`Text`](#Text)
 Returns a new `Text` instance that represents a file attachment. The attachment has a single character string content with a special value.
<br/><br/>


## Constructors

### <code>new <a name='JSTextConstructor.constructInstance'>Text</a>(string: `String`, style: [`Style`](#Style))</code> → [`Text`](#Text)
 Returns a new `Text` instance with the given string contents and `Style` applied to the entire range of text.
<br/><br/>


## Instance Functions

### <code>function <a name='JSText.textInRange'>textInRange</a>(range: [`Text.Range`](#Text.Range))</code> → [`Text`](#Text)
 Returns a copy of the text in the specified range.
<br/><br/>


### <code>function <a name='JSText.styleForRange'>styleForRange</a>(range: [`Text.Range`](#Text.Range))</code> → [`Style`](#Style)
 Returns a `Style` instance for the given range of the `Text`.
<br/><br/>


### <code>function <a name='JSText.ranges'>ranges</a>(component: [`TextComponent`](#TextComponent), useEnclosingRange: `Boolean` or `null`)</code> → `Array` of [`Text.Range`](#Text.Range)
 Returns an array of `TextRange`s for the specified component. If `useEnclosingRange` is `true`, than any extra characters that separate follow a component will be included in its range. Any extra characters before the first found component will be included in the first range.
<br/><br/>


### <code>function <a name='JSText.replace'>replace</a>(range: [`Text.Range`](#Text.Range), with: [`Text`](#Text))</code>
 Replaces the sub-range of the receiving `Text` with a copy of the passed in `Text` (which remains unchanged).
<br/><br/>


### <code>function <a name='JSText.append'>append</a>(text: [`Text`](#Text))</code>
 Appends the given `Text` to the receiver.
<br/><br/>


### <code>function <a name='JSText.insert'>insert</a>(position: [`Text.Position`](#Text.Position), text: [`Text`](#Text))</code>
 Inserts a copy of the given `Text` at the specified position in the receiver.
<br/><br/>


### <code>function <a name='JSText.remove'>remove</a>(range: [`Text.Range`](#Text.Range))</code>
 Removes the indicated sub-range of the receiving `Text`.
<br/><br/>


### <code>function <a name='JSText.find'>find</a>(string: `String`, options: `Array` of [`Text.FindOption`](#Text.FindOption) or `null`, range: [`Text.Range`](#Text.Range) or `null`)</code> → [`Text.Range`](#Text.Range) or `null`
 Finds an occurrence of `string` within the `Text` and returns the enclosing `Text.Range` if there is a match. If `range` is passed, only that portion of the `Text` is searched. The supplied `options`, if any, change how the search is performed based on their definition.
<br/><br/>


## Instance Properties

### <code>var <a name='JSText.attachments'>attachments</code></a> → `Array` of [`Text`](#Text) *read-only*
 Returns an array of copies of the blocks of `Text` in the receiver that represent `Attachment`s. Note that editing these instances will not change the original.
<br/><br/>


### <code>var <a name='JSText.attributeRuns'>attributeRuns</code></a> → `Array` of [`Text`](#Text) *read-only*
 Returns an array of copies of the contiguous blocks of `Text` in the receiver that have the same style. Note that editing these instances will not change the original.
<br/><br/>


### <code>var <a name='JSText.characters'>characters</code></a> → `Array` of [`Text`](#Text) *read-only*
 Returns an array of copies of the characters in the `Text`. Note that editing these instances will not change the original.
<br/><br/>


### <code>var <a name='JSText.end'>end</code></a> → [`Text.Position`](#Text.Position) *read-only*
 Returns a `Text.Position` indicating the end of the `Text`.
<br/><br/>


### <code>var <a name='JSText.fileWrapper'>fileWrapper</code></a> → [`FileWrapper`](#FileWrapper) or `null` *read-only*
 Returns the attached file wrapper for the `Text` (or rather, the first character of the text), if any.
<br/><br/>


### <code>var <a name='JSText.paragraphs'>paragraphs</code></a> → `Array` of [`Text`](#Text) *read-only*
 Returns an array of copies of the paragraphs in the `Text`. Note that editing these instances will not change the original. Paragraphs, if ended by a newline, will contain the newline character.
<br/><br/>


### <code>var <a name='JSText.range'>range</code></a> → [`Text.Range`](#Text.Range) *read-only*
 Returns a `Text.Range` that spans the entire `Text`.
<br/><br/>


### <code>var <a name='JSText.sentences'>sentences</code></a> → `Array` of [`Text`](#Text) *read-only*
 Returns an array of copies of the sentences in the `Text`. Note that editing these instances will not change the original.
<br/><br/>


### <code>var <a name='JSText.start'>start</code></a> → [`Text.Position`](#Text.Position) *read-only*
 Returns a `Text.Position` indicating the beginning of the `Text`.
<br/><br/>


### <code>var <a name='JSText.get_string'>string</code></a> → `String`
 Returns a plain `String` version of the characters in the `Text`. Note that since JavaScript represents Strings as Unicode code points, the length of the returned string may be different from the number of `characters` in the `Text` object.

 Assigning to this property replaces the string content of the `Text` with the given string. The style applied to the updated characters is either the base style of the `Text` if it is currently empty, or the style of the first replaced character otherwise.
<br/><br/>


### <code>var <a name='JSText.get_style'>style</code></a> → [`Style`](#Style) *read-only*
 Returns a `Style` instance for this `Text` object.
<br/><br/>


### <code>var <a name='JSText.words'>words</code></a> → `Array` of [`Text`](#Text) *read-only*
 Returns an array of copies of the words in the `Text`. Note that editing these instances will not change the original.
<br/><br/>


# <a name='Text.FindOption'><code>Text.FindOption</code></a>



## Class Properties

### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.Anchored'>Anchored</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Matches must be anchored to the beginning (or end if Backwards is include) of the string or search range.
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.Backwards'>Backwards</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Search starting from the end of the string or range.
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.CaseInsensitive'>CaseInsensitive</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Compare upper and lower case characters as equal.
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.DiacriticInsensitive'>DiacriticInsensitive</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Ignore diacritics. For example, "ö" is considered the same as "o".
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.ForcedOrdering'>ForcedOrdering</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Force an ordering between strings that aren't strictly equal.
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.Literal'>Literal</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Perform exact character-by-character matching.
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.Numeric'>Numeric</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Order numbers by numeric value, not lexigraphically. Only applies to ordered comparisons, not find operations.
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.RegularExpression'>RegularExpression</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 For find operations, the string is treated as an ICU-compatible regular expression. If set, no other options can be used except for `CaseInsensitive` and `Anchored`.
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.WidthInsensitive'>WidthInsensitive</code></a> → [`Text.FindOption`](#Text.FindOption) *read-only*
 Ignore width differences. For example, "a" is considered the same as 'FULLWIDTH LATIN SMALL LETTER A' (U+FF41).
<br/><br/>


### <code>var <a name='_Text_FindOption_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`Text.FindOption`](#Text.FindOption) *read-only*


# <a name='Text.Position'><code>Text.Position</code></a>



# <a name='Text.Range'><code>Text.Range</code></a>



## Constructors

### <code>new <a name='TextRangeConstructor.constructInstance'>Text.Range</a>(start: [`Text.Position`](#Text.Position), end: [`Text.Position`](#Text.Position))</code> → [`Text.Range`](#Text.Range)


## Instance Properties

### <code>var <a name='TextRange.end'>end</code></a> → [`Text.Position`](#Text.Position) *read-only*
 Returns the `Text.Position` for the end of the `Text.Range`
<br/><br/>


### <code>var <a name='TextRange.isEmpty'>isEmpty</code></a> → `Boolean` *read-only*
 Returns `true` if the `Text.Range` contains no characters.
<br/><br/>


### <code>var <a name='TextRange.start'>start</code></a> → [`Text.Position`](#Text.Position) *read-only*
 Returns the `Text.Position` for the beginning of the `Text.Range`
<br/><br/>


# <a name='TextAlignment'><code>TextAlignment</code></a>



## Class Properties

### <code>var <a name='_TextAlignment_GeneratedWrapperConstructor.Center'>Center</code></a> → [`TextAlignment`](#TextAlignment) *read-only*
 Visually center aligned.
<br/><br/>


### <code>var <a name='_TextAlignment_GeneratedWrapperConstructor.Justified'>Justified</code></a> → [`TextAlignment`](#TextAlignment) *read-only*
 Fully-justified.
<br/><br/>


### <code>var <a name='_TextAlignment_GeneratedWrapperConstructor.Left'>Left</code></a> → [`TextAlignment`](#TextAlignment) *read-only*
 Visually left aligned.
<br/><br/>


### <code>var <a name='_TextAlignment_GeneratedWrapperConstructor.Natural'>Natural</code></a> → [`TextAlignment`](#TextAlignment) *read-only*
 Use the default alignment based on the characters in the text.
<br/><br/>


### <code>var <a name='_TextAlignment_GeneratedWrapperConstructor.Right'>Right</code></a> → [`TextAlignment`](#TextAlignment) *read-only*
 Visually right aligned.
<br/><br/>


### <code>var <a name='_TextAlignment_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`TextAlignment`](#TextAlignment) *read-only*


# <a name='TextComponent'><code>TextComponent</code></a>



## Class Properties

### <code>var <a name='_TextComponent_GeneratedWrapperConstructor.Attachments'>Attachments</code></a> → [`TextComponent`](#TextComponent) *read-only*
 The ranges of Text which represent Attachments.
<br/><br/>


### <code>var <a name='_TextComponent_GeneratedWrapperConstructor.AttributeRuns'>AttributeRuns</code></a> → [`TextComponent`](#TextComponent) *read-only*
 The ranges of Text which have the same attributes.
<br/><br/>


### <code>var <a name='_TextComponent_GeneratedWrapperConstructor.Characters'>Characters</code></a> → [`TextComponent`](#TextComponent) *read-only*
 The individual characters of the Text. Note that some characters (like emoji) consist of multiple Unicode code points.
<br/><br/>


### <code>var <a name='_TextComponent_GeneratedWrapperConstructor.Paragraphs'>Paragraphs</code></a> → [`TextComponent`](#TextComponent) *read-only*
 The paragraphs of Text. Unlike other options, the line breaking characters that end the paragraph are included.
<br/><br/>


### <code>var <a name='_TextComponent_GeneratedWrapperConstructor.Sentences'>Sentences</code></a> → [`TextComponent`](#TextComponent) *read-only*
 The sentences of the Text.
<br/><br/>


### <code>var <a name='_TextComponent_GeneratedWrapperConstructor.Words'>Words</code></a> → [`TextComponent`](#TextComponent) *read-only*
 The words in the Text. Whitespace or other word break characters are not included.
<br/><br/>


### <code>var <a name='_TextComponent_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`TextComponent`](#TextComponent) *read-only*


# <a name='TimeZone'><code>TimeZone</code></a>



## Class Properties

### <code>var <a name='TimeZoneConstructor.abbreviations'>abbreviations</code></a> → `Array` of `String` *read-only*
 The list of known time zone abbreviations.
<br/><br/>


## Constructors

### <code>new <a name='TimeZoneConstructor.constructInstance'>TimeZone</a>(abbreviation: `String`)</code> → [`TimeZone`](#TimeZone) or `null`
 Make a new `TimeZone` with the given abbreviation. Note that the returned `TimeZone` may have a different abbreviation than the passed argument. For example, if one of "PST" or "PDT" is requested that doens't match the current use of daylight savings time, the one that does match will be returned.
<br/><br/>


## Instance Properties

### <code>var <a name='_TimeZone.abbreviation'>abbreviation</code></a> → `String` or `null` *read-only*
 The abbreviation for the `TimeZone`.
<br/><br/>


### <code>var <a name='_TimeZone.daylightSavingTime'>daylightSavingTime</code></a> → `Boolean` *read-only*
 Returns `true` if the `TimeZone` is currently using daylight savings time.
<br/><br/>


### <code>var <a name='_TimeZone.secondsFromGMT'>secondsFromGMT</code></a> → `Number` *read-only*
 The current difference in seconds between this `TimeZone` and GMT.
<br/><br/>


# <a name='Timer'><code>Timer</code></a>



## Class Functions

### <code>function <a name='TimerConstructor.once'>once</a>(interval: `Number`, action: [`Function`](#Function)`(`&zwj;timer: [`Timer`](#Timer)&zwj;`)`)</code> → [`Timer`](#Timer)
 Makes a new `Timer` that will fire once, after the specified interval (in seconds from the current time). When the `Timer` fires, the passed in `Function` is called, passing the `Timer` as its argument.
<br/><br/>


### <code>function <a name='TimerConstructor.repeating'>repeating</a>(interval: `Number`, action: [`Function`](#Function)`(`&zwj;timer: [`Timer`](#Timer)&zwj;`)`)</code> → [`Timer`](#Timer)
 Makes a new `Timer` that will fire repeatedly with the specified interval (in seconds, with the first invocation happening that interval after the current time). When the `Timer` fires, the passed in `Function` is called, passing the `Timer` as its argument.
<br/><br/>


## Instance Functions

### <code>function <a name='_Timer.cancel'>cancel</a>()</code>


## Instance Properties

### <code>var <a name='_Timer.interval'>interval</code></a> → `Number` *read-only*


# <a name='ToolbarItem'><code>ToolbarItem</code></a>



## Instance Properties

### <code>var <a name='ActionToolbarItem.image'>image</code></a> → [`Image`](#Image) or `null`


### <code>var <a name='ActionToolbarItem.label'>label</code></a> → `String`


### <code>var <a name='ActionToolbarItem.toolTip'>toolTip</code></a> → `String` or `null`


# <a name='Tree'><code>Tree</code></a>



## Instance Functions

### <code>function <a name='OOTreeController.nodeForObject'>nodeForObject</a>(object: [`Object`](#Object))</code> → [`TreeNode`](#TreeNode) or `null`
 Returns the `TreeNode` that represents the `object` in this `Tree`, or `null` if it cannot be found (possibly filtered out).
<br/><br/>


### <code>function <a name='OOTreeController.nodesForObjects'>nodesForObjects</a>(object: `Array` of [`Object`](#Object))</code> → `Array` of [`TreeNode`](#TreeNode)
 Returns an array of `TreeNode`s for the objects that are currently in the `Tree`, according to the same filters as `nodeForObject()`. The size of the resulting node array may be smaller (even empty) than the passed in `objects` array.
<br/><br/>


### <code>function <a name='OOTreeController.reveal'>reveal</a>(nodes: `Array` of [`TreeNode`](#TreeNode))</code>
 Ensures the ancestor nodes of all the specified nodes are expanded.
<br/><br/>


### <code>function <a name='OOTreeController.select'>select</a>(nodes: `Array` of [`TreeNode`](#TreeNode), extending: `Boolean` or `null`)</code>
 Selects the specified `TreeNode`s that are visible (nodes with collapsed ancestors cannot be selected). If `extending` is `true`, the existing selection is not cleared.
<br/><br/>


### <code>function <a name='OOTreeController.copyNodes'>copyNodes</a>(nodes: `Array` of [`TreeNode`](#TreeNode), to: [`Pasteboard`](#Pasteboard))</code>
 Writes a serialized version of the `nodes` to the specified pasteboard.
<br/><br/>


### <code>function <a name='OOTreeController.paste'>paste</a>(from: [`Pasteboard`](#Pasteboard), parentNode: [`TreeNode`](#TreeNode) or `null`, childIndex: `Number` or `null`)</code>
 Attempts to read a serialized version of nodes from the pasteboard and create new items at the specified location in the receiver. If a parent node is not specified, then the root node of the receiver is assumed. If a `childIndex` is not specified, any new children are placed at the end of the parent's existing children.
<br/><br/>


## Instance Properties

### <code>var <a name='OOTreeController.rootNode'>rootNode</code></a> → [`TreeNode`](#TreeNode) *read-only*
 Returns the `rootNode` of the `Editor`.
<br/><br/>


### <code>var <a name='OOTreeController.selectedNodes'>selectedNodes</code></a> → `Array` of [`TreeNode`](#TreeNode) *read-only*
 Returns the list of selected `TreeNode`s, in the order they appear in the tree.
<br/><br/>


# <a name='ContentTree'><code>ContentTree</code></a> : [<code>Tree</code>](#Tree)



# <a name='SidebarTree'><code>SidebarTree</code></a> : [<code>Tree</code>](#Tree)

 The root object of a tree in the sidebar.
<br/><br/>


# <a name='TreeNode'><code>TreeNode</code></a>



## Instance Functions

### <code>function <a name='OOTreeNode.childAtIndex'>childAtIndex</a>(childIndex: `Number`)</code> → [`TreeNode`](#TreeNode)
 Returns the child node at the given index.
<br/><br/>


### <code>function <a name='OOTreeNode.expand'>expand</a>(completely: `Boolean` or `null`)</code>
 Attempts to expand the `TreeNode`. If `completely` is passed, all the child nodes will be expanded as they allow.
<br/><br/>


### <code>function <a name='OOTreeNode.collapse'>collapse</a>(completely: `Boolean` or `null`)</code>
 Attempts to collapse the `TreeNode`. If `completely` is passed, all the child nodes will be collapse as they allow.
<br/><br/>


### <code>function <a name='OOTreeNode.expandNote'>expandNote</a>(completely: `Boolean` or `null`)</code>
 Attempts to expand the inline note of the `TreeNode`. If `completely` is passed, all the child node notes will be expanded.
<br/><br/>


### <code>function <a name='OOTreeNode.collapseNote'>collapseNote</a>(completely: `Boolean` or `null`)</code>
 Attempts to collapse the inline note of the `TreeNode`. If `completely` is passed, all the child node notes will be collapsed.
<br/><br/>


### <code>function <a name='OOTreeNode.reveal'>reveal</a>()</code>
 Expands all the
<br/><br/>


### <code>function <a name='OOTreeNode.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;node: [`TreeNode`](#TreeNode)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the supplied function for each `TreeNode` in the receiver (including the receiver), passing that node as the single argument. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


## Instance Properties

### <code>var <a name='OOTreeNode.canCollapse'>canCollapse</code></a> → `Boolean` *read-only*
 Returns `true` if this `TreeNode` can be collapsed.
<br/><br/>


### <code>var <a name='OOTreeNode.canExpand'>canExpand</code></a> → `Boolean` *read-only*
 Returns `true` if this `TreeNode` can be expanded.
<br/><br/>


### <code>var <a name='OOTreeNode.childCount'>childCount</code></a> → `Number` *read-only*
 Returns the number of children directly under this node.
<br/><br/>


### <code>var <a name='OOTreeNode.children'>children</code></a> → `Array` of [`TreeNode`](#TreeNode) *read-only*
 Returns the array of children that are visible under this node, according to any filtering that is being done, and in the order specified by any sorting rules that have been established.
<br/><br/>


### <code>var <a name='OOTreeNode.index'>index</code></a> → `Number` *read-only*
 Returns the index of this `TreeNode` among its siblings, or zero for the `rootNode`.
<br/><br/>


### <code>var <a name='OOTreeNode.isExpanded'>isExpanded</code></a> → `Boolean` *read-only*
 Returns `true` if this `TreeNode` is currently expanded.
<br/><br/>


### <code>var <a name='OOTreeNode.isNoteExpanded'>isNoteExpanded</code></a> → `Boolean` *read-only*
 Returns `true` if the note of this `TreeNode` is currently expanded.
<br/><br/>


### <code>var <a name='OOTreeNode.isRevealed'>isRevealed</code></a> → `Boolean` *read-only*
 Returns `true` if the `TreeNode` is the `rootNode` or all of its ancestor nodes are expanded.
<br/><br/>


### <code>var <a name='OOTreeNode.isRootNode'>isRootNode</code></a> → `Boolean` *read-only*
 Returns `true` if this node is the `rootNode` of its tree.
<br/><br/>


### <code>var <a name='OOTreeNode.isSelectable'>isSelectable</code></a> → `Boolean` *read-only*
 Returns `true` if this `TreeNode` can be selected. The `rootNode` cannot be selected, nor can nodes that aren't revealed.
<br/><br/>


### <code>var <a name='OOTreeNode.isSelected'>isSelected</code></a> → `Boolean`
 Set to `true` if this `TreeNode` is in the list of selected nodes for its tree. Attempting to set this to `true` will do nothing if the node is not revealed (or is the root node).
<br/><br/>


### <code>var <a name='OOTreeNode.level'>level</code></a> → `Number` *read-only*
 Returns the nesting level of the `TreeNode`, relative to the root of the tree. The `rootNode` of an `Outline` has level zero, its children have level one, and so on. Note that if only a portion of the model is being shown, this level may not match the level of the underlying `object`.
<br/><br/>


### <code>var <a name='OOTreeNode.object'>object</code></a> → [`Object`](#Object) *read-only*
 The model object which this node wraps.
<br/><br/>


### <code>var <a name='OOTreeNode.parent'>parent</code></a> → [`TreeNode`](#TreeNode) or `null` *read-only*
 Returns the `TreeNode` that contains this node, or `null` if this is the `rootNode`.
<br/><br/>


### <code>var <a name='OOTreeNode.rootNode'>rootNode</code></a> → [`TreeNode`](#TreeNode) *read-only*
 Returns the root `TreeNode` for the tree that this node belongs to.
<br/><br/>


# <a name='TypeIdentifier'><code>TypeIdentifier</code></a>



## Class Functions

### <code>function <a name='TypeIdentifierConstructor.fromPathExtension'>fromPathExtension</a>(pathExtension: `String`, isDirectory: `Boolean`)</code> → [`TypeIdentifier`](#TypeIdentifier)
 Return a `TypeIdentifier` that matches items that have the given path extension and are (or are not) directories.
<br/><br/>


## Class Properties

### <code>var <a name='TypeIdentifierConstructor.URL'>URL</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The URL type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.binaryPropertyList'>binaryPropertyList</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The binary property list type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.csv'>csv</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The comma-separated text type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.get_editableTypes'>editableTypes</code></a> → `Array` of [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The list of `TypeIdentifier`s that can be read and written natively by documents in this application.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.gif'>gif</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The GIF image type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.image'>image</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 A generic type that all image types conform to.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.jpeg'>jpeg</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The JPEG image type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.json'>json</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The JSON type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.ofocus'>ofocus</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The OmniFocus document file type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.pdf'>pdf</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The PDF type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.plainText'>plainText</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The plain text type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.png'>png</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The PNG image type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.propertyList'>propertyList</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The generic property list type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.get_readableTypes'>readableTypes</code></a> → `Array` of [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The list of `TypeIdentifier`s that can be read by documents in this this application.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.rtf'>rtf</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The RTF type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.rtfd'>rtfd</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The RTFD type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.taskPaper'>taskPaper</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The TaskPaper-formatted tasks pasteboard type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.tasks'>tasks</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The pasteboard type identifier for OmniFocus tasks and projects.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.tasksAndFolders'>tasksAndFolders</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The pasteboard type identifier for OmniFocus tasks, projects, and folders.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.tiff'>tiff</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The TIFF image type.
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.get_writableTypes'>writableTypes</code></a> → `Array` of [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The list of `TypeIdentifier`s that can be written by documents in this application (though some documents may be exportable only in a subset of these types).
<br/><br/>


### <code>var <a name='TypeIdentifierConstructor.xmlPropertyList'>xmlPropertyList</code></a> → [`TypeIdentifier`](#TypeIdentifier) *read-only*
 The XML property list type.
<br/><br/>


## Constructors

### <code>new <a name='TypeIdentifierConstructor.constructInstance'>TypeIdentifier</a>(identifier: `String`)</code> → [`TypeIdentifier`](#TypeIdentifier)
 Returns a new `TypeIdentifier` with the given identifier.
<br/><br/>


## Instance Functions

### <code>function <a name='TypeIdentifier.conformsTo'>conformsTo</a>(other: [`TypeIdentifier`](#TypeIdentifier))</code> → `Boolean`
 Returns `true` if the instance is the same as the given argument or a more specific type. For example, `TypeIdentifier.png.conformsTo(TypeIdentifier.image)` will be `true`, but `TypeIdentifier.png.conformsTo(TypeIdentifier.plainText)` will be `false`.
<br/><br/>


## Instance Properties

### <code>var <a name='TypeIdentifier.displayName'>displayName</code></a> → `String` *read-only*
 Returns a human-readable description of the type.
<br/><br/>


### <code>var <a name='TypeIdentifier.identifier'>identifier</code></a> → `String` *read-only*
 Returns a unique string for a type identifier, suitable for archiving or encoding in scripts.
<br/><br/>


### <code>var <a name='TypeIdentifier.pathExtensions'>pathExtensions</code></a> → `Array` of `String` *read-only*
 The list of filesystem path extensions used by this type.
<br/><br/>


# <a name='URL'><code>URL</code></a>



## Class Functions

### <code>function <a name='URLConstructor.choose'>choose</a>(types: `Array` of `String`)</code> → [`URL`](#URL) or `null`
 Deprecated: Please use `FilePicker` instead.

 Allows the user to choose a file `URL` if possible and returns a new instance, or `null` otherwise.
<br/><br/>


### <code>function <a name='URLConstructor.chooseFolder'>chooseFolder</a>()</code> → [`URL`](#URL) or `null`
 Deprecated: Please use `FilePicker` instead.

 Allows the user to choose a folder `URL` if possible and returns a new instance, or `null` otherwise.
<br/><br/>


### <code>function <a name='URLConstructor.fromString'>fromString</a>(string: `String`, relativeToURL: [`URL`](#URL) or `null`)</code> → [`URL`](#URL) or `null`
 Parses the string as a `URL` if possible and returns a new instance, or `null` if the string is not a valid URL. If `baseURL` is not `null`, the result is a relative URL.
<br/><br/>


### <code>function <a name='URLConstructor.fromPath'>fromPath</a>(path: `String`, isDirectory: `Boolean`, relativeToURL: [`URL`](#URL) or `null`)</code> → [`URL`](#URL)
 Returns a new `file` URL with the given path and assumption of whether it is a directory.
<br/><br/>


### <code>function <a name='URLConstructor.tellScript'>tellScript</a>(app: `String`, js: `String`, arg: [`Object`](#Object) or `null`)</code> → [`URL`](#URL) or `null`
 Creates a `URL` to invoke the given JS on the given app (url scheme) appropriate for use with the call function.
<br/><br/>


### <code>function <a name='URLConstructor.tellFunction'>tellFunction</a>(app: `String`, jsFunction: [`Function`](#Function), arg: [`Object`](#Object) or `null`)</code> → [`URL`](#URL) or `null`
 Creates a `URL` to invoke the given JS function on the given app (url scheme) appropriate for use with the call function.
<br/><br/>


## Class Properties

### <code>var <a name='URLConstructor.currentAppScheme'>currentAppScheme</code></a> → `String` *read-only*
 Returns the URL scheme for the current app.
<br/><br/>


### <code>var <a name='URLConstructor.get_documentsDirectory'>documentsDirectory</code></a> → [`URL`](#URL) *read-only*
 Returns the application's Documents directory. This is in the application's sandbox, and on the Mac is <b>not</b> the user's Documents directory. This is accessible by the application without using `access()`.
<br/><br/>


## Instance Functions

### <code>function <a name='URLWrapper.fetch'>fetch</a>(success: [`Function`](#Function)`(`&zwj;contents: [`Data`](#Data)&zwj;`)`, failure: [`Function`](#Function)`(`&zwj;error: [`Error`](#Error)&zwj;`)` or `null`)</code>
 Get the contents at the destination of this URL.
<br/><br/>


### <code>function <a name='URLWrapper.call'>call</a>(success: [`Function`](#Function), failure: [`Function`](#Function) or `null`)</code>
 Invoke an [x-callback-url API](http://x-callback-url.com) end-point, with the callback functions being invoked when a reply is received. When a reply is received, the parameters of that URL are decoded as JSON, or left as String values if not valid JSON, and stored as properties of a result object. For a successful reply, if the result object has one property, its value is passed as the first argument to the success function. If there are zero or more than one parameters, the full object is passed as the first argument. In both cases, the success function is passed a second argument that is the full object of parameters. The failure callback is always passed the object will all the result parameters, typically `errorCode` and `errorMessage`.
<br/><br/>


### <code>function <a name='URLWrapper.open'>open</a>()</code>
 Ask the system to open this URL.
<br/><br/>


### <code>function <a name='URLWrapper.find'>find</a>(types: `Array` of [`TypeIdentifier`](#TypeIdentifier), recurse: `Boolean` or `null`)</code> → [`Promise`](#Promise) of `Array` of [`URL`](#URL)
 Scan a directory `URL` for files of the given types. If `recurse` is specified and is false, only the immediate contents of the directory will be considered. If `recurse` is not specified or is `true`, the full directory tree will be scanned.
<br/><br/>


### <code>function <a name='URLWrapper.toString'>toString</a>()</code> → `String`


### <code>function <a name='URLWrapper.appendingPathComponent'>appendingPathComponent</a>(component: `String`)</code> → [`URL`](#URL)
 Return a new `URL` with the given string added at the end of the path.
<br/><br/>


### <code>function <a name='URLWrapper.appendingPathExtension'>appendingPathExtension</a>(pathExtension: `String`)</code> → [`URL`](#URL)
 Returns a new `URL` with the last path component having the given path extension added, including a separating "."
<br/><br/>


### <code>function <a name='URLWrapper.deletingPathExtension'>deletingPathExtension</a>()</code> → [`URL`](#URL)
 Returns a new `URL` with the path extension (if any) of the last path component removed.
<br/><br/>


### <code>function <a name='URLWrapper.deletingLastPathComponent'>deletingLastPathComponent</a>()</code> → [`URL`](#URL)
 Returns a new `URL` with the last path component removed.
<br/><br/>


## Instance Properties

### <code>var <a name='URLWrapper.absoluteString'>absoluteString</code></a> → `String` *read-only*
 Returns the absolute string for the `URL`.
<br/><br/>


### <code>var <a name='URLWrapper.absoluteURL'>absoluteURL</code></a> → [`URL`](#URL) *read-only*
 Returns the absolute `URL`.
<br/><br/>


### <code>var <a name='URLWrapper.baseURL'>baseURL</code></a> → [`URL`](#URL) or `null` *read-only*
 Returns the base `URL` if this `URL` is relative, or `null` if it is absolute.
<br/><br/>


### <code>var <a name='URLWrapper.fragment'>fragment</code></a> → `String` or `null` *read-only*
 Returns the fragment component of the `URL`, or `null`.
<br/><br/>


### <code>var <a name='URLWrapper.hasDirectoryPath'>hasDirectoryPath</code></a> → `Boolean` *read-only*
 Returns `true` if the `URL`'s path represents a directory.
<br/><br/>


### <code>var <a name='URLWrapper.host'>host</code></a> → `String` or `null` *read-only*
 Returns the host component of the `URL` or `null`.
<br/><br/>


### <code>var <a name='URLWrapper.isFileURL'>isFileURL</code></a> → `Boolean` *read-only*
 Returns `true` if the scheme is `file:`.
<br/><br/>


### <code>var <a name='URLWrapper.lastPathComponent'>lastPathComponent</code></a> → `String` *read-only*
 Returns the last component of the `URL`'s path or an empty string.
<br/><br/>


### <code>var <a name='URLWrapper.password'>password</code></a> → `String` or `null` *read-only*
 Returns the password component of the `URL` or `null`.
<br/><br/>


### <code>var <a name='URLWrapper.path'>path</code></a> → `String` or `null` *read-only*
 Returns the path component of the `URL` or `null`.
<br/><br/>


### <code>var <a name='URLWrapper.pathComponents'>pathComponents</code></a> → `Array` of `String` *read-only*
 Returns the path of the `URL` as an array of components.
<br/><br/>


### <code>var <a name='URLWrapper.pathExtension'>pathExtension</code></a> → `String` *read-only*
 Returns the path extension of the last path component of the `URL` or the empty string.
<br/><br/>


### <code>var <a name='URLWrapper.port'>port</code></a> → `Number` or `null` *read-only*
 Returns the port component of the `URL` or `null`.
<br/><br/>


### <code>var <a name='URLWrapper.query'>query</code></a> → `String` or `null` *read-only*
 Returns the query component of the `URL` or `null`.
<br/><br/>


### <code>var <a name='URLWrapper.relativePath'>relativePath</code></a> → `String` or `null` *read-only*
 Returns the relative path of the URL, or the absolute path if this `URL` is not relative
<br/><br/>


### <code>var <a name='URLWrapper.relativeString'>relativeString</code></a> → `String` *read-only*
 Returns the relative portion of the `URL` if it is relative, otherwise this returns the absolute string.
<br/><br/>


### <code>var <a name='URLWrapper.scheme'>scheme</code></a> → `String` or `null` *read-only*
 Returns the scheme of the `URL`.
<br/><br/>


### <code>var <a name='URLWrapper.string'>string</code></a> → `String` *read-only*
 String absoluteString representation of this URL.
<br/><br/>


### <code>var <a name='URLWrapper.user'>user</code></a> → `String` or `null` *read-only*
 Returns the user component of the `URL` or `null`.
<br/><br/>


# <a name='URL.Access'><code>URL.Access</code></a>

 A `URL.Access` holds the temporary access given by the `URL.Bookmark.access()` function. These should not be stored longer than needed.
<br/><br/>


## Instance Properties

### <code>var <a name='URLAccess.url'>url</code></a> → [`URL`](#URL) *read-only*
 The `URL` being accessed.
<br/><br/>


# <a name='URL.Bookmark'><code>URL.Bookmark</code></a>

 A `URL.Bookmark` records the permission to access a given `URL` and will restore that permission, as well as a possibly renamed file, at a later point.
<br/><br/>


## Class Functions

### <code>function <a name='URLBookmarkConstructor.fromURL'>fromURL</a>(url: [`URL`](#URL))</code> → [`URL.Bookmark`](#URL.Bookmark)
 Creates a `URL.Bookmark` from an existing `URL`, which should have been returned by `FilePicker`. This can then be stored in a `Credentials` object to persistently record the permission to access this `URL`.
<br/><br/>


## Instance Functions

### <code>function <a name='URLBookmark.access'>access</a>()</code> → [`Promise`](#Promise) of [`URL.Access`](#URL.Access)
 Attempts to resolve the instance into a `URL` and grant access to it through the returned `Promise`. Access to the `URL` will only last as long as the `URL.Access` object exists (which should not be stored longer than necessary).
<br/><br/>


# <a name='URL.Components'><code>URL.Components</code></a>

 `URL.Components` allows for correct generation and interpreation of `URL` instances, dealing with the specific different quoting rules for each specific part of the `URL`.
<br/><br/>


## Class Functions

### <code>function <a name='URLComponentsConstructor.fromString'>fromString</a>(string: `String`)</code> → [`URL.Components`](#URL.Components) or `null`
 Parses the string into `URL.Components`. If the string is not a valid URL, `null` is returned.
<br/><br/>


### <code>function <a name='URLComponentsConstructor.fromURL'>fromURL</a>(url: [`URL`](#URL), resolvingAgainstBaseURL: `Boolean`)</code> → [`URL.Components`](#URL.Components) or `null`
 Parses the string represenation of the `URL`. If the `URL`'s string is malformed, `null` is returned. If `resolve` is `true` and the given `url` is relative, its base URL's components are considered.
<br/><br/>


## Constructors

### <code>new <a name='URLComponentsConstructor.constructInstance'>URL.Components</a>()</code> → [`URL.Components`](#URL.Components)
 Returns a new `URL.Components`.
<br/><br/>


## Instance Functions

### <code>function <a name='URLComponentsWrapper.urlRelativeTo'>urlRelativeTo</a>(base: [`URL`](#URL) or `null`)</code> → [`URL`](#URL) or `null`
 Returns a `URL` relative to the base URL and the components or `null`.
<br/><br/>


## Instance Properties

### <code>var <a name='URLComponentsWrapper.fragment'>fragment</code></a> → `String` or `null`


### <code>var <a name='URLComponentsWrapper.host'>host</code></a> → `String` or `null`


### <code>var <a name='URLComponentsWrapper.password'>password</code></a> → `String` or `null`


### <code>var <a name='URLComponentsWrapper.path'>path</code></a> → `String`


### <code>var <a name='URLComponentsWrapper.port'>port</code></a> → `Number` or `null`


### <code>var <a name='URLComponentsWrapper.query'>query</code></a> → `String` or `null`


### <code>var <a name='URLComponentsWrapper.queryItems'>queryItems</code></a> → `Array` of [`URL.QueryItem`](#URL.QueryItem) or `null`
 The query of the `URL.Components` as individual components.
<br/><br/>


### <code>var <a name='URLComponentsWrapper.scheme'>scheme</code></a> → `String` or `null`


### <code>var <a name='URLComponentsWrapper.url'>url</code></a> → [`URL`](#URL) or `null` *read-only*
 Returns a `URL` for the components or `null`.
<br/><br/>


### <code>var <a name='URLComponentsWrapper.user'>user</code></a> → `String` or `null`


# <a name='URL.FetchRequest'><code>URL.FetchRequest</code></a>

 `URL.FetchRequest` represents a request for a URL resource, providing additional controls for the request (such as the HTTP method, headers, and cache controls) and uses a Promise-based API for actually performing the request and receiving a detailed response (which includes the HTTP status code and headers along with the body of the result—see `URL.FetchResponse` for more detail).
<br/><br/>


## Class Functions

### <code>function <a name='URLRequestConstructor.fromString'>fromString</a>(string: `String`)</code> → [`URL.FetchRequest`](#URL.FetchRequest) or `null`
 Parses the string as a `URL` if possible and returns a new instance, or `null` otherwise.
<br/><br/>


## Constructors

### <code>new <a name='URLRequestConstructor.constructInstance'>URL.FetchRequest</a>()</code> → [`URL.FetchRequest`](#URL.FetchRequest)
 Creates a new instance.
<br/><br/>


## Instance Functions

### <code>function <a name='URLFetchRequest.fetch'>fetch</a>()</code> → [`Promise`](#Promise) of [`URL.FetchResponse`](#URL.FetchResponse)
 Perform the request, returning a `Promise`. On success, the promise will resolve to a `URL.FetchResponse`.
<br/><br/>


## Instance Properties

### <code>var <a name='URLFetchRequest.allowsConstrainedNetworkAccess'>allowsConstrainedNetworkAccess</code></a> → `Boolean`
 Whether connections may use the network when the user has specified Low Data Mode.
<br/><br/>


### <code>var <a name='URLFetchRequest.allowsExpensiveNetworkAccess'>allowsExpensiveNetworkAccess</code></a> → `Boolean`
 Whether connections may use a network interface that the system considers expensive.
<br/><br/>


### <code>var <a name='URLFetchRequest.bodyData'>bodyData</code></a> → [`Data`](#Data) or `null`
 The body of the request, typically used in an HTTP `POST` or `PUT` request. This API is suitable for uploading binary data, or for text which needs to be encoded in a form other than UTF-8. If UTF-8 text is suitable, `bodyString` is likely to be a better choice.
<br/><br/>


### <code>var <a name='URLFetchRequest.bodyString'>bodyString</code></a> → `String` or `null`
 The body of the request, typically used in an HTTP `POST` or `PUT` request. The provided string will be transmitted using the UTF-8 encoding.
<br/><br/>


### <code>var <a name='URLFetchRequest.cache'>cache</code></a> → `String` or `null`
 The cache policy for the request: `default`, `no-store`, `reload`, `no-cache`, `force-cache`, or `only-if-cached`.
<br/><br/>


### <code>var <a name='URLFetchRequest.headers'>headers</code></a> → Object
 Custom HTTP headers to be sent with this request.
<br/><br/>


### <code>var <a name='URLFetchRequest.httpShouldHandleCookies'>httpShouldHandleCookies</code></a> → `Boolean`
 Whether to automatically handle cookies.
<br/><br/>


### <code>var <a name='URLFetchRequest.httpShouldUsePipelining'>httpShouldUsePipelining</code></a> → `Boolean`
 Whether to transmit data before receiving a response from an earlier request.
<br/><br/>


### <code>var <a name='URLFetchRequest.method'>method</code></a> → `String` or `null`
 The HTTP request method of the request: `GET`, `POST`, `PUT`, `DELETE`, etc.
<br/><br/>


### <code>var <a name='URLFetchRequest.url'>url</code></a> → [`URL`](#URL) or `null`
 The URL for this fetch request. Much of the additional functionality provided by the fetch request API will only work with `http` and `https` URLs. (For example, the `method` and `cache` and `headers` don't have any effect in the context of a `file` or `omnifocus` URL.)
<br/><br/>


# <a name='URL.FetchResponse'><code>URL.FetchResponse</code></a>

 `URL.FetchResponse` represents the response from fetching a URL resource, providing additional information about the response such as the HTTP status code and headers along with the actual data for that response. This is a read-only object returned by performing a `URL.FetchRequest`; see that class for more details on actually performing the request.
<br/><br/>


## Instance Properties

### <code>var <a name='URLFetchResponse.bodyData'>bodyData</code></a> → [`Data`](#Data) or `null` *read-only*
 Returns the raw HTTP body data from this response.
<br/><br/>


### <code>var <a name='URLFetchResponse.bodyString'>bodyString</code></a> → `String` or `null` *read-only*
 This is a convenience wrapper which interprets the `bodyData` of this response as UTF-8 text. (Note: the current implementation assumes the text is encoded using UTF-8, but ideally it would honor the text encoding as reported by `textEncodingName`.)
<br/><br/>


### <code>var <a name='URLFetchResponse.headers'>headers</code></a> → Object *read-only*
 Returns the HTTP header fields for this response.
<br/><br/>


### <code>var <a name='URLFetchResponse.mimeType'>mimeType</code></a> → `String` or `null` *read-only*
 Returns the HTTP MIME type for this response (e.g. `text/plain`, `application/json`, etc.).
<br/><br/>


### <code>var <a name='URLFetchResponse.statusCode'>statusCode</code></a> → `Number` *read-only*
 Returns the HTTP status code for this response (e.g. `200`, `404`, etc.).
<br/><br/>


### <code>var <a name='URLFetchResponse.textEncodingName'>textEncodingName</code></a> → `String` or `null` *read-only*
 Returns the reported text encoding for this response. This name will be the actual string reported by the origin source, or `null` if no encoding was specified.
<br/><br/>


### <code>var <a name='URLFetchResponse.url'>url</code></a> → [`URL`](#URL) or `null` *read-only*
 Returns the URL for this response.
<br/><br/>


# <a name='URL.QueryItem'><code>URL.QueryItem</code></a>



## Constructors

### <code>new <a name='URLQueryItemConstructor.constructInstance'>URL.QueryItem</a>(name: `String`, value: `String` or `null`)</code> → [`URL.QueryItem`](#URL.QueryItem)
 Returns a new `URL.QueryItem` with the given name and value.
<br/><br/>


## Instance Properties

### <code>var <a name='URLQueryItemWrapper.name'>name</code></a> → `String` *read-only*


### <code>var <a name='URLQueryItemWrapper.get_value'>value</code></a> → `String` or `null` *read-only*


# <a name='UnderlineAffinity'><code>UnderlineAffinity</code></a>



## Class Properties

### <code>var <a name='_UnderlineAffinity_GeneratedWrapperConstructor.ByWord'>ByWord</code></a> → [`UnderlineAffinity`](#UnderlineAffinity) *read-only*
 Underline only the words, but not the space between them.
<br/><br/>


### <code>var <a name='_UnderlineAffinity_GeneratedWrapperConstructor.None'>None</code></a> → [`UnderlineAffinity`](#UnderlineAffinity) *read-only*
 Underline the entire range.
<br/><br/>


### <code>var <a name='_UnderlineAffinity_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`UnderlineAffinity`](#UnderlineAffinity) *read-only*


# <a name='UnderlinePattern'><code>UnderlinePattern</code></a>



## Class Properties

### <code>var <a name='_UnderlinePattern_GeneratedWrapperConstructor.Dash'>Dash</code></a> → [`UnderlinePattern`](#UnderlinePattern) *read-only*
 Dashed line.
<br/><br/>


### <code>var <a name='_UnderlinePattern_GeneratedWrapperConstructor.DashDot'>DashDot</code></a> → [`UnderlinePattern`](#UnderlinePattern) *read-only*
 Alternating dashes and dots.
<br/><br/>


### <code>var <a name='_UnderlinePattern_GeneratedWrapperConstructor.DashDotDot'>DashDotDot</code></a> → [`UnderlinePattern`](#UnderlinePattern) *read-only*
 Alternating dashes and pairs of dots.
<br/><br/>


### <code>var <a name='_UnderlinePattern_GeneratedWrapperConstructor.Dot'>Dot</code></a> → [`UnderlinePattern`](#UnderlinePattern) *read-only*
 Dotted line.
<br/><br/>


### <code>var <a name='_UnderlinePattern_GeneratedWrapperConstructor.Solid'>Solid</code></a> → [`UnderlinePattern`](#UnderlinePattern) *read-only*
 A continuous line.
<br/><br/>


### <code>var <a name='_UnderlinePattern_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`UnderlinePattern`](#UnderlinePattern) *read-only*


# <a name='UnderlineStyle'><code>UnderlineStyle</code></a>



## Class Properties

### <code>var <a name='_UnderlineStyle_GeneratedWrapperConstructor.Double'>Double</code></a> → [`UnderlineStyle`](#UnderlineStyle) *read-only*
 Two lines.
<br/><br/>


### <code>var <a name='_UnderlineStyle_GeneratedWrapperConstructor.None'>None</code></a> → [`UnderlineStyle`](#UnderlineStyle) *read-only*
 No underline.
<br/><br/>


### <code>var <a name='_UnderlineStyle_GeneratedWrapperConstructor.Single'>Single</code></a> → [`UnderlineStyle`](#UnderlineStyle) *read-only*
 A single line.
<br/><br/>


### <code>var <a name='_UnderlineStyle_GeneratedWrapperConstructor.Thick'>Thick</code></a> → [`UnderlineStyle`](#UnderlineStyle) *read-only*
 A single thick line.
<br/><br/>


### <code>var <a name='_UnderlineStyle_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`UnderlineStyle`](#UnderlineStyle) *read-only*


# <a name='Version'><code>Version</code></a>



## Constructors

### <code>new <a name='VersionNumberConstructor.constructInstance'>Version</a>(versionString: `String`)</code> → [`Version`](#Version)
 Parses a string representation of a `Version` and returns an instance, or throws an error if the string isn't a valid version.
<br/><br/>


## Instance Functions

### <code>function <a name='OFVersionNumber.equals'>equals</a>(version: [`Version`](#Version))</code> → `Boolean`
 Returns true if the receiving `Version` is equal to the argument `Version`.
<br/><br/>


### <code>function <a name='OFVersionNumber.atLeast'>atLeast</a>(version: [`Version`](#Version))</code> → `Boolean`
 Returns true if the receiving `Version` is at the same as or newer than the argument `Version`.
<br/><br/>


### <code>function <a name='OFVersionNumber.isAfter'>isAfter</a>(version: [`Version`](#Version))</code> → `Boolean`
 Returns true if the receiving `Version` is strictly after the argument `Version`.
<br/><br/>


### <code>function <a name='OFVersionNumber.isBefore'>isBefore</a>(version: [`Version`](#Version))</code> → `Boolean`
 Returns true if the receiving `Version` is strictly before the argument `Version`.
<br/><br/>


## Instance Properties

### <code>var <a name='OFVersionNumber.versionString'>versionString</code></a> → `String` *read-only*
 Returns as an opaque string representation of the `Version`, suitable for display or logging. This should never be used in comparisons of any sort.
<br/><br/>


# <a name='Window'><code>Window</code></a>



## Instance Functions

### <code>function <a name='NSWindow.close'>close</a>()</code>


# <a name='DocumentWindow'><code>DocumentWindow</code></a> : [<code>Window</code>](#Window)



## Instance Functions

### <code>function <a name='DocumentWindow.selectObjects'>selectObjects</a>(objects: `Array` of [`DatabaseObject`](#DatabaseObject))</code>
 Clears the current selection and then selects the given objects in the content area, if present in the current perspective of this window.
<br/><br/>


### <code>function <a name='DocumentWindow.forecastDayForDate'>forecastDayForDate</a>(date: `Date`)</code> → [`ForecastDay`](#ForecastDay)
 Returns a `ForecastDay` object that encompasses `date`. This will throw an error if Forecast is not the current perspective in this window.
<br/><br/>


### <code>function <a name='DocumentWindow.selectForecastDays'>selectForecastDays</a>(days: `Array` of [`ForecastDay`](#ForecastDay))</code>
 Selects the days in the Forecast picker represented by `days`. This will throw an error if Forecast is not the current perspective in this window.
<br/><br/>


## Instance Properties

### <code>var <a name='DocumentWindow.content'>content</code></a> → [`ContentTree`](#ContentTree) or `null` *read-only*
 The tree of nodes representing the content area of the window.
<br/><br/>


### <code>var <a name='DocumentWindow.get_focus'>focus</code></a> → [`SectionArray`](#SectionArray) or `null`
 The Folders and Projects that the window is focusing on, limiting the sidebar to show only these items.
<br/><br/>


### <code>var <a name='DocumentWindow.inspectorVisible'>inspectorVisible</code></a> → `Boolean`
 Whether the inspector is currently visible in the window. On iOS, showing this pane may implicitly hide other panes and may be only transiently visible, depending on the available space.
<br/><br/>


### <code>var <a name='DocumentWindow.isCompact'>isCompact</code></a> → `Boolean` *read-only*
 Whether the window is in compact layout, where extra panes like the sidebar and inspector are shown atop the content instead of side-by-side.
<br/><br/>


### <code>var <a name='DocumentWindow.isTab'>isTab</code></a> → `Boolean` *read-only*
 Whether or not this window is a tab. This only returns true on macOS.
<br/><br/>


### <code>var <a name='DocumentWindow.get_perspective'>perspective</code></a> → [`Perspective.BuiltIn`](#Perspective.BuiltIn) or [`Perspective.Custom`](#Perspective.Custom) or `null`
 The currently selected perspective in this `Window`.
<br/><br/>


### <code>var <a name='DocumentWindow.selection'>selection</code></a> → [`Selection`](#Selection) *read-only*
 The current selection in the window.
<br/><br/>


### <code>var <a name='DocumentWindow.get_sidebar'>sidebar</code></a> → [`SidebarTree`](#SidebarTree) or `null` *read-only*
 The tree of nodes representing the sidebar of the window.
<br/><br/>


### <code>var <a name='DocumentWindow.sidebarVisible'>sidebarVisible</code></a> → `Boolean`
 Whether the sidebar is currently visible in the window. On iOS, showing this pane may implicitly hide other panes and may be only transiently visible, depending on the available space.
<br/><br/>


### <code>var <a name='DocumentWindow.tabGroupWindows'>tabGroupWindows</code></a> → `Array` of [`DocumentWindow`](#DocumentWindow) *read-only*
 The array of sibling `Window` objects that are in tabs alongside this `Window`. If `isTab` is false, then this will return an array that solely contains this `Window`.
<br/><br/>


### <code>var <a name='DocumentWindow.toolbarVisible'>toolbarVisible</code></a> → `Boolean`
 Whether the toolbar is currently visible in the window. This only returns false on macOS; the toolbar is always visible on iOS and visionOS.
<br/><br/>


# <a name='XML'><code>XML</code></a>



# <a name='XML.Document'><code>XML.Document</code></a>



## Class Functions

### <code>function <a name='XMLDocumentConstructor.fromData'>fromData</a>(data: [`Data`](#Data), whitespaceBehavior: [`XML.WhitespaceBehavior`](#XML.WhitespaceBehavior) or `null`)</code> → [`XML.Document`](#XML.Document)
 Parse the given data as an XML document.
<br/><br/>


## Constructors

### <code>new <a name='XMLDocumentConstructor.constructInstance'>XML.Document</a>(rootElement: `String` or [`XML.Element`](#XML.Element), configuration: [`XML.Document.Configuration`](#XML.Document.Configuration) or `null`)</code> → [`XML.Document`](#XML.Document)
 Returns a new `XML.Document` with the given root element and configuration.
<br/><br/>


## Instance Functions

### <code>function <a name='OFXMLDocument.xmlData'>xmlData</a>()</code> → [`Data`](#Data)
 Encodes the document as XML.
<br/><br/>


### <code>function <a name='OFXMLDocument.addElement'>addElement</a>(name: `String`, function: [`Function`](#Function)`(`&zwj;&zwj;`)` or `null`)</code>
 Appends a new element with the given name. If a function is passed, it is pushed it on the current element stack, the supplied function is called, and then the element is popped off the stack.
<br/><br/>


### <code>function <a name='OFXMLDocument.appendString'>appendString</a>(string: `String`)</code>
 Appends the given string as a child of `topElement`.
<br/><br/>


### <code>function <a name='OFXMLDocument.setAttribute'>setAttribute</a>(attribute: `String`, value: `String` or `null`)</code>
 Sets the specified attribute on `topElement`.
<br/><br/>


## Instance Properties

### <code>var <a name='OFXMLDocument.dtdPublicID'>dtdPublicID</code></a> → `String` or `null` *read-only*


### <code>var <a name='OFXMLDocument.dtdSystemID'>dtdSystemID</code></a> → [`URL`](#URL) or `null` *read-only*


### <code>var <a name='OFXMLDocument.rootElement'>rootElement</code></a> → [`XML.Element`](#XML.Element) *read-only*


### <code>var <a name='OFXMLDocument.schemaID'>schemaID</code></a> → [`URL`](#URL) or `null` *read-only*


### <code>var <a name='OFXMLDocument.schemaNamespace'>schemaNamespace</code></a> → `String` or `null` *read-only*


### <code>var <a name='OFXMLDocument.stringEncoding'>stringEncoding</code></a> → [`StringEncoding`](#StringEncoding) *read-only*


### <code>var <a name='OFXMLDocument.topElement'>topElement</code></a> → [`XML.Element`](#XML.Element) *read-only*
 Returns the element at the top of the current element stack. Intially this is the root element, but when `addElement()` is called, it is temporarily updated to the new element (possibly recursively).
<br/><br/>


### <code>var <a name='OFXMLDocument.whitespaceBehavior'>whitespaceBehavior</code></a> → [`XML.WhitespaceBehavior`](#XML.WhitespaceBehavior) *read-only*


# <a name='XML.Document.Configuration'><code>XML.Document.Configuration</code></a>



## Constructors

### <code>new <a name='XMLDocumentConfigurationConstructor.constructInstance'>XML.Document.Configuration</a>()</code> → [`XML.Document.Configuration`](#XML.Document.Configuration)
 Returns a new `XML.Document.Configuration` with default settings.
<br/><br/>


## Instance Properties

### <code>var <a name='XMLDocumentConfiguration.dtdPublicID'>dtdPublicID</code></a> → `String` or `null`


### <code>var <a name='XMLDocumentConfiguration.dtdSystemID'>dtdSystemID</code></a> → [`URL`](#URL) or `null`


### <code>var <a name='XMLDocumentConfiguration.schemaID'>schemaID</code></a> → [`URL`](#URL) or `null`


### <code>var <a name='XMLDocumentConfiguration.schemaNamespace'>schemaNamespace</code></a> → `String` or `null`


### <code>var <a name='XMLDocumentConfiguration.stringEncoding'>stringEncoding</code></a> → [`StringEncoding`](#StringEncoding)


### <code>var <a name='XMLDocumentConfiguration.whitespaceBehavior'>whitespaceBehavior</code></a> → [`XML.WhitespaceBehavior`](#XML.WhitespaceBehavior) or `null`


# <a name='XML.Element'><code>XML.Element</code></a>



## Constructors

### <code>new <a name='XMLElementContructor.constructInstance'>XML.Element</a>(name: `String`)</code> → [`XML.Element`](#XML.Element)
 Returns a new `XML.Element` with the given name.
<br/><br/>


## Instance Functions

### <code>function <a name='OFXMLElement.childAtIndex'>childAtIndex</a>(childIndex: `Number`)</code> → `String` or [`XML.Element`](#XML.Element) or `null`
 Returns the child at the given index, or nil if the index is past the last child.
<br/><br/>


### <code>function <a name='OFXMLElement.insertChild'>insertChild</a>(child: `String` or [`XML.Element`](#XML.Element), childIndex: `Number`)</code>
 Inserts the new child at the specified index. If the index is past the end of the current children, it is appended instead.
<br/><br/>


### <code>function <a name='OFXMLElement.appendChild'>appendChild</a>(child: `String` or [`XML.Element`](#XML.Element))</code>
 Adds the new item to the end of the children.
<br/><br/>


### <code>function <a name='OFXMLElement.removeChildAtIndex'>removeChildAtIndex</a>(childIndex: `Number`)</code>
 Removes the child at the given index. If the index is past the end of the current children, no removal occurs.
<br/><br/>


### <code>function <a name='OFXMLElement.removeAllChildren'>removeAllChildren</a>()</code>
 Removes any existing children.
<br/><br/>


### <code>function <a name='OFXMLElement.firstChildNamed'>firstChildNamed</a>(name: `String`)</code> → [`XML.Element`](#XML.Element) or `null`
 Returns the first child element with the given name, or `null` if there is no such child.
<br/><br/>


### <code>function <a name='OFXMLElement.firstChildAtPath'>firstChildAtPath</a>(path: `String`)</code> → [`XML.Element`](#XML.Element) or `null`
 Given a `path` which is a string separated by `"/"`, returns the first element at that path.
<br/><br/>


### <code>function <a name='OFXMLElement.firstChildWithAttribute'>firstChildWithAttribute</a>(attribute: `String`, value: `String`)</code> → [`XML.Element`](#XML.Element) or `null`
 Returns the first child with an attribute set to the given value.
<br/><br/>


### <code>function <a name='OFXMLElement.attributeNamed'>attributeNamed</a>(name: `String`)</code> → `String` or `null`
 Returns the value of the the given attribute or `null` if no value has been assigned.
<br/><br/>


### <code>function <a name='OFXMLElement.setAttribute'>setAttribute</a>(name: `String`, value: `String` or `null`)</code>
 Sets the value for the specified attribute. If the element already had a value for this attribute, it is replaced in place. If there previously was no value for this attribute, the attribute is appended to `attributeNames`. If the new value is `null`, the attribute is removed.
<br/><br/>


### <code>function <a name='OFXMLElement.apply'>apply</a>(function: [`Function`](#Function)`(`&zwj;node: `String` or [`XML.Element`](#XML.Element)&zwj;`)` → [`ApplyResult`](#ApplyResult) or `null`)</code> → [`ApplyResult`](#ApplyResult) or `null`
 Calls the supplied function for each child element or string in the receiver (including the receiver), passing that child as the single argument. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.
<br/><br/>


## Instance Properties

### <code>var <a name='OFXMLElement.attributeCount'>attributeCount</code></a> → `Number` *read-only*
 Returns the number of attributes assigned to this element.
<br/><br/>


### <code>var <a name='OFXMLElement.attributeNames'>attributeNames</code></a> → `Array` of `String` *read-only*
 Returns the names of the attributes in the order they were added to the element.
<br/><br/>


### <code>var <a name='OFXMLElement.children'>children</code></a> → `Array` of `String` or [`XML.Element`](#XML.Element)
 The current child strings and elements.
<br/><br/>


### <code>var <a name='OFXMLElement.childrenCount'>childrenCount</code></a> → `Number` *read-only*
 Returns the current count of child strings and elements.
<br/><br/>


### <code>var <a name='OFXMLElement.lastChild'>lastChild</code></a> → `String` or [`XML.Element`](#XML.Element) or `null` *read-only*
 Returns the last child of the element, or `null` if there are no children.
<br/><br/>


### <code>var <a name='OFXMLElement.name'>name</code></a> → `String` *read-only*
 Returns the name of the element.
<br/><br/>


### <code>var <a name='OFXMLElement.stringContents'>stringContents</code></a> → `String` *read-only*
 Gathers all the immediate and descendent string children and returns them concatenated them as single string.
<br/><br/>


# <a name='XML.WhitespaceBehavior'><code>XML.WhitespaceBehavior</code></a>



## Constructors

### <code>new <a name='XMLWhitespaceBehaviorConstructor.constructInstance'>XML.WhitespaceBehavior</a>(defaultBehavior: [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type))</code> → [`XML.WhitespaceBehavior`](#XML.WhitespaceBehavior)
 Returns a new `XML.WhitespaceBehavior` with the given default type.
<br/><br/>


## Instance Functions

### <code>function <a name='OFXMLWhitespaceBehavior.setBehaviorForElementName'>setBehaviorForElementName</a>(behavior: [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type), elementName: `String`)</code>


### <code>function <a name='OFXMLWhitespaceBehavior.behaviorForElementName'>behaviorForElementName</a>(elementName: `String`)</code> → [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type)


## Instance Properties

### <code>var <a name='OFXMLWhitespaceBehavior.defaultBehavior'>defaultBehavior</code></a> → [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type) *read-only*


# <a name='XML.WhitespaceBehavior.Type'><code>XML.WhitespaceBehavior.Type</code></a>



## Class Properties

### <code>var <a name='_XML_WhitespaceBehavior_Type_GeneratedWrapperConstructor.Auto'>Auto</code></a> → [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type) *read-only*
 Inherit the behavior from the enclosing element
<br/><br/>


### <code>var <a name='_XML_WhitespaceBehavior_Type_GeneratedWrapperConstructor.Ignore'>Ignore</code></a> → [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type) *read-only*
 Ignore whitespace
<br/><br/>


### <code>var <a name='_XML_WhitespaceBehavior_Type_GeneratedWrapperConstructor.Preserve'>Preserve</code></a> → [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type) *read-only*
 Preserve whitespace
<br/><br/>


### <code>var <a name='_XML_WhitespaceBehavior_Type_GeneratedWrapperConstructor.all'>all</code></a> → `Array` of [`XML.WhitespaceBehavior.Type`](#XML.WhitespaceBehavior.Type) *read-only*


