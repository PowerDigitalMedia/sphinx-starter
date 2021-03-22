.. _howto-awsvpc-onthispage:


*************************************************
Setting Up: AWS Virtual Private Cloud (VPC)
*************************************************

Information was pulled from a Quip document created by James.


.. raw:: html

    <div class="pdm-separator-blue"></div> 

.. raw:: html

    <div class="pdm-title">

        On This Page

    </div> 


| :ref:`howto-awsvpc-section1`
| :ref:`howto-awsvpc-section2`
| :ref:`howto-awsvpc-section3`
| :ref:`howto-awsvpc-section4`
| :ref:`howto-awsvpc-section5`
| :ref:`howto-awsvpc-section6`







.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _howto-awsvpc-section1:


OVERVIEW
========================================================================


| A virtual private cloud needs the following components:

* A VPC with a size /16 IPv4 CIDR block (example: 172.31.0.0/16). This provides up to 65,536 private IPv4 addresses.
* A size /20 default subnet in each Availability Zone. This provides up to 4,096 addresses per subnet, a few of which are reserved for our use.
* An internet gateway (https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html) to connect the internet to your default VPC. This includes a routing table.
* A default security group associated with your default VPC.
* A default network access control list (ACL) and associate it with your default VPC. (Optional)



.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _howto-awsvpc-section2:


CREATE A VPC
========================================================================


First we’ll create the VPC itself. In the VPC Service section of AWS, click “*Your VPCs*” then click the blue “*Create VPC*” button at the top. You’ll need a *Name* for your VPC first. Second, choose an IP for your *IPv4 CIDR block*. The first two numbers can technically be whatever you wish, leave the second two as zero, and end it with /16 to designate the last two numbers as variable.

Optionally, you can choose to create an *IPv6 CIDR block* as well, and it is recommended if you do to choose one provided by Amazon to save you trouble.

Lastly, you may choose between default or dedicated *tenancy*. Basically whether your VPC will be sharing resources with others in Amazon’s cloud. Dedicated obviously will dedicate resources to your VPC only, but may cost more. We chose Default.

It should look similar to this.



.. figure:: ../../_static/_images/JamesVPC/image.*
   :width: 100%
   :align: center
   :alt: Image




|
| Once you are satisfied with the configuration, create the VPC.





.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _howto-awsvpc-section3:


CREATE SUBNETS
========================================================================

Now you should create at least one subnet. Click on the “*Subnets*” section just below “Your VPCs”. You’ll need to select a *Name*, select the *VPC* you created, and select an *availability zone* for the subnet to reside in. 

It should look similar to below.


.. figure:: ../../_static/_images/JamesVPC/image(1).*
   :width: 100%
   :align: center
   :alt: Image



|
|
| Once those are selected, create a subnet using the first two numbers from your IPv4 CIDR block, (in our case it was 10.20). The third number will vary depending on the available ips and the fourth number will remain 0.  Give it /20 at the end to designate 4090 available IPs within the subnet. You can allocate more ips if you wish in more subnets. 

| It should look similar to below.

.. figure:: ../../_static/_images/JamesVPC/image(2).*
   :width: 100%
   :align: center
   :alt: Image




.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _howto-awsvpc-section4:


CREATE INTERNET GATEWAY
========================================================================


To allow external access, we need a gateway to connect to the internet. Click on the “*Internet Gateways*” section on the left and click the blue “*Create Internet Gateway*” button at the top of the section.

Simply give it a name and click Create. Once created, select the Internet Gateway you just created, then click on the “*Actions*” drop down menu next to the “*Create Internet Gateway*” button. Select “*Attach to VPC*”, select the VPC you created and click Attach.

You should now have a Gateway attached, but need to route traffic through it to the VPC.



.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _howto-awsvpc-section5:


EDIT ROUTE TABLE
========================================================================


You now should allow internet traffic through the gateway in the routing table. Click on the “*Route Tables*” section and you should see a route table created for your VPC. Select it and then at the bottom of the section where the details are displayed, select “*Routes*”, and then click the “*Edit Routes*” button. 

On the edit routes page, click “*Add Route*”, and enter a blank ip of 0.0.0.0/0 to represent all traffic. For the *Target*, select your internet gateway. It should be something like “igw-stringofnumbers”.

It should look similar to below.


.. figure:: ../../_static/_images/JamesVPC/image(3).*
   :width: 100%
   :align: center
   :alt: Image





.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _howto-awsvpc-section6:


CREATE SECURITY GROUP
========================================================================


A security group is basically a set of firewall rules to allow traffic in and out of your VPC and/or specific instances. It can be specifically related to a single instance, or applied to an entire VPC. For now, we’ll create a public access security group that allows internet traffic to access your servers.

Go to the “*Security Groups*” section and you’ll see a few default security groups. Click on the blue “*Create Security Group*” button at the top.

Give the group a *Name*, *Description*, and associate it with the VPC you created. Then click create. Once created, you should see it in the list. Select it and the details for the security group should show up on the bottom half of the page. Select the “*Inbound Rules*” tab, and click “*Edit Rules*”.

On the new edit rules page, you should be able to add new rules, select the protocol, port, and incoming source. You’ll want to add the following rules.

* An HTTP inbound rule for “nonsecure” internet traffic (port 80)
* An HTTPS inbound rule for “secure” internet traffic (port 443)
* SSH access to whitelist any remote admins for your instances.

It should look similar to below.


.. figure:: ../../_static/_images/JamesVPC/image(4).*
   :width: 100%
   :align: center
   :alt: Image





The only outbound rule for now should be all traffic from the VPC can be sent outward. If you wish to secure your servers even more later, you can add rules to specify which can send outward.

For now it should look like this.


.. figure:: ../../_static/_images/JamesVPC/image(4).*
   :width: 100%
   :align: center
   :alt: Image



Now you should have everything setup to be able to create an Instance on your VPC and access it through SSH.











..
    ####################################################
    END ################################################
    ####################################################


.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-spacer"></div>
    <div class="pdm-separator-blue"></div> 
    
| :ref:`howto-awsvpc-onthispage`
| :ref:`toc-label`


This is a test site made with the Sphinx documentation tool. This particular one is a modification
of the Sphinx Awesome Template. To view the specifics of the this template `Click Here <http://sphinxawesome.xyz>`_


