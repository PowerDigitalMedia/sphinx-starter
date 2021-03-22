# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))

#import sphinxawesome_theme
import sphinx_rtd_theme



# -- Project information -----------------------------------------------------

project = 'ImpelosDocs'
copyright = '2021, TM'
author = 'TM'

# The full version, including alpha/beta/rc tags
release = '0.0.1'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.

# extensions = [
#     ...
#     "sphinx_rtd_theme",
# ]

extensions = [

    #"sphinxawesome_theme",
    "sphinx_rtd_theme",
    #"sphinx.ext.autosectionlabel", # commented out to avoid duplicate label warning
    "sphinx.ext.intersphinx"


]
# autosectionlabel_prefix_document = True
# autosectionlabel_maxdepth = 5


# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []





# # Ensure Python 2 uses index over contents
# master_doc = 'index'



# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
#html_theme = 'alabaster'
#html_theme = 'classic'
# html_theme = 'sphinxdoc'
#html_theme = 'scrolls'
#html_theme = 'agogo'
#html_theme = 'traditional'
#html_theme = 'nature'
#html_theme = 'traditional'
#html_theme = 'nature'
#html_theme = 'haiku'
#html_theme = 'pyramid'
#html_theme = 'bizstyle'
html_theme = "sphinx_rtd_theme"
#html_theme = "sphinxawesome_theme"



html_theme_options = {
    'analytics_id': 'UA-XXXXXXX-1',  #  Provided by Google in your dashboard
    'analytics_anonymize_ip': False,
    'logo_only': True,
    'display_version': False,
    'prev_next_buttons_location': 'bottom',
    'style_external_links': False,
    'vcs_pageview_mode': '',
    'style_nav_header_background': '#181b21', ### default - #2980B9   SphinxAwesome bg-gray-900 #1a202c

    # Toc options
    'collapse_navigation': True,
    'sticky_navigation': True,
    'navigation_depth': 4,
    'includehidden': True,
    'titles_only': False
}


html_style = 'css/PowerDigitalMedia.css'




# Add logo to top of Sidebar
# html_logo = '_static/_images/logo-white.svg'
html_logo = '_static/_images/logo-blue.svg'


html_title = "ImpelosDocs"
html_short_title = "Impelos"



# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']



# To add custom css file - place it into "_static/custom.css"
html_css_files = [


    # READ THE DOCS CSS

    "custom.css"
    

    # SPHINX AWESOME CSS

    # "css/header.css",
    # "css/sidenav.css",
    # "css/main_section.css",
    # "css/bottom.css",
    # "css/scrolltop_button.css",

    # "css/code.css"
 
]

# To add custom css file - place it into "_static/custom.js"
html_js_files = [
    
    #"custom.js",
    # "js/window_resize.js",
    # "js/scrolltop_button.js",   
    "js/open_links_in_tab.js",


    # YOUTUBE
    "js/youtube/youtube_iframe_funx.js",
    "js/youtube/YT_ready.js"


]



