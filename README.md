# TriToggler
A JavaScript plugin that allows for toggle buttons with three states instead of just On/Off!


Dependencies:

For this plugin to work as expected, you need to install and include the following in your application:

1) jQuery & jQuery UI
2) Bootstrap's Glyphicon font files
3) Our plugins JavaScript and CSS files


To Install: 

After you've included all files in your application, simply create a container div with the class tricatch-parent, and inside of that div, add a hidden input with the class of triselect-hidden.
Here's an example of what it should look like if you're using a C# MVC app with HTML Helpers...

```
<div class="tricatch-parent">
	@Html.HiddenFor(o => o, new {@class=$"triselect-hidden {cssClass}", data_changetarget = target })
</div>
```


To use: 

There should be three options in this element for a user to click on. The default state represents unmarked, NULL, or N/A. The OFF (red) state represents the value of false, and the ON (green) state represents the value of true.
When in use, the plugin should look and feel like the examples below...

![capture](https://user-images.githubusercontent.com/20462076/34844403-59deb17e-f6df-11e7-87aa-d5a5aee386ac.PNG)

![capture1](https://user-images.githubusercontent.com/20462076/34844404-59f3232a-f6df-11e7-9c01-4ccb55a793eb.PNG)

![capture2](https://user-images.githubusercontent.com/20462076/34844405-5a040fc8-f6df-11e7-95ae-f4bf94a4f35f.PNG)
