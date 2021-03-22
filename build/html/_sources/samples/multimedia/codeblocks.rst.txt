
.. _samples-multimedia-codeblocks-onthispage:


*****************************
Code Blocks
*****************************


`Sphinx <https://www.sphinx-doc.org>`_ is a tool that makes it easy to create intelligent and beautiful documentation, written 
by Georg Brandl and licensed under the BSD license.



.. raw:: html

    <div class="pdm-separator-blue"></div> 

.. raw:: html

    <div class="pdm-title">

        On This Page

    </div> 


| :ref:`samples-multimedia-codeblocks-section1`
| :ref:`samples-multimedia-codeblocks-section2`






.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _samples-multimedia-codeblocks-section1:

JavaScript
================================================================


.. code-block:: javascript
 

   // Setting Payload
   // Arrays - Category / SubCategory / Choice


   var catsOrder = [

      'Body',
      'HardTop',

      'Tires',           
      'Wheels',
      'Rotors',
      'Caliper',

      'Windshield',

      'Background',
      'Ground'

   ];



   $(document).ready(function () {


      var $newElem1 = $( "<a id='scrolltopButton'></a>" );
      $( "section" ).append( $newElem1 );


      var btn = $('#scrolltopButton');
      btn.addClass('show');
      // $('#main-wrapper').scroll(function() {

      //     if($('#main-wrapper').scrollTop() > 300) 
      //     { 
      //         btn.addClass('show');
      //     } else {
      //         btn.removeClass('show');
      //     }

      // });
      btn.on('click', function(e) {

         e.preventDefault();
         //$('html, body').animate({scrollTop:0}, '300');
         $('section').animate({scrollTop:0}, '300');
         
      });

      
   });



   const MyFunction = (v) => {

      console.log("Nature Boy");
   };


   function Gogo(v){

      console.log("Ric Flair");

   };







.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-separator"></div> 


.. _samples-multimedia-codeblocks-section2:

More Code Samples
================================================================




Sample Code Blocks
""""""""""""""""""""

code block 1:

.. code-block:: pycon

	>>> '000000' + hashlib.sha256('sawtooth'.encode()).hexdigest()[:16] + \
            hashlib.sha256('config'.encode()).hexdigest()[:16] + \
            hashlib.sha256('vote'.encode()).hexdigest()[:16] + \
            hashlib.sha256('proposals'.encode()).hexdigest()[:16]
        '000000a87cb5eafdcca6a8b79606fb3afea5bdab274474a6aa82c1c0cbf0fbcaf64c0b'



code block 2:

.. code-block:: protobuf
	:caption: File: sawtooth-core/families/settings/protos/settings.proto

	// Setting Payload
	// - Contains either a proposal or a vote.
	message SettingPayload {
	    // The action indicates data is contained within this payload
	    enum Action {
	        // A proposal action - data will be a SettingProposal
	        PROPOSE = 0;

	        // A vote action - data will be a SettingVote
	        VOTE = 1;
	    }
	    // The action of this payload
	    Action action = 1;

	    // The content of this payload
	    bytes data = 2;
	}

	// Setting Proposal
	//
	// This message proposes a change in a setting value.
	message SettingProposal {
	    // The setting key.  E.g. sawtooth.consensus.module
	    string setting = 1;

	    // The setting value. E.g. 'poet'
	    string value = 2;

	    // allow duplicate proposals with different hashes
	    // randomly created by the client
	    string nonce = 3;
	}

	// Setting Vote
	//
	// In ballot mode, a proposal must be voted on.  This message indicates an
	// acceptance or rejection of a proposal, where the proposal is identified
	// by its id.
	message SettingVote {
	    enum Vote {
	        ACCEPT = 0;
	        REJECT = 1;
	    }

	    // The id of the proposal, as found in the
	    // sawtooth.settings.vote.proposals setting field
	    string proposal_id = 1;

	    Vote vote = 2;
	}






Java
""""""""""""""""""""

code block java:

.. code-block:: java

   class CodeTest {
      
      public Node someFunction(Node root, int key) {

         System.out.println("Code Test Java..."); 

         int [] numbers = new int []{1,2,3,4};
         int result = 0;
         for(int number : numbers) {

            result *= number;
         }

         int ar[] = { 1, 2, 3, 4, 5, 6, 7, 8 }; 
         int i, x; 
   
          // iterating over an array 
         for (i = 0; i < ar.length; i++) { 
   
            // accessing each element of array 
            x = ar[i]; 
            System.out.print(x + " "); 
         } 

      }

   }








..
    ####################################################
    END ################################################
    ####################################################


.. raw:: html

    <div class="pdm-spacer"></div>
    <div class="pdm-spacer"></div>
    <div class="pdm-separator-blue"></div> 
    
| :ref:`samples-multimedia-codeblocks-onthispage`
| :ref:`toc-label`






.. Licensed under Creative Commons Attribution 4.0 International License
.. https://creativecommons.org/licenses/by/4.0/

