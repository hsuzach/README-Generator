// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


<img src='https://img.shields.io/badge/License-${data.license}.svg'>

##Description

${data.description}

##Table of Contents

<details open="open">
<summary>README Contents</summary>
<ul>
  <li><a href="#Usage">Usage</a></li>
  <li><a href="#Installation">Installation</a></li>
  <li><a href="#Tests">Tests</a></li>
  <li><a href="#Contributing">Contributing</a></li>
  <li><a href="#ContactInfo">Contact</a></li>

</ul>
</details>

<h3 id="Usage">Usage</h3>
${data.usage}

<h3 id="Installation">Installation</h3>


```
${data.installation}
```
<h3 id="Tests">Tests</h3>

```
${data.tests}
```
<h3 id="Contributing">Contributing</h3>
${data.contributing}

<h3 id="ContactInfo">Contact</h3>

If you have any questions, please reach out to me on GitHub at github.com/${data.github} or reach me by my email (${data.email}).




`;
}

module.exports = generateMarkdown;
