# Angular Meteor Universal without AOT

This project shows the usage of *Ionic* with *Angular* and *Meteor*.

It's a POC about running such a configuration with vanilla JS and no "@" annotations.

Creation
--

Clone the example from [Angular Meteor bare](https://github.com/Urigo/angular-meteor/tree/master/examples/MeteorCLI/bare): 

```bash
# Download the project template

svn export https://github.com/Urigo/angular-meteor/trunk/examples/MeteorCLI/bare
mv bare essai-a529m161-bare
cd essai-a529m161-bare

# Set up the project as a local git repository:

git init
git add --all
git commit -m 'Retrieve project template "bare" as it'

# Download the 'npm' dependencies

meteor npm install
```

Running
--

```bash
# Download the 'atmosphere' dependencies and run

meteor
```
