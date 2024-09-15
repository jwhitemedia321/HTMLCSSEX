import React from "react";

const HTML = () => {
  return (
    <div>
      <h1>Understanding HTML</h1>
      <h2>Definition</h2>
      <p>
        HTML is the "hyper text markup language" used across the internet to
        determine how to organize a website's information.
      </p>
      <p>
        {" "}
        It does this using a system of "elements", such as headings, paragraphs
        and more to organize information as well as display information such as
        images, videos, etc.
      </p>
      <p>
        It is important to conceptualize exactly what HTML is meant to be used
        for to understand how other programmers may use it. HTML is used across
        the internet on every web page.
      </p>
      <p>
        Click{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
          here
        </a>{" "}
        for a complete list of HTML elements.
      </p>
      <h2>Attributes</h2>
      <p>Each HTML element can be configured using attributes.</p>
      <p>
        An example of an attribute could be an elements size, color, width or
        source.
      </p>
      <h3>
        This is an 'h3' or heading 3 element. The 'Attributes' title is an 'h2'
        and the 'Understanding HTML' title is an 'h1'.
      </h3>
      <p>
        It is important to understand that headings are used to organize
        information in order of importance and not simply to size text.
      </p>
      <p style={{ color: "red" }}>This is a red paragraph. </p>
      <h2>Forms</h2>
      <p>
        HTML describes the structure of a page. It uses elements to show things
        like paragraphs, images and links.
      </p>
      <p>
        In many cases when creating a page, it may be necessary to take
        information from a user.
      </p>
      <p>
        In this case, HTML uses a form factor called 'forms' that usually
        contains 'labels' and 'inputs'.
      </p>
      <label htmlFor="genericInput" style={{ marginBottom: "10px" }}>
        Here is an example of a label.
      </label>{" "}
      <p>
        The label above this may look like the 'paragraphs' above, but it
        contains a 'for' attribute to describe which input it is intended for.
      </p>
      <input
        id="genericInput"
        type="text"
        defaultValue="This is an input..."
      ></input>
      <br></br>
      <button>
        This is a button, commonly used to submit text in an input.
      </button>
    </div>
  );
};

export default HTML;
