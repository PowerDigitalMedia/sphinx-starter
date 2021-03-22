.. _samples-layout-onthispage:


*****************************
Sample Layout
*****************************

.. 
    `Sphinx <https://www.sphinx-doc.org>`_ is a tool that makes it easy to create intelligent and beautiful documentation, written 
    by Georg Brandl and licensed under the BSD license.


This page represents a sample layout we could employ to highlight various information about Impelos' Product Offerings,
How To's and Code Samples. The overall system could be used to provide necessary information to existing or would be 
clients, associates and employees.



.. raw:: html

    <div class="pdm-separator-blue"></div> 

.. raw:: html

    <div class="pdm-title">

        On This Page

    </div> 


| :ref:`samples-layout-section1`
| :ref:`samples-layout-section2`








.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _samples-layout-section1:

Video Walkthrough
================================================================


.. raw:: html

    <div style="
    background-color:black;
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: 
    hidden; max-width: 
    100%; 
    height:auto;
    ">
        <iframe 
        id="youtube_iframe"
        src="http://www.youtube.com/embed/CQE1cBsJ_Gk?wmode=transparent&autoplay=1&enablejsapi=1&playerapiid=ytplayer&modestbranding=1&showinfo=0&rel=0" 
        width="100%"
        height="100%"
        type="text/html"
        frameborder="0" 
        allowfullscreen 
        mozallowfullscreen
        webkitallowfullscreen
        style="
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%;"
        >
        </iframe>
        
    </div>











.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _samples-layout-section2:

Step By Step
=========================================================


* This is just placeholder stuff for display purposes
* Start computer tap delete to get to BIOS
* Make disk drive the #1 boot priority
* exit
* If interupt screen SELECT Start Lubuntu
* Once your loaded up... System Tools > Install Lubuntu 20.04 LTS
* Once Installed - Enter The bios again make harddrive #1 boot priority
* exit




Installing AWS-CLI
--------------------------------------------------

..
   TM - This has been known to fail - is working as of 3-9-2021


snap version :

.. code-block:: console
 
    sudo snap install aws-cli --classic



standard version:

.. code-block:: console
 
    sudo apt install awscli
    





Installing AWS-SAM-CLI
-----------------------------------------------------


..
   TM - uses homebrew to install


Install Homebrew:

.. code-block:: console
 
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"



Next, add Homebrew to your PATH by running the following commands. 
These commands work on all major flavors of Linux by adding either ~/.profile 
on Debian and Ubuntu, or ~/.bash_profile on CentOS, Fedora, and RedHat.


.. code-block:: console
 
    test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
    test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
    test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
    echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile


You should see the following in the ~/.profile

eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)



Check Homebrew Version:

.. code-block:: console
 
    brew --version



Install AWS-SAM-CLI:

.. code-block:: console
 
    brew tap aws/tap
    brew install aws-sam-cli



Check SAM Version:

.. code-block:: console

    sam --version

    OUTPUT:
    SAM CLI, version 1.16.0







Creds and Config
--------------------------------------------------

..
   TM - Says comments go here





Where are configuration settings stored? 

~/.aws/credentials
~/.aws/config



Set and view configuration settings 




aws configure

Run this command to quickly set and view your credentials, region, and output format. The following example shows sample values.

.. code-block:: console
 
    $ aws configure
    AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
    AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
    Default region name [None]: us-west-2
    Default output format [None]: json




aws configure set

You can set any credentials or configuration settings using aws configure set. Specify the profile that you want to view or modify with the --profile setting.

For example, the following command sets the region in the profile named integ.


.. code-block:: console
 
    $ aws configure set region us-west-2 --profile integ




| `Read More Here <https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-where>`_ 











..
    ####################################################
    END ################################################
    ####################################################



.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-spacer"></div>
    <div class="pdm-separator-blue"></div> 
    
| :ref:`samples-layout-onthispage`
| :ref:`toc-label`


This is a test site made with the Sphinx documentation tool. This particular one is a modification
of the Sphinx Awesome Template. To view the specifics of the this template `Click Here <http://sphinxawesome.xyz>`_


