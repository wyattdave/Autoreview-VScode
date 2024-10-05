function connectors(){
    return {
        "value": [
            {
                "name": "shared_10to8",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "10to8 Appointment Scheduling",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1652/1.0.1652.3394/10to8/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "10to8 is a powerful appointment management, communications & online booking system."
                }
            },
            {
                "name": "shared_1mecorporate",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "1Me Corporate",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/1mecorporate/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "1Me is the easiest and fastest way to share your contact information.\nWith 1Me, you can have an unlimited number of contact cards. You can choose which contact information to include on each card, and then choose who to share each card with.\nThis is best for separating your business and personal contact information"
                }
            },
            {
                "name": "shared_365training",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "365 Training",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/365training/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "365.Training offers practical on-demand training for makers of all skill levels. Our connector allows you to use our notifications in your apps and automation to stay up-to-date with our new releases."
                }
            },
            {
                "name": "shared_3eevents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "3E Events",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1647/1.0.1647.3361/3eevents/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Environment",
                            "description": "Select the name of the environment."
                        },
                        "values": [
                            {
                                "name": "liveus",
                                "uiDefinition": {
                                    "displayName": "Production - United States",
                                    "description": "Production - United States."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "6XQOabiLgggopOERqF1PGXYnY4buWpeO",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.us.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "liveuks",
                                "uiDefinition": {
                                    "displayName": "Production - United Kingdom",
                                    "description": "Production - United Kingdom."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "zlQnX8tKro2O9GB1OyLYaEIFjzZCoxwB",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.uk.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "livecac",
                                "uiDefinition": {
                                    "displayName": "Production - Canada",
                                    "description": "Production - Canada."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "AnMUh9bxGbkVY5xAGVySnkZ9auQZmKPu",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.ca.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "liveweu",
                                "uiDefinition": {
                                    "displayName": "Production - West Europe",
                                    "description": "Production - West Europe."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "bKxhPjn0Esh4xxvrUZCdvsuiV6U056pH",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.eu.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "liveanz",
                                "uiDefinition": {
                                    "displayName": "Production - Australia",
                                    "description": "Production - Australia."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "LdCbUztja3ylxGlmPYp4iT8ix1QT7POX",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.au.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "previewus",
                                "uiDefinition": {
                                    "displayName": "Preview - United States",
                                    "description": "Preview - United States."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "8SjBaGXfs62ztLNgJnC6Nw0bKdpDw6xy",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.us.preview.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "previewuk",
                                "uiDefinition": {
                                    "displayName": "Preview - United Kingdom",
                                    "description": "Preview - United Kingdom."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "7akLLQRGEPl9ChdFdvYWF2PY4dBgcYf3",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.uk.preview.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "previewca",
                                "uiDefinition": {
                                    "displayName": "Preview - Canada",
                                    "description": "Preview - Canada."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "We8uHUHHRPHWkWWBq7psQTEexy5vMi7Y",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.ca.preview.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "previeweu",
                                "uiDefinition": {
                                    "displayName": "Preview - West Europe",
                                    "description": "Preview - West Europe."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "yquLCed0hwNevCE4klR1wSaAveJKd8Cc",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.eu.preview.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "previewau",
                                "uiDefinition": {
                                    "displayName": "Preview - Australia",
                                    "description": "Preview - Australia."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "clientId": "ePfPaoakb6IDJDKXU0UkYYuKgC6GXyv3",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1,
                                                "hidden": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "default",
                                                        "value": "api.au.preview.3e.thomsonreuters.com"
                                                    }
                                                ]
                                            },
                                            "description": "Select default to continue.",
                                            "displayName": "Host",
                                            "tooltip": "Select default to continue."
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 3
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 4
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "nonprod",
                                "uiDefinition": {
                                    "displayName": "Development (For TR use only)",
                                    "description": "For non-production TR environments."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2generic",
                                            "scopes": [
                                                "offline_access",
                                                "https://api.thomsonreuters.com/auth/3e.ewh"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "ciamAuthority": {
                                                    "value": "https://auth-nonprod.thomsonreuters.com/"
                                                },
                                                "authorizationUrlTemplate": {
                                                    "value": "https://{customHost}/webhook/v1/authorize"
                                                },
                                                "authorizationUrlQueryStringTemplate": {
                                                    "value": "?response_type=code&client_id={clientId}&scope={scopes}&redirect_uri={redirectUrl}&tenantId={tenantId}&state={State}&usePam={usePam}"
                                                },
                                                "tokenUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "tokenBodyTemplate": {
                                                    "value": "code={code}&grant_type=authorization_code&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                },
                                                "refreshUrlTemplate": {
                                                    "value": "{ciamAuthority}oauth/token"
                                                },
                                                "refreshBodyTemplate": {
                                                    "value": "code={code}&grant_type=refresh_token&refresh_token={refreshToken}&redirect_uri={redirectUrl}&client_id={clientId}&client_secret={clientSecret}"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login",
                                            "description": "Sign in with your 3E credentials",
                                            "tooltip": "Provide 3E credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:customHost": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 1
                                            },
                                            "description": "The APIM host domain.",
                                            "displayName": "Host",
                                            "tooltip": "Enter host domain, e.g. api.us.dev.3e.thomsonreuters.com"
                                        }
                                    },
                                    "token:tenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 2
                                            },
                                            "description": "The Tenant ID of the 3E instance.",
                                            "displayName": "3E Tenant",
                                            "tooltip": "Enter the 3E Instance TRS ID."
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 3
                                            },
                                            "description": "Client Id",
                                            "displayName": "Client Id",
                                            "tooltip": "Enter Client Id"
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true",
                                                "tabIndex": 4
                                            },
                                            "description": "Client Secret.",
                                            "displayName": "Client Secret",
                                            "tooltip": "Enter CIAM Client Id"
                                        }
                                    },
                                    "token:notes": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "false",
                                                "tabIndex": 5
                                            },
                                            "description": "Notes for connection.",
                                            "displayName": "Notes",
                                            "tooltip": "Save your notes about this connection."
                                        }
                                    },
                                    "token:usePam": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "allowedValues": [
                                                    {
                                                        "text": "false",
                                                        "value": "false"
                                                    },
                                                    {
                                                        "text": "true",
                                                        "value": "true"
                                                    }
                                                ],
                                                "required": "false",
                                                "tabIndex": 6
                                            },
                                            "description": "Use to login with PAM user.",
                                            "displayName": "Use PAM User",
                                            "tooltip": "Select true to login with PAM user."
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "3E is a SaaS practice and financial management platform that connects all critical areas of a law firm to streamline tasks and provide timely information"
                }
            },
            {
                "name": "shared_aadinvitationmanager",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure AD Identity and Access",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/aadinvitationmanager/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A connector for Azure AD Identity and Access. This connector will contain multiple actions to manage Azure AD Identity and Access. An example of this is for instance inviting guest users. In the future, more actions will be added."
                }
            },
            {
                "name": "shared_abbreviationsip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Abbreviations",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/abbreviationsip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Abbreviations service from STANDS4 enables you to get classified acronyms and abbreviations content for a given term."
                }
            },
            {
                "name": "shared_absentify",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "absentify",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1649/1.0.1649.3368/absentify/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Integrate absentify into your existing systems with this connector. Use the absences of your employees in other systems."
                }
            },
            {
                "name": "shared_abstractemailvalidat",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Abstract Email Validator (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/abstractemailvalidat/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Improve your delivery rate and clean your email lists with Abstract's industry-leading email validation."
                }
            },
            {
                "name": "shared_abstractphonevalidat",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Abstract Phone Validator (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/abstractphonevalidat/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Abstract's Phone Number Validation and Verification is a fast, lightweight, modern solution for determining the validity and other details of phone numbers from over 190 countries."
                }
            },
            {
                "name": "shared_aci",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Container Instance",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/aci/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Easily run containers on Azure with a single command. Create container groups, get the logs of a container and more."
                }
            },
            {
                "name": "shared_acschat",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Communication Services Chat",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/acschat/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector to utilize Azure Communication Services Chat features."
                }
            },
            {
                "name": "shared_acsemail",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Communication Services Email",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/acsemail/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector to send Email using the domains linked to the Azure Communication Services in your subscription."
                }
            },
            {
                "name": "shared_acsidentity",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Communication Services Identity",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/acsidentity/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector to create and manage users and access tokens in an Azure Communication Services resource."
                }
            },
            {
                "name": "shared_acssmsevents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Communication Services SMS Events",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/acssmsevents/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "aadOauth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access ACS event resources."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "1d3a47ec-4b1e-41ee-b4e5-fde3355e9d69",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/acssmsevents",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://management.core.windows.net",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "tenantId": {
                                                    "value": "common"
                                                },
                                                "resourceUri": {
                                                    "value": "https://management.core.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login with your Azure Active Directory Credentials",
                                            "description": "Login with your Azure Active Directory Credentials",
                                            "tooltip": "Provide Azure Active Directory Credentials",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "aadOauthClientCredentials",
                                "uiDefinition": {
                                    "displayName": "Service principal (Azure AD application) Authentication",
                                    "description": "Use Azure Active Directory Authentication to access your Azure Communication Service resource."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/acssmsevents",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "https://management.core.windows.net",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "tenantId": {
                                                    "value": "common"
                                                },
                                                "resourceUri": {
                                                    "value": "https://management.core.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "grantType": {
                                                    "value": "client_credentials"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Sign in with your Azure Active Directory credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "metadata": {
                                            "sourceType": "AzureActiveDirectoryTenant"
                                        },
                                        "uiDefinition": {
                                            "displayName": "Tenant ID",
                                            "description": "Tenant ID of your Azure Active Directory application.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "description": "Client (or Application) ID of your Azure Active Directory application.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "description": "Client secret of your Azure Active Directory application.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector to receive SMS messages from the Azure Communication Services resources in your subscription."
                }
            },
            {
                "name": "shared_act",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Act!",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3444/act/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Act! helps individuals, small businesses, and sales teams organize prospect and customer details in one place."
                }
            },
            {
                "name": "shared_actsoft",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TeamWherx",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/actsoft/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TeamWherx(TW) is an all-in-one service management platform that helps you more effectively manage your remote teams of employees and general business operations away from the office. As a cloud-based solution, TW enables remote data collection and displays it via its web app dashboard, providing managers with the additional insight they need to create smarter strategies for increased efficiency, productivity, and reduced costs while coordinating their mobile workforces."
                }
            },
            {
                "name": "shared_acumatica",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Acumatica",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3444/acumatica/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Acumatica Cloud ERP Connector"
                }
            },
            {
                "name": "shared_adobeacrobatsignsand",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Adobe Acrobat Sign Sandbox",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/adobeacrobatsignsand/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Adobe is the most trusted digital document sign service in the world. With Adobe Acrobat Sign, you can transform manual processes into all-digital experiences. Incorporate Adobe Acrobat Sign functionality into your favorite applications to create, send and monitor the status of agreements."
                }
            },
            {
                "name": "shared_adobecreativecloud",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Adobe Creative Cloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/adobecreativecloud/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to Adobe Creative Cloud to manage your assets. You can perform various actions such as create, get, and delete assets on Creative Cloud. You can also choose to be notified when an asset is added or updated on Creative Cloud."
                }
            },
            {
                "name": "shared_adobeexperiencemanag",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Adobe Experience Manager",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/adobeexperiencemanag/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Adobe Experience Manager integration allows access to Adobe Experience Manager Forms related services(e.g. Communications and more). This integration will also allow flows to be triggered when a form is submitted through Adobe Experience Manager Forms."
                }
            },
            {
                "name": "shared_adobepdftools",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Adobe PDF Services",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/adobepdftools/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Select the Authentication type",
                            "description": "Select the type of Authentication"
                        },
                        "values": [
                            {
                                "name": "OauthSimplifiedCreds",
                                "uiDefinition": {
                                    "displayName": "Oauth Server-to-Server Credentials",
                                    "description": "Log in using your clientId and clientSecret."
                                },
                                "parameters": {
                                    "clientIdSPC": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Please enter the client Id",
                                            "displayName": "Client Id – Create new credentials by visiting https://www.adobe.com/go/getstarted_powerautomate"
                                        }
                                    },
                                    "clientSecretSPC": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Please enter the client Secret",
                                            "displayName": "Client Secret"
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "JWTServiceAcct",
                                "uiDefinition": {
                                    "displayName": "JWT Service Account Credentials [Deprecated]",
                                    "description": "Log in using your clientId, clientSecret, privateKey, accountId and orgId. [Deprecated]"
                                },
                                "parameters": {
                                    "clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Please enter the client Id. [Deprecated]",
                                            "displayName": "Client Id [Deprecated]"
                                        }
                                    },
                                    "clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Please enter the client secret. [Deprecated]",
                                            "displayName": "Client Secret [Deprecated]"
                                        }
                                    },
                                    "orgId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Please enter your registered organization Id. [Deprecated]",
                                            "displayName": "Organization Id [Deprecated]"
                                        }
                                    },
                                    "accountId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Please enter your registered technical account Id. [Deprecated]",
                                            "displayName": "Technical Account Id [Deprecated]"
                                        }
                                    },
                                    "privateKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Please enter the base64 encoded private key associated with your credentials. [Deprecated]",
                                            "displayName": "Base64 Encoded Private Key [Deprecated]"
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Adobe PDF Services API brings a set of powerful cloud-based APIs to integrate multi-step document workflows into any application. Use document generation to create custom PDF documents from Word templates and JSON data. Extract text, tables and images from PDFs in a structured JSON to enable downstream solutions. Convert to PDF, export PDF to other formats, apply OCR, compress, linearize or protect PDFs, and also edit PDFs with tools like merge or split. Auto-tag PDFs for better Accessibility."
                }
            },
            {
                "name": "shared_adobesign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Adobe Acrobat Sign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/adobesign/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Adobe is the most trusted digital document sign service in the world. With Adobe Acrobat Sign, you can transform manual processes into all-digital experiences. Incorporate Adobe Acrobat Sign functionality into your favorite applications to create, send and monitor the status of agreements."
                }
            },
            {
                "name": "shared_advanceddataoperatio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Advanced Data Operations",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/advanceddataoperatio/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A suite of advanced operations designed to assist in the transformation of bulk datasets."
                }
            },
            {
                "name": "shared_africastalkingairtime",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Africa's Talking Airtime",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/africastalkingairtime/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Provides actions to distribute airtime to your users instantly via Africa's Talking's Airtime service and to watch for status notifications regarding these airtime requests"
                }
            },
            {
                "name": "shared_africastalkingsms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Africa's Talking SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/africastalkingsms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Send and receive SMS from more than 300 million mobile subscribers across Africa."
                }
            },
            {
                "name": "shared_africastalkingvoice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Africa's Talking Voice",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/africastalkingvoice/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Offers an action to schedule outbound calls to recipients through Africa's Talking's Voice API. You can use this connector to instruct our Voice service to Say/Play a sequence of items in an outbound call."
                }
            },
            {
                "name": "shared_agilepointnx",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AgilePoint NX",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/agilepointnx/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "AgilePoint is a platform that opens up two-way communication to provide native support for flows within larger, more scalable cross-organizational automations. Now you can include important daily tasks performed within Microsoft ecosystem in the big picture processes housed in AgilePoint."
                }
            },
            {
                "name": "shared_agilite",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Agilite",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/agilite/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Agilit-e enables you to centralize your business logic and processes and expose them as microservices to new or existing applications. With the Agilit-e connector, you gain access to many services including Business Process Management (BPM), Roles, Keywords, Templates and more."
                }
            },
            {
                "name": "shared_ahead",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ahead",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ahead/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Ahead is the intelligent information hub that drives engagement and communication. "
                }
            },
            {
                "name": "shared_aheadintranet",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ahead (Intranet)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/aheadintranet/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Ahead is the intelligent information hub that drives engagement and communication. "
                }
            },
            {
                "name": "shared_aiforged",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AIForged",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/aiforged/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "AIForged is an Intelligent Document Processing solution to complex problems. AIForged can automate the processing and extraction of structured data from unstructured images. The connector provides integration and automation of intellegent document extraction with AIForged"
                }
            },
            {
                "name": "shared_aikidocs",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AikiDocs",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/aikidocs/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "AikiDocs for Office Documents enables document changes that would otherwise require human interaction. Merging, Manipulating, extracting content to and from office documents can be integrated into your solutions"
                }
            },
            {
                "name": "shared_airmeet",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Airmeet",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/airmeet/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Airmeet is the fastest growing platform for hosting a rich variety of virtual events. From Hackathons to ice-breakers, panel discussions to workshops, Airmeet's intuitive experience delivers on organisers expectations for a wide range of events and not just conferences."
                }
            },
            {
                "name": "shared_airslate",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "airSlate",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/airslate/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Automate your business workflows in Office 365, SharePoint, Microsoft Dynamics 365, Salesforce, NetSuite, and other services without coding. Configure no-code airSlate bots to transfer data between systems of record and data sources. Set conditions to route documents between multiple recipients, and automate reminders and notifications."
                }
            },
            {
                "name": "shared_alembaitsm",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Alemba ITSM",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/alembaitsm/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Alemba Service Manager enhances your service delivery by streamlining your IT and Enterprise Service Management Processes. Create, read and update all ASM records including Incidents, Requests, Knowledge Articles and CMDB Items."
                }
            },
            {
                "name": "shared_aletheia",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Aletheia",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/aletheia/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Aletheia is an online web service providing financial data through an easily accessible HTTP REST API. Access stock data, SEC filings, Insider Trades, earnings calls, and more."
                }
            },
            {
                "name": "shared_aliru",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ally",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/aliru/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Ally Connector allows your company to distribute news and information through our AI-based Converstional Agent called Ally. Use the full potential of AI to maximize your sales and achieve an organization-wide information distribution."
                }
            },
            {
                "name": "shared_alkymi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Alkymi",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/alkymi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Alkymi transforms enterprise workflows by placing machine learning and automation technology into the hands of business users, turning operational data headaches into a source of efficiency. Alkymi’s core products—Data Inbox and Patterns—allow businesses to extract, analyze, and take action on critical business data in emails and documents.The Alkymi connector allows you to easily access the data extracted from unstructured documents processed by the Alkymi app."
                }
            },
            {
                "name": "shared_allgeo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "allGeo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/allgeo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Automate scheduling or manually setup assignments, work orders, and employee shifts by importing via .csv files, Google Calendar, ERP, or third party scheduling systems."
                }
            },
            {
                "name": "shared_almabase",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Almabase",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/almabase/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Almabase is world's most loved alumni management software to build alumni-centric programs to increase participation, donor engagement, and host engaging online communities.\n"
                }
            },
            {
                "name": "shared_amazonredshift",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Amazon Redshift",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/amazonredshift/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service from Amazon. Connect to Amazon Redshift database to read data from tables."
                }
            },
            {
                "name": "shared_amazons3",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Amazon S3",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/amazons3/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Simple Storage Service (S3) is a data storage service provided by Amazon Web Services."
                }
            },
            {
                "name": "shared_amazonsqs",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Amazon SQS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/amazonsqs/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Simple Queue Service (SQS) is a queue service provided by Amazon Web Services."
                }
            },
            {
                "name": "shared_annatureip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Annature (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/annatureip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Annature is the leading Australian-owned eSigning solution with an integrated digital signature provider. This connector helps businesses to create envelopes and integrate annature document signing workflow using Annature API (v1)."
                }
            },
            {
                "name": "shared_appfigures",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Appfigures",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/appfigures/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Appfigures is a reporting platform for mobile app developers. It brings together all of your app store sales, ad data, worldwide reviews, and hourly rank updates based off of the available reports from your synced accounts."
                }
            },
            {
                "name": "shared_applicationinsights",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Application Insights",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/laborbol/partial-builds/ase-v3/1.0.1653.3402/applicationinsights/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Application Insights is an extensible analytics service that helps you understand the performance and usage of your live web application. Connect to your Application Insights resource to run and visualize various Analytics queries."
                }
            },
            {
                "name": "shared_apppowerforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "App Power Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3444/apppowerforms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use this connector from App Power to easily include external stakeholders in your business processes. The connector makes it very easy to create a form within the designer. You can start with a free trial license and acquire a production license at https://apppower.net."
                }
            },
            {
                "name": "shared_approvals",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Approvals",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1650/1.0.1650.3374/approvals/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Enables approvals in workflows."
                }
            },
            {
                "name": "shared_appsforops",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AppsForOps Timeline",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/appsforops/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "AppsForOps Timeline is a game changing Customer Success software platform and the connector allows you to create new timeline entries on AppsForOps Timelines."
                }
            },
            {
                "name": "shared_appstudioapi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloud Connect Studio",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/appstudioapi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector will be used to integrate with Fuji Xerox Cloud Connect Studio solution. This connector will be used as Trigger only and will be triggered once user perform a Scan from Cloud Connect Studio solution"
                }
            },
            {
                "name": "shared_apptigentpowertoolslite",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Apptigent PowerTools LITE",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/apptigentpowertoolslite/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Apptigent PowerTools LITE (Community Edition) is a FREE suite of essential utilities for enterprise workflow, forms and cloud applications. Manipulate text, modify collections, format dates and times, convert currency, perform advanced mathematical calculations, shorten URL's, encode strings, and more. PowerTools is the ultimate power user toolkit - FREE!"
                }
            },
            {
                "name": "shared_apptigentpowertoolspro",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Apptigent PowerTools",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/apptigentpowertoolspro/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Apptigent PowerTools Professional is a powerful suite of essential utilities for enterprise workflow, forms and cloud applications. Manipulate text, modify collections, format dates and times, convert currency, perform advanced mathematical calculations, shorten URL's, encode strings, convert text to speech, translate content into multiple languages, and more. PowerTools is the ultimate process automation toolkit for Microsoft Power Platform."
                }
            },
            {
                "name": "shared_aquaforest",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Aquaforest PDF",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1652/1.0.1652.3394/aquaforest/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Aquaforest PDF connector contains a group of actions that performs different PDF operations like splitting, text extraction, barcode extraction and OCR operations for Office 365 and Power Automate."
                }
            },
            {
                "name": "shared_arcgis",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ArcGIS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/arcgis/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ArcGIS connects your automated workflows to resources from your ArcGIS organization. Access geoenrichment, geocoding, and routing services to add demographics and location information to your data. You can also use ArcGIS to create feature layers and fetch data from existing feature layers in your ArcGIS organization."
                }
            },
            {
                "name": "shared_arcgisenterprise",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ArcGIS Enterprise",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/arcgisenterprise/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ArcGIS connects your automated workflows to resources from your ArcGIS organization. Access geoenrichment, geocoding, and routing services to add demographics and location information to your data. You can also use ArcGIS to create feature layers and fetch data from existing feature layers in your ArcGIS organization."
                }
            },
            {
                "name": "shared_arcgispaas",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ArcGIS PaaS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/arcgispaas/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ArcGIS PaaS connects your automated workflows to resources from your ArcGIS organization. Access geoenrichment, geocoding, and routing services to add demographics and location information to your data."
                }
            },
            {
                "name": "shared_arm",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Resource Manager",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/arm/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Resource Manager exposes the APIs to manage all of your Azure resources."
                }
            },
            {
                "name": "shared_asana",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Asana",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1660/1.0.1660.3465/asana/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Asana enables teams to manage their projects and tasks in one place."
                }
            },
            {
                "name": "shared_asite",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Asite",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/asite/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Transform how your teams work together with the Asite connector, the ultimate collaboration solution to build connections between business systems."
                }
            },
            {
                "name": "shared_asiteksa",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Asite (KSA)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/asiteksa/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Transform how your teams work together with the Asite (KSA) connector, the ultimate collaboration solution to build connections between business systems. This connector is for KSA region."
                }
            },
            {
                "name": "shared_asiteuae",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Asite (UAE)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/asiteuae/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Transform how your teams work together with the Asite (UAE) connector, the ultimate collaboration solution to build connections between business systems. This connector is for UAE region."
                }
            },
            {
                "name": "shared_asiteusgov",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Asite (US Gov.)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1641/1.0.1641.3326/asiteusgov/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Transform how your teams work together with the Asite connector, the ultimate collaboration solution to build connections between business systems."
                }
            },
            {
                "name": "shared_assentlyesign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Assently E-Sign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/assentlyesign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Assently E-Sign is a premium SaaS for e-signatures and smart contracts allowing full digitalization for your document workflows."
                }
            },
            {
                "name": "shared_assistantstudio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Sales Insights",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/assistantstudio/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dynamics 365 Sales Insights helps increase your sales with the help of AI-driven insights that promote personalized engagement and proactive decision making to help build relationships."
                }
            },
            {
                "name": "shared_autodeskforgedataexc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Autodesk Data Exchange",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3450/autodeskforgedataexc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Unleash your productivity and streamline collaboration by connecting design and make data between Revit and the tools of your choice."
                }
            },
            {
                "name": "shared_avepointcloudgovernance",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AvePoint Cloud Governance",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1651/1.0.1651.3382/avepointcloudgovernance/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Please make sure the user account used for authentication is a Cloud Governance application administrator."
                        },
                        "values": [
                            {
                                "name": "oauth",
                                "uiDefinition": {
                                    "displayName": "Azure Active Directory",
                                    "description": "Sign in with Azure Active Directory"
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "clientId": "1892da54-7f57-4b6a-b6b0-fdc7f44e04c9",
                                            "scopes": [
                                                "User.Read"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "1892da54-7f57-4b6a-b6b0-fdc7f44e04c9",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "resourceUri": {
                                                    "value": "1892da54-7f57-4b6a-b6b0-fdc7f44e04c9"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Username"
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "basic",
                                "uiDefinition": {
                                    "displayName": "Client Secret",
                                    "description": "Sign in with Secret Secret"
                                },
                                "parameters": {
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "description": "Enter your username. You must be an AvePoint Cloud Governance administrator.",
                                            "tooltip": "Username",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "clearText": true,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "description": "Enter the client secret to authenticate with AvePoint Cloud Governance API.",
                                            "tooltip": "Client Secret",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "clearText": false,
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Automate provisioning, management, and lifecycle for Teams, Groups, Communities, and Sites. Connect to AvePoint Cloud Governance to execute additional actions in Microsoft 365 such as creation of new content, add users, and update information in lists."
                }
            },
            {
                "name": "shared_aweber",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AWeber",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/aweber/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "AWeber is an email marketing platform that allows small businesses and entrepreneurs to create and send emails."
                }
            },
            {
                "name": "shared_axtensioncontentgate",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AXtension Content Gate",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/axtensioncontentgate/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Create a single point of truth for the content in your organization across Microsoft Dynamics 365 apps, by having all relevant content displayed in one overview, in one click."
                }
            },
            {
                "name": "shared_azuread",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Entra ID",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/azuread/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Entra ID is an Identity and Access Management cloud solution that extends your on-premises directories to the cloud and provides single sign-on to thousands of cloud (SaaS) apps and access to web apps you run on-premises."
                }
            },
            {
                "name": "shared_azureadapplications",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure AD App Registrations",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/azureadapplications/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Active Directory is an Identity and Access Management cloud solution that extends your on-premises directories to the cloud and provides single sign-on to thousands of cloud (SaaS) apps and access to web apps you run on-premises."
                }
            },
            {
                "name": "shared_azureadip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure AD Identity Protection",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/azureadip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Identity Protection is a tool that allows organizations to discover, investigate, and remediate identity-based risks in their environment."
                }
            },
            {
                "name": "shared_azureappservice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure App Service",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/azureappservice/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure App Service connector allows you to manage app services and server farms in your subscription."
                }
            },
            {
                "name": "shared_azureautomation",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Automation",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/azureautomation/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "oauthDefault",
                                "uiDefinition": {
                                    "displayName": "OAuth default",
                                    "description": "Login using default Azure Active Directory app."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "7ab7862c-4c57-491e-8a45-d52a7e023983",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azureautomation",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://management.core.windows.net/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "resourceUri": {
                                                    "value": "https://management.core.windows.net/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Login your Credentials",
                                            "tooltip": "Provide your Credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "oauthServicePrincipal",
                                "uiDefinition": {
                                    "displayName": "Service principal authentication",
                                    "description": "Use your own Azure Active Directory app for service principal authentication."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azureautomation",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "https://management.core.windows.net/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                },
                                                "resourceUri": {
                                                    "value": "https://management.core.windows.net/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Login your Credentials",
                                            "tooltip": "Provide your Credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "Client (or Application) ID of your AAD application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "Client secret of your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The tenant ID of for the Azure Active Directory application",
                                                "type": "string"
                                            },
                                            "displayName": "Tenant",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Automation provides tools to manage your cloud and on-premises infrastructure seamlessly."
                }
            },
            {
                "name": "shared_azureblob",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Blob Storage",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/azureblob/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "servicePrincipalAuth",
                                "uiDefinition": {
                                    "displayName": "Service principal authentication",
                                    "description": "Use your own Azure Active Directory app for service principal authentication."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azureblob",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "https://storage.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                },
                                                "resourceUri": {
                                                    "value": "https://storage.azure.com/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Login your Credentials",
                                            "tooltip": "Provide your Credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "Client (or Application) ID of your AAD application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "Client secret of your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The tenant ID of for the Azure Active Directory application",
                                                "type": "string"
                                            },
                                            "displayName": "Tenant",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Access Key",
                                    "description": "Provide Azure Storage account name (or blob endpoint) and Access Key to access your Azure Blob Storage."
                                },
                                "parameters": {
                                    "accountName": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Azure Storage account name or blob endpoint",
                                            "description": "Name or blob endpoint of the Azure Storage account the connector should use.",
                                            "tooltip": "Provide the Azure Storage account name or blob endopoint",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "accessKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Azure Storage Account Access Key",
                                            "description": "Specify a valid primary/secondary Azure Storage account access key.",
                                            "tooltip": "Specify a valid primary/secondary Azure Storage account access key.",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "false",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "authType": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "basic"
                                            },
                                            {
                                                "value": "anonymous"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Authentication Type",
                                            "description": "Authentication type to connect to your database",
                                            "tooltip": "Authentication type to connect to your database",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "required": "false",
                                                "hidden": "true",
                                                "allowedValues": [
                                                    {
                                                        "text": "Basic",
                                                        "value": "basic"
                                                    },
                                                    {
                                                        "text": "Anonymous",
                                                        "value": "anonymous"
                                                    }
                                                ],
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "gateway": {
                                        "type": "gatewaySetting",
                                        "gatewaySettings": {
                                            "dataSourceType": "azureblobs",
                                            "connectionDetails": [
                                                "AccountName"
                                            ]
                                        },
                                        "uiDefinition": {
                                            "constraints": {
                                                "tabIndex": 4,
                                                "required": "false",
                                                "hidden": "true",
                                                "capability": [
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "privacySetting": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "None"
                                            },
                                            {
                                                "value": "Private"
                                            },
                                            {
                                                "value": "Organizational"
                                            },
                                            {
                                                "value": "Public"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Privacy Setting",
                                            "description": "Privacy Setting",
                                            "tooltip": "Privacy Setting",
                                            "constraints": {
                                                "tabIndex": 5,
                                                "required": "false",
                                                "hidden": "true",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ],
                                                "allowedValues": [
                                                    {
                                                        "name": "None",
                                                        "value": "None"
                                                    },
                                                    {
                                                        "name": "Private",
                                                        "value": "Private"
                                                    },
                                                    {
                                                        "name": "Organizational",
                                                        "value": "Organizational"
                                                    },
                                                    {
                                                        "name": "Public",
                                                        "value": "Public"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Blob storage."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "283fc47b-8ce6-42be-a9ce-2fd5a0c42683",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azureblob",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://storage.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://storage.azure.com/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Provide your credentials",
                                            "description": "Create a connection using your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Azure Storage provides a massively scalable, durable, and highly available storage for data on the cloud, and serves as the data storage solution for modern applications. Connect to Blob Storage to perform various operations such as create, update, get and delete on blobs in your Azure Storage account."
                }
            },
            {
                "name": "shared_azurecommunicationservicessms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Communication Services SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/azurecommunicationservicessms/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "connectionStringAuthentication",
                                "uiDefinition": {
                                    "displayName": "ConnectionString Authentication",
                                    "description": "Use your connection string to access your Azure Communication Service resource."
                                },
                                "parameters": {
                                    "connectionString": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Connection String",
                                            "description": "Azure Communication Services Connection String",
                                            "tooltip": "Provide Your Connection String to Azure Communication Services",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "aadAuthentication",
                                "uiDefinition": {
                                    "displayName": "Service principal (Azure AD application) Authentication",
                                    "description": "Use Azure Active Directory Authentication to access your Azure Communication Service resource."
                                },
                                "parameters": {
                                    "oauth": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "https://communication.azure.com",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "resourceUri": {
                                                    "value": "https://communication.azure.com"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "grantType": {
                                                    "value": "client_credentials"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Sign in with your Azure Active Directory credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "oauth:TenantId": {
                                        "type": "string",
                                        "metadata": {
                                            "sourceType": "AzureActiveDirectoryTenant"
                                        },
                                        "uiDefinition": {
                                            "displayName": "Tenant ID",
                                            "description": "Tenant ID of your Azure Active Directory application.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "oauth:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "description": "Client (or Application) ID of your AAD application.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "oauth:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "description": "Client secret of your Azure Active Directory application.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "resourceEndpoint": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "ACS Endpoint URL",
                                            "description": "Your ACS resource endpoint URL.",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector to send SMS using the phone numbers from Azure Communication Services in your subscription"
                }
            },
            {
                "name": "shared_azuredatafactory",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Data Factory",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/azuredatafactory/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Data Factory is a hybrid data integration service that allows you to create, schedule and orchestrate your ETL/ELT workflows at scale wherever your data lives, in cloud or self-hosted network."
                }
            },
            {
                "name": "shared_azuredatalake",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Data Lake",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/azuredatalake/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Data Lake Store connector allows you to read and add data to an Azure Data Lake account."
                }
            },
            {
                "name": "shared_azuredigitaltwins",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Digital Twins",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/azuredigitaltwins/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Azure Digital Twins is an Internet of Things (IoT) platform that enables you to create a digital representation of real-world things, places, business processes, and people. This connector enables you to perform operations on digital twins and models as well as run ADT queries."
                }
            },
            {
                "name": "shared_azureeventgrid",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Event Grid",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/azureeventgrid/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Event Grid is an eventing backplane that enables event based programing with pub/sub semantics and reliable distribution & delivery for all services in Azure as well as third parties."
                }
            },
            {
                "name": "shared_azureeventgridpublish",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Event Grid Publish",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/azureeventgridpublish/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Event Grid Publish will publish data to any Azure Event Grid Custom Topic."
                }
            },
            {
                "name": "shared_azurefile",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure File Storage",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/azurefile/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Azure Storage provides a massively scalable, durable, and highly available storage for data on the cloud, and serves as the data storage solution for modern applications. Connect to File Storage to perform various operations such as create, update, get and delete on files in your Azure Storage account."
                }
            },
            {
                "name": "shared_azureiotcentral",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure IoT Central V3",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/azureiotcentral/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "1stparty",
                                "uiDefinition": {
                                    "displayName": "Credentials",
                                    "description": "Credentials"
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "77e2c0f9-fd94-40ef-a471-b0baad5de0aa",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azureiotcentral",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://apps.azureiotcentral.com",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                },
                                                "resourceUri": {
                                                    "value": "https://apps.azureiotcentral.com"
                                                },
                                                "enableOnbehalfOfLogin": {
                                                    "value": "false"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Token",
                                            "description": "Token for authentication.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "metadata": {
                                            "sourceType": "AzureActiveDirectoryTenant"
                                        },
                                        "uiDefinition": {
                                            "displayName": "Tenant",
                                            "description": "The tenant ID of for the Azure Active Directory application",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure IoT Central makes it easy to connect, monitor, and manage your IoT devices at scale. With the IoT Central V3 connector, you can trigger workflows when a rule has fired, and take actions by executing commands, updating properties, getting telemetry from devices, and more. Use this connector with your Azure IoT Central V3 application."
                }
            },
            {
                "name": "shared_azureloganalytics",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Log Analytics",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/laborbol/partial-builds/ase-v3/1.0.1653.3402/azureloganalytics/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to your Azure Log Analytics workspace to run and visualize various Analytics queries."
                }
            },
            {
                "name": "shared_azureloganalyticsdatacollector",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Log Analytics Data Collector",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1652/1.0.1652.3394/azureloganalyticsdatacollector/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Log Analytics Data Collector will send data to any Azure Log Analytics workspace."
                }
            },
            {
                "name": "shared_azuremonitorlogs",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Monitor Logs",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/corife/asev3/fasttrain/1.0.1674.3563/azuremonitorlogs/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "oauthDefault",
                                "uiDefinition": {
                                    "displayName": "OAuth default",
                                    "description": "Login using default Azure Active Directory app."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "7ab7862c-4c57-491e-8a45-d52a7e023983",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azuremonitorlogs",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://management.core.windows.net/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://management.core.windows.net/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "oauthServicePrincipal",
                                "uiDefinition": {
                                    "displayName": "Service principal authentication",
                                    "description": "Use your own Azure Active Directory app for service principal authentication."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azuremonitorlogs",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "https://management.core.windows.net/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                },
                                                "resourceUri": {
                                                    "value": "https://management.core.windows.net/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Login your Credentials",
                                            "tooltip": "Provide your Credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "Client (or Application) ID of your AAD application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "Client secret of your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The tenant ID of for the Azure Active Directory application",
                                                "type": "string"
                                            },
                                            "displayName": "Tenant",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use this connector to query your Azure Monitor Logs across Log Analytics workspace and Application Insights component, to list or visualize results."
                }
            },
            {
                "name": "shared_azuremysql",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Database for MySQL",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/azuremysql/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "mysqlAuthentication",
                                "uiDefinition": {
                                    "displayName": "Basic Authentication",
                                    "description": "Use a username and password to access your MySQL database."
                                },
                                "parameters": {
                                    "server": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Server",
                                            "description": "Specify the MySQL server.",
                                            "tooltip": "ServerName",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "database": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Database Name",
                                            "description": "Specify the MySQL database name.",
                                            "tooltip": "Database name",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "description": "Username credential",
                                            "tooltip": "Username credential",
                                            "constraints": {
                                                "tabIndex": 4,
                                                "clearText": true,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "description": "Password credential",
                                            "tooltip": "Password credential",
                                            "constraints": {
                                                "tabIndex": 5,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "encryptConnection": {
                                        "type": "bool",
                                        "uiDefinition": {
                                            "displayName": "Encrypt Connection",
                                            "description": "Encrypt Connection",
                                            "tooltip": "Encrypt Connection",
                                            "constraints": {
                                                "required": "false",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Database for MySQL Flexible Server provides a fully managed database service for app development and deployment with built-in capabilities, such as high availability, read replicas, custom maintenance and more. Use the connector to connect to Azure database for MySQL Flexible Server databases to read/write data and trigger workflows when your data changes."
                }
            },
            {
                "name": "shared_azurequeues",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Queues",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/azurequeues/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Access Key",
                                    "description": "Provide Azure Storage account name (or queue endpoint)and Access Key to access your Azure Queue storage."
                                },
                                "parameters": {
                                    "storageaccount": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Azure Storage account name or queue endpoint",
                                            "description": "Name or queue endpoint of the Azure Storage account the connector should use.",
                                            "tooltip": "Provide the Azure Storage account name",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "sharedkey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Azure Storage Account Access Key",
                                            "description": "Specify a valid primary/secondary storage account access key.",
                                            "tooltip": "Specify a valid primary/secondary storage account access key.",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "false",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Queue storage."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "283fc47b-8ce6-42be-a9ce-2fd5a0c42683",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azurequeues",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://storage.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://storage.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Queue storage provides cloud messaging between application components. Queue storage also supports managing asynchronous tasks and building process work flows."
                }
            },
            {
                "name": "shared_azurespeechpronuncia",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Speech Pronunciation Assessment",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1647/1.0.1647.3361/azurespeechpronuncia/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "ApiKey"
                                },
                                "parameters": {
                                    "apiKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "Speech service key",
                                            "tooltip": "Provide a Speech service key",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "region": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Region",
                                            "description": "Speech service region (Example: eastus)",
                                            "tooltip": "Speech service region. Learn more from Speech service regions",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your speech service."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "customSubdomain": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Custom Subdomain",
                                            "description": "Custom subdomain endpoint url (Example: contoso)",
                                            "tooltip": "Azure AD authentication always needs to be used together with custom domain name of your Azure resource. Regional endpoints do not support Azure AD authentication. Learn more from Authentication in Azure Cognitive Services",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Speech Pronunciation assessment evaluates speech pronunciation and gives speakers feedback on the accuracy and fluency of their speech. "
                }
            },
            {
                "name": "shared_azuretables",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Table Storage",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/azuretables/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Access Key",
                                    "description": "Provide Azure Storage account name (or table endpoint) and Access Key to access your Azure Table Storage."
                                },
                                "parameters": {
                                    "storageaccount": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Azure Storage account name or table endpoint",
                                            "description": "Name or table endpoint of your Azure Storage account",
                                            "tooltip": "Provide the name or table endopoint of the Azure Storage account used for tables as it appears in the Azure portal",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "sharedkey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Shared Storage Key",
                                            "description": "The shared storage key of your Azure Storage account",
                                            "tooltip": "Provide a shared storage key for the Azure Storage account used for tables as it appears in the Azure portal",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "privacySetting": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "None"
                                            },
                                            {
                                                "value": "Private"
                                            },
                                            {
                                                "value": "Organizational"
                                            },
                                            {
                                                "value": "Public"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Privacy Setting",
                                            "description": "Privacy Setting",
                                            "tooltip": "Privacy Setting",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ],
                                                "allowedValues": [
                                                    {
                                                        "name": "None",
                                                        "value": "None"
                                                    },
                                                    {
                                                        "name": "Private",
                                                        "value": "Private"
                                                    },
                                                    {
                                                        "name": "Organizational",
                                                        "value": "Organizational"
                                                    },
                                                    {
                                                        "name": "Public",
                                                        "value": "Public"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Table storage."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "283fc47b-8ce6-42be-a9ce-2fd5a0c42683",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azuretables",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://storage.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://storage.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "servicePrincipalAuth",
                                "uiDefinition": {
                                    "displayName": "Service principal authentication",
                                    "description": "Use your Azure Active Directory application for service principal authentication."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azuretables",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "https://storage.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                },
                                                "resourceUri": {
                                                    "value": "https://storage.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Provide your credentials",
                                            "description": "Enter your credentials to sign in.",
                                            "tooltip": "Sign in with your credentials.",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "The client or application ID for your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "The client secret for your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The tenant ID for the Azure Active Directory application.",
                                                "type": "string"
                                            },
                                            "displayName": "Tenant ID",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Table storage is a service that stores structured NoSQL data in the cloud, providing a key/attribute store with a schemaless design. Sign into your Storage account to create, update, and query tables and more."
                }
            },
            {
                "name": "shared_azuretexttospeech",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Text to speech",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/azuretexttospeech/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "ApiKey"
                                },
                                "parameters": {
                                    "apiKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "Speech service key",
                                            "tooltip": "Provide a Speech service key",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "region": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Region",
                                            "description": "Speech service region (Example: eastus)",
                                            "tooltip": "Speech service region. Learn more from Speech service regions",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your speech service."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/azuretexttospeech",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "resourceID": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Resource ID",
                                            "description": "The cognitive services resource id (Example: /subscriptions//resourceGroups//providers/Microsoft.CognitiveServices/accounts/)",
                                            "tooltip": "The cognitive cervices resource id",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "customSubdomain": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Custom Subdomain",
                                            "description": "Custom subdomain endpoint url (Example: contoso)",
                                            "tooltip": "Azure AD authentication always needs to be used together with custom domain name of your Azure resource. Regional endpoints do not support Azure AD authentication. Learn more from Authentication in Azure Cognitive Services",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Text-to-speech allows you to build apps and services that speak naturally with more than 400 voices across 140 languages and dialects."
                }
            },
            {
                "name": "shared_azurevm",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure VM",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/azurevm/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure VM connector allows you to manage virtual machines."
                }
            },
            {
                "name": "shared_basecamp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Basecamp 3",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1652/1.0.1652.3394/basecamp/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Basecamp 3 is a tool that helps teams work together. It provides a dashboard to manage all messaging, document collaboration, scheduling and task management together in one place."
                }
            },
            {
                "name": "shared_basecamp2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Basecamp 2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/basecamp2/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Basecamp 2 keeps people on the same page. No matter what your role is, everyone works toward a common goal: finishing a project together."
                }
            },
            {
                "name": "shared_benchmarkemail",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Benchmark Email",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3450/benchmarkemail/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Online email marketing solution to engage subscribers, target an audience, send beautiful, responsive emails and track results."
                }
            },
            {
                "name": "shared_bentley",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ProjectWise Design Integration",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bentley/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "ProjectWise Design Integration from Bentley Systems, Inc. is an information management and design collaboration system to accelerate infrastructure project delivery. Connect to Design Integration to store and modify documents in ProjectWise."
                }
            },
            {
                "name": "shared_bigcommerce",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "BigCommerce",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3444/bigcommerce/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "BigCommerce is a flexible, open SaaS platform. Connect to BigCommerce to retrieve orders, products, and related information."
                }
            },
            {
                "name": "shared_billspls",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "BillsPLS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/billspls/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "BillsPLS process the receipts/bills to extract only the useful details like vendor name, total, date, etc., categorize the bill into different categories like food, travel, etc. based on the line items in the receipts and detects the currency from the bill. Process millions of receipts submitted by your employees to the accounts payable department for reimbursement in matter of seconds and helps in generating reports and analyse the expenditure patterns at various levels."
                }
            },
            {
                "name": "shared_bingmaps",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Bing Maps",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/jayawan/releases/v1.0.1655/1.0.1655.3424/bingmaps/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Bing Maps"
                }
            },
            {
                "name": "shared_bingsearch",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Bing Search",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1652/1.0.1652.3394/bingsearch/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Cognitive Services Bing Search API allows you to search content across the web."
                }
            },
            {
                "name": "shared_bitbucket",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Bitbucket",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bitbucket/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Bitbucket is a web based hosting service for projects that use GIT revision control."
                }
            },
            {
                "name": "shared_bitly",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Bitly",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bitly/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Bitly is a link management tool. You can shorten links, reroute existing ones and associate them with campaigns across channels and devices."
                }
            },
            {
                "name": "shared_bitskout",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Bitskout",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/bitskout/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This Custom connector is used to run Bitskout plugins for a provided file or text"
                }
            },
            {
                "name": "shared_bitvorecellenus",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Bitvore Cellenus",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bitvorecellenus/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Bitvore Cellenus is a data analytics platform that uses advanced AI techniques to provide business insights on hundreds of thousands of public and private companies from diverse sets of unstructured data (including news, press releases, SEC filings/proxy statements, earnings call transcripts and more),both public and licensed. Continuously updated on a 24/7 basis, Bitvore Cellenus derives material events, trended sentiment, growth and risk scoring to drive better business outcomes for customers."
                }
            },
            {
                "name": "shared_biztalk",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "BizTalkServer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1567/1.0.1567.2748/biztalkserver/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "BizTalk messages"
                }
            },
            {
                "name": "shared_bizzy",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AtBot Logic",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bizzy/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "AtBot is a no-code bot building service that allows you to create conversational UIs quickly without any programming experience."
                }
            },
            {
                "name": "shared_bizzyadmin",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "AtBot Admin",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bizzyadmin/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "AtBot is a no-code bot building service that allows you to create conversational UIs quickly without any programming experience. The Admin connector provides programmatic access to the configuration portal."
                }
            },
            {
                "name": "shared_blackbaudchurchmanag",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Church Management",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudchurchmanag/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Church Management is designed to effectively manage your people, gifts, communications, events, small groups, ministries, and payments, all in one place."
                }
            },
            {
                "name": "shared_blackbaudconstituent",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Constituents",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudconstituent/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Constituents connector to manage constituent biographical details, contact information, and relationships."
                }
            },
            {
                "name": "shared_blackbauddocuments",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Documents",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbauddocuments/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Documents connector to create documentation locations used when storing physical attachments."
                }
            },
            {
                "name": "shared_blackbaudevents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Events",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudevents/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Events connector to manage events and participants."
                }
            },
            {
                "name": "shared_blackbaudfundraising",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Fundraising",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudfundraising/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Fundraising connector to manage campaigns, funds, appeals, and packages."
                }
            },
            {
                "name": "shared_blackbaudgifts",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Gifts",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudgifts/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Gifts connector to manage gifts."
                }
            },
            {
                "name": "shared_blackbaudinteraction",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Interactions",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudinteraction/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Interactions connector to manage constituent actions."
                }
            },
            {
                "name": "shared_blackbaudlists",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Lists",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudlists/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Lists connector to manage lists."
                }
            },
            {
                "name": "shared_blackbaudprospects",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT Prospects",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/blackbaudprospects/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community. Use the Prospects connector to manage prospects, opportunities, and ratings."
                }
            },
            {
                "name": "shared_blackbaudraisersedge",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud Raisers Edge NXT",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1479/1.0.1479.2452/blackbaudraisersedge/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Blackbaud Raiser's Edge NXT is a comprehensive cloud-based fundraising and donor management software solution built specifically for nonprofits and the entire social good community."
                }
            },
            {
                "name": "shared_blackbaudskyaddins",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blackbaud SKY Add-ins",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/blackbaudskyaddins/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use the SKY Add-ins connector to validate user identity tokens issued by the Blackbaud Host application."
                }
            },
            {
                "name": "shared_blockchaincorda",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Corda Blockchain",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/blockchaincorda/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Corda is a smart contract distributed ledger. With the Corda connector, you can perform actions such as submitting transactions and reading contract state."
                }
            },
            {
                "name": "shared_blockchainethereum",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ethereum Blockchain",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/blockchainethereum/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Ethereum is a smart contract blockchain. With the Ethereum Blockchain connector, you can perform actions such as submitting transactions, reading contract state, and trigger flows on contract updates."
                }
            },
            {
                "name": "shared_blogger",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Blogger",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/blogger/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Blogger is a blog publishing service. It allows you to create websites and post to them on an ongoing basis."
                }
            },
            {
                "name": "shared_blueink",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "BlueInk",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/blueink/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Blueink connector allows you to add Blueink's eSignature platform into automated workflows. The connector allows you to check bundle status, create new bundles, access signer information, and more."
                }
            },
            {
                "name": "shared_boomappconnect",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "boomapp connect",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/boomappconnect/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "'Intelligent' global 2-way, Email, Voice, SMS and Push Messaging. Supercharge any Power Platform applications with boomapp connect to build truly automated multi-channel conversational communications workflows (uniquely driven by subject). Fully interactive comms workflows based on a recipient’s response allows the delivery of seamless and frictionless interactions without forcing behavioural change through the engagement. For further detail and to set up a free trial account, see our website."
                }
            },
            {
                "name": "shared_box",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Box",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/box/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Box™ is a service that keeps your files safe, synced, and easy to share. Connect to Box to manage your files. You can perform various actions such as upload, update, get, and delete files in Box."
                }
            },
            {
                "name": "shared_bttn",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "bttn",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bttn/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "bttn - The simplest internet user interface in the world."
                }
            },
            {
                "name": "shared_bttnone",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Bttn ONE",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bttnone/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The magical bttn that automates your business, improves your customer experience, and so much more"
                }
            },
            {
                "name": "shared_buffer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Buffer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/buffer/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Buffer is a social media management for marketers and agencies. Access your pending and sent updates, social media profiles, and more."
                }
            },
            {
                "name": "shared_buildingminds",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "BuildingMinds DigitalTwin Core",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/buildingminds/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The BuildingMinds Core Platform provides REST APIs. With the BuildingMinds DigitalTwin Core API you can read and list the Digital Building Twin masterdata such as buildings, floors and spaces and their properties."
                }
            },
            {
                "name": "shared_bulksms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "BulkSMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/bulksms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SMS enable your workflows and automations with BulkSMS."
                }
            },
            {
                "name": "shared_businessassist",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Business Assist",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/businessassist/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Business Assist connector provides a set of services to automate common customer-success tasks. Customer service leaders, managers and agent personas can use it to reliably predict service-call volumes (to manage staffing levels), cluster customer feedback (to focus on the right investments) and generate self-help solutions for Microsoft 365 product issues. Reduce your organization’s helpdesk cost and provide great customer experience by adopting the same services that power Microsoft Support."
                }
            },
            {
                "name": "shared_byword",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Byword (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/byword/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Generate high quality, AI-written articles at scale. Trusted by over 30,000 marketers, Byword has written hundreds of thousands of articles, on every topic imaginable."
                }
            },
            {
                "name": "shared_calculateworkingday",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Calculate Working Day",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/calculateworkingday/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Calculate Working Day connector is a tool for developers to easily compute a valid working day, accommodating a range of requirements from basic to complex scenarios."
                }
            },
            {
                "name": "shared_calendarpro",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Calendar Pro",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/calendarpro/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Stress free with Calendar Pro for Microsoft Teams. Inside a channel, you can very easily organize teams, manage availability, schedule work and share events. This connector will allow you to manage existing events or create new ones."
                }
            },
            {
                "name": "shared_calendly",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Calendly (legacy)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/calendly/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Calendly helps you easily schedule meetings based on participants availability."
                }
            },
            {
                "name": "shared_calendlyv2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Calendly",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/calendlyv2/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Calendly's connector empowers you to automate scheduled events, boosting productivity and optimizing efficiency through automated workflows."
                }
            },
            {
                "name": "shared_campfire",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Campfire",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/campfire/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Campfire is an instant messaging tool used for communication and file sharing within teams."
                }
            },
            {
                "name": "shared_candidatezip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CandidateZip Resume/Job Parser",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/candidatezip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "CandidateZip is a Global Leader of Simplified Resume/Job Data Extraction into ATS/CRM for Recruiters. It is cloud-based resume/CV or Job Parser which converts resumes/CV and jobs to standard fields. This extract contact/location, experience, education, salary, skills, and other fields from resumes/CVs."
                }
            },
            {
                "name": "shared_capsulecrm",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Capsule CRM",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/capsulecrm/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Online CRM for individuals, small businesses and sales teams wanting a simple, effective and affordable solution."
                }
            },
            {
                "name": "shared_captisaforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Captisa Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/captisaforms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Captisa Forms allows you to build powerful online forms with workflows, conditional logic, duplicate detection rules, multi-level select, lookup, repeating panels, tabs, accordions. Create views and filters use them to analyze your data using charts or pivot grids, and then present them in dashboard."
                }
            },
            {
                "name": "shared_cardplatform",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CardPlatform Adaptive Cards",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cardplatform/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "CardPlatform allows you to send Adaptive Cards to users. Can be used for actional content, such as approvals, forms capture, and general messaging. It supports templating and custom cards."
                }
            },
            {
                "name": "shared_cardsforpowerapps",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cards for Power Apps",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/cardsforpowerapps/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "This connector is to create card instance and get the card description"
                }
            },
            {
                "name": "shared_cascade",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cascade",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cascade/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cascade is a cloud-based strategic planning and execution platform for teams to plan, execute, measure, and adapt their strategy all in one place. Connect your Cascade workspace to the rest of your tools to always have the most up-to-date and relevant data that pertains to your strategy."
                }
            },
            {
                "name": "shared_cascadestrategynew",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cascade Strategy New",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cascadestrategynew/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cascade is a cloud-based strategic planning and execution platform for teams to plan, execute, measure, and adapt their strategy all in one place. Connect your Cascade workspace to the rest of your tools to always have the most up-to-date and relevant data that pertains to your strategy."
                }
            },
            {
                "name": "shared_casper365",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Casper365 for Education",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/casper365/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Casper365 for Education connector provides access for education based apps to their representative data store."
                }
            },
            {
                "name": "shared_cdkdrivecustomer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CDK Drive Customer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cdkdrivecustomer/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The API will allow you to find, retrieve, and filter service customers in CDK Drive. Within CDK Drive, a customer is an individual who has been sold a vehicle, is a prospect on a vehicle, has bought parts, or has had their vehicle repaired or serviced through the dealership and exists in a CRM system. In addition, this connector will allow you to create a basic customer record. This helps service advisers provide a positive experience by allowing those workflows to be tied to a customer."
                }
            },
            {
                "name": "shared_cdkdriveservicevehicles",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CDK Drive Service Vehicles",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cdkdriveservicevehicles/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "CDK Drive Service Vehicles Associates identification, type, status, and customer information about a vehicle. The API will allow you to create, update, query, and retrieve service domain vehicle information in CDK."
                }
            },
            {
                "name": "shared_cdkeleadproductreferencedata",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Elead Product Reference Data",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cdkeleadproductreferencedata/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This API provides data to be used in conjunction with other eLeads APIs as needed. API searches, retrieves and provides the following details - Opportunity sources and sub sources for a specified company and up types, opportunity statuses for a specified company, sales steps for a specified company, employee positions for a specified company, employees by company and position, sender email addresses for a specified company, available vehicle class, year, make, model, trim."
                }
            },
            {
                "name": "shared_cdkeleadsalescustomers",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Elead Sales Customers",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cdkeleadsalescustomers/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This API allows for the management of prospect/customer information inside the Elead CRM. This API includes the following capabilities and features for managing prospect/customer information, Add prospect/customer information such as name, phone numbers, email addresses and physical address and return the uniquely-assigned Elead ID on post, Update, search and retrieve prospect/customer contact information tied to an existing Elead ID."
                }
            },
            {
                "name": "shared_cdkeleadsalesopportunities",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Elead Sales Opportunities",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cdkeleadsalesopportunities/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Elead Sales Opportunities API searches for and retrieves existing sales opportunity information in the Elead CRM. Opportunity information includes details related to the sales team, source, vehicle of interest and vehicle trade information.This API includes the following capabilities and features for managing opportunity-related information."
                }
            },
            {
                "name": "shared_centrical",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Centrical",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/centrical/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Send learning and performance events to Centrical platform."
                }
            },
            {
                "name": "shared_certopus",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Certopus",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/certopus/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Connector for Certopus allows users to integrate the Certopus into their workflows. With this connector, users can easily create and manage digital certificates using the Certopus platform. The connector provides a simple and intuitive interface for interacting with the Certopus, allowing users to automate tasks such as creating and publishing certificates and more."
                }
            },
            {
                "name": "shared_cgtrader",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CGTrader",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cgtrader/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Gets models from CGTrader for the connected account"
                }
            },
            {
                "name": "shared_chatter",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Chatter",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/chatter/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Chatter is an enterprise social network for your company that allows employees to connect and collaborate in real time."
                }
            },
            {
                "name": "shared_cioplenu",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "cioplenu",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cioplenu/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With cioplenu you can easily create and manage digital work instructions and checklists for industrial applications. Create smart documents, manage them with work orders, track tasks and problems while executing them and analyze the results. This connector allows you to create tasks for your cioplenu instance from external resources."
                }
            },
            {
                "name": "shared_ciresonservicemanage",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cireson Service Manager Portal",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ciresonservicemanage/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Create and Update Work Items through the Cireson Portal for System Center Service Manager"
                }
            },
            {
                "name": "shared_ciscowebexmeetings",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cisco Webex Meetings",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ciscowebexmeetings/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Cisco Webex Meetings provides cost-effective enterprise solutions for virtual meetings. Host highly secure and scalable web meetings from the Cisco Webex cloud."
                }
            },
            {
                "name": "shared_civicplustransform",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CivicPlus Transform",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/civicplustransform/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Empowers business users to create and deploy digital forms for enterprise and government organizations as web and native apps, while allowing developers to customize, extend, or harness the forms through their own custom apps. Connect your forms with this connector to allow easy submission of your form data into your backend systems or databases without the need to write complex integration code."
                }
            },
            {
                "name": "shared_clicksendpostcards",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ClickSend Postcards",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/clicksendpostcards/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ClickSend Postcard is a cloud-based service enabling you to easily send beautiful colour postcards for any occasion to anyone, anywhere at any scale in an instant."
                }
            },
            {
                "name": "shared_clicksendsms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ClickSend SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/clicksendsms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ClickSend for business SMS that gets delivered; alerts, notifications, invites, marketing messages and more. ClickSend is business communications software enabling companies of all shapes and sizes to easily send and receive SMS, Email, Voice and even post worldwide via web app or API. ClickSend has SMS at its core and powers billions of messages worldwide via direct routes but has expanded to offer a full suite of products providing choice and context to your business communications."
                }
            },
            {
                "name": "shared_cloudappsecurity",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Defender for Cloud Apps",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/cloudappsecurity/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Defender for Cloud Apps gives you visibility into your cloud apps and services, provides sophisticated analytics to identify and combat cyberthreats and enables you to control how your data travels."
                }
            },
            {
                "name": "shared_cloudbot",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloud BOT",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/cloudbot/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cloud BOT is a freemium service for web browser automation. You can easily create your own robot with no code and no installation required. Since the robot is located in the cloud, it can be run at any time. As part of the flow, you can run a robot that automates browser operations. You can pass the data/files to the robot and input it on the web, or receive the data/files acquired from the web and continue the flow."
                }
            },
            {
                "name": "shared_cloudconvert",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CloudConvert",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudconvert/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "CloudConvert is a file converter service - more than 200 different audio, video, document, ebook, archive, image, spreadsheet and presentation formats supported. The connector allows to convert files, compress files and create website screenshots using the CloudConvert service."
                }
            },
            {
                "name": "shared_cloudmersive",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Virus Scan",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersive/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Cloudmersive Virus Scan API lets you scan files and content for viruses and identify security issues with content."
                }
            },
            {
                "name": "shared_cloudmersivebarcode",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Barcode",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/cloudmersivebarcode/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Barcode APIs let you generate barcode images, and recognize values from images of barcodes."
                }
            },
            {
                "name": "shared_cloudmersiveconvert",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Document Conversion",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersiveconvert/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Convert API lets you effortlessly convert file formats and types."
                }
            },
            {
                "name": "shared_cloudmersivecurrency",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Currency",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersivecurrency/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The currency APIs help you retrieve exchange rates and convert prices between currencies easily."
                }
            },
            {
                "name": "shared_cloudmersivedv",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Data Validation",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersivedv/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The validation APIs help you validate data. Check if an E-mail address is real. Check if a domain is real. Check up on an IP address, and even where it is located. All this and much more is available in the validation API."
                }
            },
            {
                "name": "shared_cloudmersivefileproc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive File Processing",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersivefileproc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "File Processing lets you effortlessly create, process, convert and update files."
                }
            },
            {
                "name": "shared_cloudmersiveimagepr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Image Processing",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersiveimagepr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Image Recognition and Processing APIs let you use Machine Learning to recognize and process images, and also perform useful image modification operations."
                }
            },
            {
                "name": "shared_cloudmersivenlp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive NLP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersivenlp/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The powerful Natural Language Processing APIs (v2) let you perform part of speech tagging, entity identification, sentence parsing, and much more to help you understand the meaning of unstructured text."
                }
            },
            {
                "name": "shared_cloudmersivepdf",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive PDF",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersivepdf/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PDF lets you effortlessly create, convert, process, edit, work with, encrypt, and sign PDF files."
                }
            },
            {
                "name": "shared_cloudmersivesecurity",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Security",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersivesecurity/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The security APIs help you detect and block security threats."
                }
            },
            {
                "name": "shared_cloudmersivevideoandmedia",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloudmersive Video and Media",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudmersivevideoandmedia/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cloudmersive Video and Media Connector is critical for converting, editing, resizing, moderating and processing video, audio and other media. Cloudmersive Video and Media Services covers a wide array of common video and audio processing needs, including encoding, decoding, editing, resizing, moderating and extracting metadata. Stateless high-security processing ensures fast performance and strong security."
                }
            },
            {
                "name": "shared_cloudpkimanagement",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cloud PKI Management",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cloudpkimanagement/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Take back control of your Microsoft Public Key Infrastructure (ADCS) with the Microsoft Power Platform and Cloud PKI Management from 509 Solutions."
                }
            },
            {
                "name": "shared_cobblestonecontracti",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CobbleStone Contract Insight",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/cobblestonecontracti/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Cobblestone - Contract Insight connector allows you to connect our contract management software with many popular web and data services. The basic out of the box (OOB) endpoints will allow you to review Schema table names and whether they can be searched, edited, and updated. You can pull Entity information on table names, and Query, add, and update Customer record data."
                }
            },
            {
                "name": "shared_cognitiveservicescomputervision",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Computer Vision API",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/cognitiveservicescomputervision/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "ApiKey"
                                },
                                "parameters": {
                                    "apiKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "Cognitive Services Account Key",
                                            "tooltip": "Provide a Congitive Services Account Key",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "siteUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Site URL",
                                            "description": "Root site url (Example: https://westus.api.cognitive.microsoft.com)",
                                            "tooltip": "Provide Your Site url",
                                            "constraints": {
                                                "required": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Cogntive Services Resource."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/cognitiveservicescomputervision",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Extract rich information from images to categorize and process visual data—and protect your users from unwanted content with this Azure Cognitive Service."
                }
            },
            {
                "name": "shared_cognitiveservicescontentmoderator",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Content Moderator",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/cognitiveservicescontentmoderator/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Content Moderator is a Microsoft Cognitive Services product which provides machine-assisted moderation of text and images for potentially offensive or unwanted content, augmented with built-in human review tools"
                }
            },
            {
                "name": "shared_cognitiveservicescustomvision",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Custom Vision",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/cognitiveservicescustomvision/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Azure Custom Vision Service is a Microsoft Cognitive Services product for tagging images using your custom computer vision model."
                }
            },
            {
                "name": "shared_cognitiveservicesqnamaker",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "QnA Maker",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/cognitiveservicesqnamaker/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "ApiKey"
                                },
                                "parameters": {
                                    "api_key": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "Cognitive Services Account Key",
                                            "tooltip": "Provide a Congitive Services Account Key",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "siteUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Site URL",
                                            "description": "Root site url (Example: https://westus.api.cognitive.microsoft.com)",
                                            "tooltip": "Provide Your Site url",
                                            "constraints": {
                                                "required": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Blob Storage."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/cognitiveservicesqnamaker",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Distill information into an easy-to-navigate FAQ."
                }
            },
            {
                "name": "shared_cognitiveservicesspe",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Batch Speech-to-text",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1647/1.0.1647.3361/cognitiveservicesspe/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "ApiKey"
                                },
                                "parameters": {
                                    "apiKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "Speech service key",
                                            "tooltip": "Provide a Speech service key",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "region": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Region",
                                            "description": "Speech service region (Example: eastus)",
                                            "tooltip": "Speech service region. Learn more from Speech service regions",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your speech service."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/cognitiveservicesspe",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "customSubdomain": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Custom Subdomain",
                                            "description": "Custom subdomain endpoint url (Example: contoso)",
                                            "tooltip": "Azure AD authentication always needs to be used together with custom domain name of your Azure resource. Regional endpoints do not support Azure AD authentication. Learn more from Authentication in Azure Cognitive Services",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Accurately transcribe audio to text in more than 100 languages and variants. As part of Azure AI Speech service, Batch Transcription enables you to transcribe a large amount of audio in storage. You can point to audio files with a shared access signature (SAS) URI and asynchronously receive transcription results."
                }
            },
            {
                "name": "shared_cognitiveservicestextanalytics",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Cognitive Service for Language",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/cognitiveservicestextanalytics/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "ApiKey"
                                },
                                "parameters": {
                                    "apiKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "Cognitive Services Account Key",
                                            "tooltip": "Provide a Congitive Services Account Key",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "siteUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Site URL",
                                            "description": "Root site url (Example: https://westus.api.cognitive.microsoft.com)",
                                            "tooltip": "Provide Your Site url",
                                            "constraints": {
                                                "required": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Azure AD Integrated"
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/cognitiveservicestextanalytics",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Azure Cognitive Service for Language, previously known as 'Text Analytics' connector detects language, sentiment and more of the text you provide."
                }
            },
            {
                "name": "shared_cognitoforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cognito Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cognitoforms/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Cognito Forms lets you easily build powerful online forms, such as surveys, order forms, registration forms and more. For free."
                }
            },
            {
                "name": "shared_cognizantautomationc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cognizant Automation Center",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cognizantautomationc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cognizant Automation Center I&O is an integrated portfolio of Bots, services IPs, platform and solutions that brings the best of the breed Automated solutions. It is an AIOps platform that integrates with several systems in a complex IT ecosystem and facilitates transition Eliminate-Automation–Modernize using Devops SRE Operate framework. Cognizant Automation Center Integrates systems of engagement, systems of record, systems of monitoring & assurance and systems that execute Automation actions."
                }
            },
            {
                "name": "shared_commercemerchandising",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Commerce Merchandising",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/commercemerchandising/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The connector exposes actions to search and browse product related information like catalogs, inventory, price and recommendations. The connector connects to the Commerce Cloud Scale Unit (CSU) as a wrapper to provide the headless commerce APIs in simplified and easy way so businesses can easily consume and build Commerce applications."
                }
            },
            {
                "name": "shared_commercientcpq",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Commercient",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/commercientcpq/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Commercient is the easiest and most secure way to process customers and their orders with your ERP Accounting software. Commercient order management does the heavy lifting without any need to integrate with coding. Commercient works with popular accounting and ERP systems such as Syspro, Sage 50, Sage 100, Epicor 9, Epicor 10, Epicor Prophet 21 P21, Sage X3, Sage 300, Sage 500, Sage 200 UK, Sage 50 UK, Infor LN Baan. Look below for the order management and Commercient CPQ functions."
                }
            },
            {
                "name": "shared_commondataservice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Dataverse (legacy)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3525/commondataservice/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Provides access to the environment database in Microsoft Dataverse."
                }
            },
            {
                "name": "shared_commondataserviceforapps",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Dataverse",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/commondataserviceforapps/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Provides access to Microsoft Dataverse actions and triggers for Power Platform environments."
                }
            },
            {
                "name": "shared_companyconnect",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Company Connect",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/companyconnect/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "InSpark Company Connect is a total package of smart apps & an automated provisioning mechanism, for the accelerated implementation of your personalized staff portals. Inside, information is quick and easy to find; You have direct access to primary work environments (inside and outside of Microsoft 365) and employees have device and location independent access. Company Connect gets the best out of the Office 365, with no restrictions."
                }
            },
            {
                "name": "shared_connect2all",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Connect2All",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/connect2all/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Import, export and transform your Business Central data"
                }
            },
            {
                "name": "shared_connect2allonpremises",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Connect2All on-premises",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/connect2allonpremises/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Import and export your Business Central on-premises data"
                }
            },
            {
                "name": "shared_connectiveesignatures",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Connective eSignatures",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/connectiveesignatures/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connective eSignatures is a renowned digital signature solution offering a vast amount of signature methods & compliance to the most stringent (inter)national regulations. eSignatures allows you to transform any paper-based process into an end-to-end digital flow with an unparalleled user experience. Streamline the signing process exactly how you want it to and send, sign & track all types of documents directly from your favorite business applications. Join more than 500 satisfied customers."
                }
            },
            {
                "name": "shared_connpassip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "connpass (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/connpassip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Using the connpass, you can search and collect information about IT workshops and events."
                }
            },
            {
                "name": "shared_consensysethereum",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ConsenSys Ethereum (Deprecated)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/consensysethereum/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Read from and write to an Ethereum RPC Endpoint"
                }
            },
            {
                "name": "shared_contactspro",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Contacts Pro",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/contactspro/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Contacts Pro is an advanced contacts management app for Microsoft Teams. This connector will allow you to manage existing contacts or create new ones."
                }
            },
            {
                "name": "shared_conversionservice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Content Conversion",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3454/conversionservice/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "A service that allows content to be converted from one format to another."
                }
            },
            {
                "name": "shared_converterbypower2apps",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Converter by Power2Apps",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/converterbypower2apps/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Enables conversion of different data formats from one to another."
                }
            },
            {
                "name": "shared_copyaiip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Copy.ai",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/copyaiip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Meet your brainstorming buddy, blank page remover, research assistant, and expert copywriter: Chat by Copy.ai. Use our generative AI platform to work faster, smarter, and anything but harder."
                }
            },
            {
                "name": "shared_cosmobot",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "COSMO Bot",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cosmobot/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "COSMO Bot increases your business success through more efficiency in everyday life. If you answer a standard question today, you are wasting time. In contact with your customers, this is often a good opportunity to get to know each other and establish a relationship. But internally, from employee to employee, or when there is simply too much to do, it is a luxury that not everyone can allow themselves. This connector allows you to extend the bot's functionality and integrate other systems."
                }
            },
            {
                "name": "shared_cpqsync",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CPQSync",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cpqsync/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Leverage the 365 technology stack to integrate CPQSync, to the 365 Dynamics ecosystem for a seamless experience. This includes workflow, data, and events."
                }
            },
            {
                "name": "shared_crmbot",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CRM Bot",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/crmbot/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Create powerful conversation experience for your customers right from your CRM system.\nLearn more https://docs.crmbot.ai/"
                }
            },
            {
                "name": "shared_customerinsights",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Customer Insights",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/customerinsights/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Dynamics 365 Customer Insights connector provides a set of APIs to interact with Dynamics 365 Customer Insights instances."
                }
            },
            {
                "name": "shared_cyberday",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Cyberday",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/cyberday/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cyberday is an information security management system, where one key part is managing the data assets of a company. Often the most important data asset are the data systems used to process data and run operations. Sometimes organizations already have some other locations for asset listings. This connector helps to bring info of all assets to Cyberday, so the asset information and the decided safeguards to deploy can live in the same place."
                }
            },
            {
                "name": "shared_cyberproof",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "CyberProof",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/cyberproof/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "CDC is a next generation incident management and response platform offered by CyberProof, for building Security Operations Centers (SOCs). The platform is a key component of advanced security operations centers - supporting SOC management, orchestration, and incident response. The Connector interacts with CDC, offering a wide range of incident response automation activities including Alert and Incident creation, parsing and manipulation, as well as observable enrichment."
                }
            },
            {
                "name": "shared_d7messaging",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "D7Messaging",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/d7messaging/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "D7 offers a dependable and affordable cloud-based messaging platform that enables enterprises to engage with their customers through SMS, chat, and various social media platforms."
                }
            },
            {
                "name": "shared_d7sms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "D7SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/d7sms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "D7 SMS allows you to reach your customers via SMS over D7's own connectivity to global mobile networks. D7 provides reliable and cost-effective SMS services to businesses across all industries and aims to connect all countries and territories via direct connections."
                }
            },
            {
                "name": "shared_data8",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Data8 Data Enrichment",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/data8/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Data8 helps you build confidence in your data. We can save you money by cleaning and enriching both your existing data, as well as ensuring only the highest quality data goes in at the point of entry, leaving you to concentrate on targeting and communicating to the right customers."
                }
            },
            {
                "name": "shared_dataactivatorpreview",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Data Activator Early Access",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/dataactivatorpreview/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector is for use with Data Activator in Microsoft Fabric. You can use this connector to start a flow when a Data Activator trigger fires."
                }
            },
            {
                "name": "shared_datablend",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Datablend",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/datablend/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to Datablend for a cost-effective iPaaS solution supporting finance and accounting"
                }
            },
            {
                "name": "shared_databoxip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Databox (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/databoxip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Build dashboards and track performance from everywhere. Connect your data from any tool and track it from any device."
                }
            },
            {
                "name": "shared_dataflows",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Query Dataflows",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/dataflows/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Dataflows are a self-service, cloud-based, data preparation technology that allows you to ingest, transform and load data into Common Data Service environments, Power BI workspaces or your organization's Azure Data Lake Gen2 account."
                }
            },
            {
                "name": "shared_datascopeforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DataScope Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/datascopeforms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DataScope Forms is a mobile solution to automate your operation. Collect data offline, manage field teams and share business insights."
                }
            },
            {
                "name": "shared_db2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DB2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/db2/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Connector for DB2 integrates Azure applications with resources stored in an IBM DB2 database. Connector supports SELECT, INSERT, UPDATE, and DELETE operations."
                }
            },
            {
                "name": "shared_dbftoxmlconverter",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DBF2XML",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/dbftoxmlconverter/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A service that allows content to be converted from dbf format to another."
                }
            },
            {
                "name": "shared_deepgram",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Deepgram (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3506/deepgram/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Deepgram has language AI models to power your apps. Power your apps with world-class speech-to-text and domain-specific language models (DSLMs)."
                }
            },
            {
                "name": "shared_deepl",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DeepL",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/deepl/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The DeepL connector provides programmatic access to DeepL’s machine translation technology, making it possible to bring high quality translation capabilities directly to your websites and applications. If you would like to develop a DeepL plugin for your CAT tool, please contact us."
                }
            },
            {
                "name": "shared_desk365",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Desk365",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/desk365/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Desk365 is a cloud-based modern helpdesk for the Microsoft 365 workplace that lets you deliver outstanding customer service through channels like Microsoft Teams, Email, Web Forms/Widgets and more. Automate repetitive work and save time with Desk365’s intuitive, feature-rich web app that comes with a unified inbox to manage all your customer conversations."
                }
            },
            {
                "name": "shared_deskdirector",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DeskDirector",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/deskdirector/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DeskDirector automates and accelerates ticket-based workflows between Users and Techs working IT services. The DeskDirector connector is a deep and powerful integration into our rich ticketing platform. All phases of a ticket’s life cycle can be automated and enhanced for superior service experience."
                }
            },
            {
                "name": "shared_diffcheckerip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Diffchecker",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/diffcheckerip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Diffchecker will compare your inputs to find the difference between two text files, images, PDFs and many other."
                }
            },
            {
                "name": "shared_dimescheduler",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dime.Scheduler (on-prem)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/dimescheduler/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dime.Scheduler is a resource and project planning solution that extends the capabilities of ERP, CRM and other business systems with powerful graphical scheduling tools."
                }
            },
            {
                "name": "shared_disqus",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Disqus",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/disqus/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Disqus is a service for web comments and discussions. Disqus makes commenting easier and more interactive, helping publishers power online discussions."
                }
            },
            {
                "name": "shared_dnb",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "D&B Optimizer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/dnb/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "D&B Optimizer is a foundational data service from Dun & Bradstreet that improves the quality of your business data by correctly identifying, cleansing, and inserting firmographic intelligence into records within your Microsoft application environment."
                }
            },
            {
                "name": "shared_docfusion365",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DocFusion365 – SP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/docfusion365/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DocFusion® 365 is a dynamic, cloud-based document composition and automation engine designed to help you manage all of your document content and processes within the Office 365 environment."
                }
            },
            {
                "name": "shared_docjuris",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DocJuris",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/docjuris/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DocJuris is a contract negotiation workspace that empowers legal and business teams to close deals with speed and accuracy."
                }
            },
            {
                "name": "shared_docparser",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Docparser",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/docparser/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Extract data from PDF files & automate your workflow with our reliable document parsing software."
                }
            },
            {
                "name": "shared_docq",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "}exghts gen. Document & more",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/docq/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "}exghts helps you automatically generate documents. Just scan an accepted ID Card or other document and the relevant information will be extracted and automatically inserted into your new document based on a previously configured template. More actions will come soon."
                }
            },
            {
                "name": "shared_doctopdf",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Doc To PDF",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/doctopdf/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector provides you with the ability to generate a PDF from a Word document while maintaining the fidelity of the images, charts or graphs included in the source document."
                }
            },
            {
                "name": "shared_documentaikonfuzio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Document AI Konfuzio",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/documentaikonfuzio/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use the document AI Konfuzio Connector to OCR, extract, and retrieve structured information from PDFs, images, handwriting, and scans. Register on https://app.konfuzio.com for free to OCR PDFs and images from various file types, see https://dev.konfuzio.com/web/api.html#supported-file-types. In addition, you can train your custom Document AI following the Tutorial on https://help.konfuzio.com/tutorials/quickstart/ to extract structured information from documents."
                }
            },
            {
                "name": "shared_documentdb",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Cosmos DB",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/corife/asev3/fasttrain/1.0.1674.3563/documentdb/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Access Key",
                                    "description": "Provide Account Name and Access Key to access your Cosmos DB account."
                                },
                                "parameters": {
                                    "databaseAccount": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Account ID",
                                            "description": "Name of the account without 'documents.azure.com' part",
                                            "tooltip": "Unique identifier of the account, not to confuse with the full URI. This identifier does not contain colon, dots or slashes.",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "accessKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Access Key to your Azure Cosmos DB account",
                                            "description": "Primary or Secondary Key",
                                            "tooltip": "Enter the Key found in the 'Keys' blade of your Azure Cosmos DB account.",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Blob storage."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "d0ff2a81-2601-4f32-8642-26f272061511",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/documentdb",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cosmos.azure.com",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cosmos.azure.com"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Cosmos DB is a globally distributed multi-model database service designed to enable you to elastically and independently scale throughput and storage across any number of geographical regions with a comprehensive SLA."
                }
            },
            {
                "name": "shared_documentmerge",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Document Merge",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/documentmerge/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SharePoint Document and Mail Merge is the simple, fast and clean way to merge SharePoint list data into predefined Word, Excel and PowerPoint document templates with NO CODE!"
                }
            },
            {
                "name": "shared_documentscorepackapi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DocumentsCorePack",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/documentscorepackapi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DocumentsCorePack is a fast & simple document generation based on Dynamics 365 data. Based on MS Word - templates, DocumentsCorePack provides you with a set of tools to create and process documents effectively. From a document generation wizard that guides users through the process to full document automation - DocumentsCorePack will make your business documents look professional and help you to process them efficiently!"
                }
            },
            {
                "name": "shared_documotor",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DocuMotor",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/documotor/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Generate documents, presentations, and spreadsheets based on data.\nDocuMotor is a modern document generation platform that allows you to use transformation steps and templates designed in Microsoft 365, to create documents based on any data."
                }
            },
            {
                "name": "shared_docurain",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Docurain",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/docurain/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Docurain API allows you to create your own documents using template files registered in Docurain and Data for each App and DB."
                }
            },
            {
                "name": "shared_docusign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DocuSign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3518/docusign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DocuSign helps organizations connect and automate how they prepare, sign, act on, and manage agreements."
                }
            },
            {
                "name": "shared_docusigndemo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DocuSign Demo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/docusigndemo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DocuSign helps organizations connect and automate how they prepare, sign, act on, and manage agreements. The DocuSign Demo connector connects only to DocuSign Demo environments but offers the same functionality as the regular DocuSign connector. Any documents in a DocuSign Demo environment are not legally binding. For all non-demo uses, use the regular DocuSign connector."
                }
            },
            {
                "name": "shared_dokobitportal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dokobit Portal",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/dokobitportal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use Dokobit portal with all the features that it has but make it automated so that you don't have to waste your time on the administrative job. Put together an automated document signing process puzzle from only the parts you need: signing, sharing, downloading or deleting documents, removing and replacing signers, getting details about signers and signature information."
                }
            },
            {
                "name": "shared_dokobituniversalapi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dokobit Universal API",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/dokobituniversalapi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dokobit Universal API is a versatile tool that enables signing documents internally, within your system, and collecting signatures from 3rd parties, outside your system, across Europe. Document signing occurs in an accountless Dokobit signing (where invited participants can sign documents without registering on the Dokobit portal) interface with your organisation’s branding."
                }
            },
            {
                "name": "shared_domaintoolsirisenric",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DomainTools Iris Enrich",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/domaintoolsirisenric/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Enrich On-Network Indicators at Scale: The DomainTools Iris Enrich supports high query volumes of domain name attributes including Whois, DNS, SSL certificate, and risk scoring elements to help build out the needed context for appropriate disposition of indicators. It provides actionable insights-at-scale with enterprise-scale ingestion of DomainTools data on Microsoft Sentinel."
                }
            },
            {
                "name": "shared_domaintoolsirisinves",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DomainTools Iris Investigate",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/domaintoolsirisinves/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Map connected infrastructure to get ahead of threats. The Iris Investigate delivers dozens of domain name attributes on every result including Risk Score, DNS, Whois, SSL, and more. It enables easy pivoting through different domain name attributes and exposes meaningful insights with connection counts on most data fields. It is best suited for human-scale interactions."
                }
            },
            {
                "name": "shared_dox42",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "dox42",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/dox42/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The dox42 connector provides a connection to the very extensive dox42 REST API and allows you to automatically generate documents in a flow with data from all sources, like D365, SharePoint or others."
                }
            },
            {
                "name": "shared_dqondemand",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DQ on Demand",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/dqondemand/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DQ on Demand is a Data Quality as a Service (DQaaS) Data Quality Improvement Platform that is designed to make the task of data management simpler.\n\n DQ on Demand is for those who are not prepared to accept the high cost of low-quality data, are frustrated with differing levels of quality, conflicting rules and levels of and data governance.\n\nBilling is transactional, i.e. each request will consume credits, which can be spent on any of the available services."
                }
            },
            {
                "name": "shared_dropbox",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dropbox",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3506/dropbox/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Dropbox is a service that keeps your files safe, synced, and easy to share. Connect to Dropbox to manage your files. You can perform various actions such as upload, update, get, and delete files in Dropbox."
                }
            },
            {
                "name": "shared_dvelop",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "d.velop",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/dvelop/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "d.velop is a provider of ECM solutions (Enterprise Content Management). Use this connector to connect your flow with services from the d.velop platform or your d.velop system."
                }
            },
            {
                "name": "shared_dynamics365ratingsre",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Commerce - Ratings and Reviews",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/dynamics365ratingsre/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Utilize Dynamics 365 Commerce Ratings and Reviews APIs to import new reviews, export existing reviews, and more!"
                }
            },
            {
                "name": "shared_dynamicsax",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Fin & Ops Apps (Dynamics 365)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3454/dynamicsax/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Fin & Ops Apps (Dynamics 365) connector provides access to data entities."
                }
            },
            {
                "name": "shared_dynamicscrmonline",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 (deprecated)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/dynamicscrmonline/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Dynamics 365 is a cloud based service that provides a set of intelligent applications that seamlessly work together — unifying the capabilities of CRM business software and ERP systems."
                }
            },
            {
                "name": "shared_dynamicsfraudprotect",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Fraud Protection",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/dynamicsfraudprotect/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Dynamics 365 Fraud Protection provides merchants the capability to obtain risk assessment on fraudulent activity associated with e-commerce purchases, fraudulent account sign up and sign in attempts in their online store"
                }
            },
            {
                "name": "shared_dynamicsignal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamic Signal",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/dynamicsignal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dynamic Signal is an Employee Communication and Engagement Platform, trusted by organizations to connect, align and engage employees. Connect to Dynamic Signal to create and manage your posts and users."
                }
            },
            {
                "name": "shared_dynamicsnavision",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics NAV",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/dynamicsnavision/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dynamics NAV is a business management solution for small and mid-sized organizations that automates and streamlines business processes and helps you manage your business. You can use this connector with Dynamics NAV 2017 or later."
                }
            },
            {
                "name": "shared_dynamicssmbonprem",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Business Central (on-premises)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1656/1.0.1656.3429/dynamicssmbonprem/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dynamics 365 Business Central (on-premises) is a business management solution for small and mid-sized organizations that automates and streamlines business processes and helps you manage your business."
                }
            },
            {
                "name": "shared_dynamicssmbsaas",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Business Central",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/dynamicssmbsaas/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dynamics 365 Business Central is a business management solution for small and mid-sized organizations that automates and streamlines business processes and helps you manage your business."
                }
            },
            {
                "name": "shared_dynamicstranslations",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics Translation Service",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/joshsantana/dts.configUpdate/1.0.1659.3453/dynamicstranslations/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Translation, Alignment, and Regeneration operations powered by Dynamics Translation Service."
                }
            },
            {
                "name": "shared_dynatrace",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynatrace",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/dynatrace/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Dynatrace provides best-in-class observability through an open, AI-powered platform. This connector contains the endpoints for the Dynatrace Problems interface."
                }
            },
            {
                "name": "shared_easyredmine",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Easy Redmine",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/easyredmine/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Easy Redmine is a web based tool for software project management."
                }
            },
            {
                "name": "shared_easyvista",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "EasyVista Service Manager",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/easyvista/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "EasyVista Service Manager"
                }
            },
            {
                "name": "shared_easyvistaselfhelp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Easyvista Self Help",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/easyvistaselfhelp/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Getting Answers Should be Easy. Go beyond the limits of your traditional knowledge base with EV Self Help. Easily capture and deliver knowledge like you never have before. Interact with your whole information system"
                }
            },
            {
                "name": "shared_ebms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "EBMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ebms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect your EBMS data with hundreds of other services! Contact your Eagle Business Software Account Manager to activate your connector."
                }
            },
            {
                "name": "shared_edenai",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Eden AI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1649/1.0.1649.3368/edenai/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Enhance your apps and workflows with the power of Eden AI ! Integrate advanced AI features such as natural language processing, image recognition, document parsing, audio processing, generative AI and more."
                }
            },
            {
                "name": "shared_eduframe",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Eduframe",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/eduframe/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Eduframe is a complete solution for commercial training providers & business schools to attract more students, manage & automate the course administration, and deliver the ultimate learning experience. Eduframe seamlessly integrates with Canvas LMS. The connector opens up the opportunity to easily integrate your existing software applications with Eduframe, like your CRM and accounting software."
                }
            },
            {
                "name": "shared_egnyte",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Egnyte",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/egnyte/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Egnyte is a service that keeps your files safe, synced, and easy to share. Connect to Egnyte to manage your files. You can perform various actions such as upload, update, get, and delete files in Egnyte."
                }
            },
            {
                "name": "shared_egoi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "E-goi",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/egoi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "E-goi is a Multichannel Marketing Automation Platform, including email marketing services, SMS, Voice Broadcast, Push Notifications, Web Push and Forms to Capture, Automate, Communicate, Analyse and Generate more Sales. The connector allow users to add/update contacts, attach tags and send transactional SMS."
                }
            },
            {
                "name": "shared_eigenevents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Eigen Events",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/eigenevents/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Provides events from Ingenuity for use as flow triggers. You can use this connector to start flows whenever a selected event completes in the Eigen Ingenuity System"
                }
            },
            {
                "name": "shared_elasticforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Elastic Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/elasticforms/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Build advanced and interactive forms!"
                }
            },
            {
                "name": "shared_elasticocr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ElasticOCR",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/elasticocr/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "The new, modern way to OCR your documents."
                }
            },
            {
                "name": "shared_elfsquad",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Elfsquad Product Configurator",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/elfsquad/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Elfsquad Product Configurator enables sellers, or even end-customers to configure complex products. Create error-free quotations within minutes. Elfsquad uses Power Automate to sync with other applications. E.g. Sync contacts and quotes to CRM, Bill of Materials (BOM) to ERP and fill parametric models in CAD."
                }
            },
            {
                "name": "shared_elfsquaddata",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Elfsquad Data",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/elfsquaddata/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Elfsquad Product Configurator enables sellers, or even end-customers to configure complex products. Create error-free quotations within minutes."
                }
            },
            {
                "name": "shared_emaildomainchecker",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Email Domain Checker",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/emaildomainchecker/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Quickly clean your email lists, and check to see if the email domain is valid for recieving emails."
                }
            },
            {
                "name": "shared_emfluencemp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "emfluence Marketing Platform",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/emfluencemp/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The emfluence Marketing Platform is a marketing automation platform that allows customers the ability to create, deploy, and track multi-channel campaigns. This connector provides access to the emfluence Marketing Platform API."
                }
            },
            {
                "name": "shared_emigo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Emigo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/emigo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Emigo enables effective management of field force teams (employees working in the field on smartphones or tablets). Increases their effectiveness in their daily activities. Emigo Connector interact with Power Platform services. It enables business & back-office users to access data from Emigo to automate data flows & streamline business processes and digitalization of workflows happening outside of Emigo system."
                }
            },
            {
                "name": "shared_enadoc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Enadoc",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/enadoc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Enadoc is an innovative, cloud-based enterprise document imaging system. Enadoc provides solutions for secure and reliable management of documents on the cloud, with capabilities such as archival, search, retrieval and sharing of documents."
                }
            },
            {
                "name": "shared_encodiandocumentmanager",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Encodian",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/encodiandocumentmanager/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Enhanced document format conversion, OCR, watermarking, data extraction, redaction + much more. "
                }
            },
            {
                "name": "shared_engagementcloud",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Engagement Cloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/engagementcloud/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "dotdigital Engagement Cloud is a SaaS omnichannel marketing automation platform helping you create, send, and test data-driven campaigns."
                }
            },
            {
                "name": "shared_entegrations",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Entegrations.io",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/entegrations/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Entegrations.io, inc provides 3 broad set of features. 1) PayPal Invoicing, Payouts and IPN features leveraging your PayPal account. 2) Webhooks for Invoicing and Contacts leveraging your Xero account. 3) QBO Inovice leveraging your QuickBooks Online account."
                }
            },
            {
                "name": "shared_entersoft",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Entersoft",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/entersoft/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Entersoft Connector makes avaiable to the external ecosystem the rich set of services, objects, and events of the Entersoft Business Suite products: CRM, ERP, WMS, Retail, Mobile Apps, POD, e-Commerce, MRPII. Flows and apps of any type can integrate with the services exposed by Entersoft Connector. Workflows can be triggered by events taking palce at the Entersoft Application's Server leveraging the reachness of Entersoft Business Suite family products."
                }
            },
            {
                "name": "shared_envoy",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Envoy",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/envoy/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "An Envoy connector that allows you to be able to connect your Envoy account (our REST API endpoints) to any other connectors. An example would be to create bulk invites in Envoy with details from a Microsoft Excel Online spreadsheet."
                }
            },
            {
                "name": "shared_ephesoftsemantikforinvoices",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ephesoft Semantik For Invoices",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ephesoftsemantikforinvoices/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Ephesoft Semantik for Invoices connector helps organizations extract critical invoice data using cutting edge AI models to automate accounts payable processing. Semantik Invoice is a point solution that can speed up your invoice processing, reduce compliance errors, and free up your staff to work on more business critical items."
                }
            },
            {
                "name": "shared_esign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "E-Sign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/esign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "E-Sign Anything. Anywhere. It's easy to e-sign and send your documents on any device with our secure electronic signature system."
                }
            },
            {
                "name": "shared_eventbrite",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Eventbrite",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/eventbrite/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Eventbrite is a self-service ticketing platform used to create and discover local events."
                }
            },
            {
                "name": "shared_eventhubs",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Event Hubs",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3454/eventhubs/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "connectionstringauth",
                                "uiDefinition": {
                                    "displayName": "Access Key",
                                    "description": "Provide connection string to access your Azure Event Hubs."
                                },
                                "parameters": {
                                    "connectionString": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Connection String",
                                            "description": "Azure Event Hubs Connection String",
                                            "tooltip": "Provide Azure Event Hubs Connection String",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Event Hubs."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "2c5bf868-a9b0-4576-872b-a0f1e54782fc",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/eventhubs",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://eventhubs.azure.net/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://eventhubs.azure.net/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login with your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "namespaceEndpoint": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Namespace Endpoint",
                                            "description": "Provide Event Hubs Namespace Endpoint (e.g: sb://testeh.servicebus.windows.net/)",
                                            "tooltip": "Provide Event Hubs Namespace Endpoint (e.g: sb://testeh.servicebus.windows.net/)",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to Azure Event Hubs to send and receive events."
                }
            },
            {
                "name": "shared_eventtickets",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Event Tickets",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/eventtickets/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Sell Tickets and Manage Registration through the WordPress plugins Event Tickets and Events Automator."
                }
            },
            {
                "name": "shared_evocom",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Evocom",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/evocom/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Evocom is an easy-to-use solution for collaborative workflows and task management for enterprises. According to the motto \"first digitize, then automate\", companies transform manual processes into digital processes in order to further integrate and automate them afterwards."
                }
            },
            {
                "name": "shared_exasol",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Exasol",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/exasol/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Exasol is an analytics-focused parallelized relational database management system (RDBMS). Connect to an Exasol database to create,read, update and delete data."
                }
            },
            {
                "name": "shared_excelonline",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Excel Online (OneDrive)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/excelonline/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Excel Online (OneDrive) connection provider lets you work with Excel files stored in OneDrive. This connection provider only supports personal (MSA) accounts."
                }
            },
            {
                "name": "shared_excelonlinebusiness",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Excel Online (Business)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3452/excelonlinebusiness/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Excel Online (Business) connector lets you work with Excel files in document libraries supported by Microsoft Graph (OneDrive for Business, SharePoint Sites, and Office 365 Groups)."
                }
            },
            {
                "name": "shared_expensya",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Expensya",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/expensya/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Expensya is a leading Spend Management solution in Europe, and this connector allows to build on top of our technology, automate integration to third party systems, and extend existing features."
                }
            },
            {
                "name": "shared_experlogixsmartflows",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Experlogix Smart Flows",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/experlogixsmartflows/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Smart Flows provides business users with robust yet user-friendly features to simplify, optimize and automate business-critical document processes. From a single, intuitive platform, you are empowered to create simple or complex document templates, capture customer information and data, store and manage enterprise content, electronically sign documents, in batches or through automated flows, resulting in accelerated document processes, increased productivity and reduced dependence on IT."
                }
            },
            {
                "name": "shared_expirationreminder",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Expiration Reminder",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/expirationreminder/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Expiration Reminder allows tracking of expiration dates and renewals for software licenses, contracts, employee certifications, permits, warranties, etc."
                }
            },
            {
                "name": "shared_expocad",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "EXPOCAD",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/expocad/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This service interfaces with live EXPOCAD event data. Please use PUT, POST, and DELETE operations with discretion. Keep authorization codes private. If your code has been compromised, contact tech@expocad.com immediately."
                }
            },
            {
                "name": "shared_faanotam",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FuseLagNotam1.1 (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/faanotam/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector will allow users to retrieve NOTAMs (Notices to airmen) directly from the FAA. Notams are used to notify pilots of any current and future issues within the United States Airspace."
                }
            },
            {
                "name": "shared_faceapi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Face API",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/faceapi/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "Api Key"
                                },
                                "parameters": {
                                    "apiKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "Cognitive Services Account Key",
                                            "tooltip": "Provide a Congitive Services Account Key",
                                            "constraints": {
                                                "required": "false"
                                            }
                                        }
                                    },
                                    "siteUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Site URL",
                                            "description": "Root site url (Example: https://westus.api.cognitive.microsoft.com)",
                                            "tooltip": "Provide Your Site url",
                                            "constraints": {
                                                "required": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Face API Resource."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/faceapi",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com/"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Cognitive Services Face API allows you to detect, identify, analyze, organize and tag faces in photos."
                }
            },
            {
                "name": "shared_factset",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FactSet",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/factset/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Prepare for client meetings using the FactSet connector to access key company information in a custom branded, presentation ready PDF. Stay on top of relevant news and events for companies of interest and highlight important topics to drive your discussion with FactSet Signals. Alternatively, use Digital Cards to collaborate with colleagues and send summaries of actionable insights via Teams."
                }
            },
            {
                "name": "shared_fantasypremierleagueip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Fantasy Premier League (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/fantasypremierleagueip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Fantasy Premier League stats, events and league information"
                }
            },
            {
                "name": "shared_farsightdnsdb",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Farsight DNSDB",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/farsightdnsdb/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Farsight Security DNSDB is the world's largest DNS intelligence database that provides a fact-based view of the configuration of the global Internet infrastructure. DNSDB leverages Farsight's Security Information Exchange (SIE) data-sharing platform and is engineered and operated by leading DNS experts. Farsight collects, filters, and verifies Passive DNS data from its global sensor array. DNSDB is the highest-quality and most comprehensive DNS intelligence data service of its kind."
                }
            },
            {
                "name": "shared_featheryip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Feathery",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/featheryip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Feathery is transforming the way user interfaces for collecting information are built. We help users build customizable and developer-friendly forms."
                }
            },
            {
                "name": "shared_fhirbase",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FHIRBase",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/fhirbase/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft FHIR Server Connector for FHIR R4 Base resources."
                }
            },
            {
                "name": "shared_fhirclinical",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FHIRClinical",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/fhirclinical/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft FHIR Server Connector for FHIR R4 Clinical resources."
                }
            },
            {
                "name": "shared_fhirlink",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FHIRlink",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/fhirlink/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "azure-shared-app",
                                "uiDefinition": {
                                    "displayName": "Use default Microsoft Azure shared application",
                                    "description": "Log in using the standard Microsoft Azure application."
                                },
                                "parameters": {
                                    "fhirServerUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Azure FHIR Service Endpoint URL. For example, 'https://{{fhirservicename}}.fhir.azurehealthcareapis.com'",
                                            "displayName": "Azure FHIR Service Endpoint URL",
                                            "tooltip": "Provide URL of the Azure FHIR Service Endpoint"
                                        }
                                    },
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "460a5c7a-a8b3-479e-a54d-9928996b84c8",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/fhirlink",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD ": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "constraints": {}
                                        }
                                    },
                                    "token:resourceUri": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "description": "The identifier used in Azure AD to identify the target FHIR service resource. Usually for Azure FHIR Services, URI like 'https://{{fhirservicename}}.fhir.azurehealthcareapis.com'",
                                            "displayName": "Azure FHIR Services Resource URI",
                                            "tooltip": "Provide Azure FHIR server resource URI",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "byoa-google",
                                "uiDefinition": {
                                    "displayName": "Bring your own Google application",
                                    "description": "Log in using your own Google app."
                                },
                                "parameters": {
                                    "fhirServerUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "constraints": {
                                                "required": "true"
                                            },
                                            "description": "Google FHIR Service Endpoint URL. For example, 'https://healthcare.googleapis.com/{{fhirservicepath}}/fhir'",
                                            "displayName": "Google FHIR Service Endpoint URL",
                                            "tooltip": "Provide URL of the Google FHIR Service Endpoint"
                                        }
                                    },
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "Google",
                                            "scopes": [
                                                "https://www.googleapis.com/auth/cloud-platform"
                                            ],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/fhirlink",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Log in with Google Credentials",
                                            "description": "Log in with Google Credentials",
                                            "tooltip": "Provide Google Credentials",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "description": "Client (or Application) ID of your Google application.",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "description": "Client secret of your Google application.",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft FHIRlink creates a direct connection between healthcare apps built on Microsoft Azure services and FHIR’s servers, bypassing the need to duplicate data from Microsoft Dataverse."
                }
            },
            {
                "name": "shared_filesystem",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "File System",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/filesystem/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Connect to File Systems on your local or network machines to read from and write to files using the On-Premises Data Gateway."
                }
            },
            {
                "name": "shared_firetext",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FireText",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/firetext/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "FireText makes effective SMS marketing & notifications easy indeed - whether you're brand new to text message marketing or a seasoned hand."
                }
            },
            {
                "name": "shared_flic",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Flic",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/flic/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "The Flic connector allows a workflow to be triggered by the press of a Flic button or Flic task, in combination with the Flic Android or iOS app."
                }
            },
            {
                "name": "shared_fliplet",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Fliplet",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/fliplet/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This definition contains a list of actions on Fliplet data sources and apps"
                }
            },
            {
                "name": "shared_flotiqheadlesscms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Flotiq headless CMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/flotiqheadlesscms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Flotiq is an API-first, headless Content Management System which allows users to easily publish content through APIs that are dynamically built to support the current content model. We provide a variety of simple, low-code (or no-code) solutions to integrate systems with Flotiq in order to efficiently work with data. This connector allows you to easily integrate your Microsoft services with Flotiq and exchange data between systems with very little effort."
                }
            },
            {
                "name": "shared_flowforma",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FlowForma",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/flowforma/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "FlowForma Business Process Management (BPM) tools for Office 365, enable users to build forms & workflow, automating processes without code."
                }
            },
            {
                "name": "shared_flowformav2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FlowForma V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/flowformav2/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "FlowForma Business Process Management (BPM) tools for Office 365, enable users to build forms & workflow, automating processes without code."
                }
            },
            {
                "name": "shared_flowmanagement",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Automate Management",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3523/flowmanagement/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "firstParty",
                                "uiDefinition": {
                                    "displayName": "First Party",
                                    "description": "Use First Party Authentication."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "7ab7862c-4c57-491e-8a45-d52a7e023983",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/flowmanagement",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://service.flow.microsoft.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "tenantId": {},
                                                "resourceUriAAD": {
                                                    "value": "https://service.flow.microsoft.com/"
                                                },
                                                "resourceUri": {
                                                    "value": "https://service.flow.microsoft.com/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Token",
                                            "description": "Token for authentication.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "metadata": {
                                            "sourceType": "AzureActiveDirectoryTenant"
                                        },
                                        "uiDefinition": {
                                            "displayName": "Tenant",
                                            "description": "The tenant ID of for the Azure Active Directory application",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Power Automate Management connector enables interaction with Power Automate Management service. For example: creating, editing, and updating flows. Administrators who want to perform operations with admin privileges should call actions with the 'as Admin' suffix."
                }
            },
            {
                "name": "shared_flowpush",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Notifications",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3440/flowpush/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "The notification service enables notifications created by a flow to go to your email account or Microsoft Flow mobile app."
                }
            },
            {
                "name": "shared_fluidkinnectorzforpr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Fluid Kinnectorz for Procore",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/fluidkinnectorzforpr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Fluid Kinnectorz for Procore connector is a low-code integration application for Procore users. With this connector you can effortlessly create and implement custom workflows by integrating Procore with hundreds of other software packages represented within the Microsoft Power Platform connector library. Choose Phoenix Innovation Lab's Fluid Kinnectorz for Procore - because in construction, you don't have time for anything less!"
                }
            },
            {
                "name": "shared_forcamforcebridge",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FORCAM FORCE Bridge",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/forcamforcebridge/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "FORCAM FORCE is a IIoT platform solution for data driven manufacturing. It supports manufacturing companies to significantly increase their productivity. Its semantic data layer creates a uniform production data model and connects the shop- and top floor. The platform's open web interface form the bridge to in-house and third-party applications, thus enabling the free composition and collaboration of solutions. Connect today with FORCE to empower your workforce for digital transformation."
                }
            },
            {
                "name": "shared_formrecognizer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Form Recognizer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/formrecognizer/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Extracts text (printed and handwritten OCR) and additional information (tables, checkbox, fields / key value pairs) from PDF or image documents and forms into structured data based on pre-trained models (layout, invoice, receipt, id, business card) or custom model created by a set of representative training forms using AI powered document understanding."
                }
            },
            {
                "name": "shared_formstackforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Formstack Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/formstackforms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Formstack is one of the easiest ways to build custom forms that let you collect data your way."
                }
            },
            {
                "name": "shared_freshbooks",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FreshBooks",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/freshbooks/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "FreshBooks is a cloud based small business accounting software. Send invoices, track time, manage receipts and expenses."
                }
            },
            {
                "name": "shared_freshdesk",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Freshdesk",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/olshyron/aadil_plugins/1.0.1667.3502/freshdesk/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Freshdesk is a cloud-based customer support solution that will help you streamline your customer service and make sure your customers receive the support they deserve! The Freshdesk connector is intended for Freshdesk agents to manage tickets and contacts."
                }
            },
            {
                "name": "shared_freshservice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Freshservice",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1650/1.0.1650.3374/freshservice/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "Basic",
                                "uiDefinition": {
                                    "displayName": "API Key",
                                    "description": "API Key authentication type"
                                },
                                "parameters": {
                                    "apikey": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "API Key",
                                            "description": "The API Key for this api",
                                            "tooltip": "Provide your API Key",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "siteUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Site url",
                                            "description": "Root site url (Example: https://sample.freshservice.com )",
                                            "tooltip": "Provide Your Site url",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Freshservice is a cloud-based IT service desk and service management solution that's easy to set up and use, to transform employee experience across the organization."
                }
            },
            {
                "name": "shared_ftp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "FTP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/ftp/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "The File Transfer Protocol (FTP) is a standard network protocol used to transfer computer files between a client and server on a computer network. FTP is built on a client-server model architecture and uses separate control and data connections between the client and the server."
                }
            },
            {
                "name": "shared_geotax",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pitney Bowes Tax Calculator",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3444/geotax/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Pitney Bowes Tax Calculator allows anyone to determine local tax jurisdictions & tax rates in the United States based on address inputs or location coordinates"
                }
            },
            {
                "name": "shared_getaccept",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GetAccept",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/getaccept/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "GetAccept provides a sales enablement platform for sales to design, send, promote, track, and e-sign sales documents, leveraging sales collateral, contract management, proposals, and electronic signatures in one place."
                }
            },
            {
                "name": "shared_getmyinvoices",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GetMyInvoices",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/getmyinvoices/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "GetMyInvoices is a digital invoice management software that simplifies and speeds up preparatory accounting.\n The solution automatically retrieves invoices and other documents from thousands of sources – from online portals, email postboxes and cloud storages to scanned documents.\n Connect to GetMyInvoices you can automate various actions as soon as a new document is available in GetMyInvoices e.g. creating a row in Microsoft Excel, sending a message in Slack, generating a Trello card etc."
                }
            },
            {
                "name": "shared_giscloud",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GIS Cloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/giscloud/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows users to use any valid authorization key generated in GIS Cloud to access a list of their Map Projects, the Layers defined within and the Features contained on those layers. To accommodate the dynamic nature of Feature schema, the connector will dynamically query the service for the feature schema of a given layer."
                }
            },
            {
                "name": "shared_github",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GitHub",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/github/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "GitHub is a web-based Git repository hosting service. It offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features."
                }
            },
            {
                "name": "shared_gmosign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GMO Sign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/gmosign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "GMO Sign Connector helps organizations connect and automate how they prepare, sign, act on, and manage agreements."
                }
            },
            {
                "name": "shared_gofileroom",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GoFileRoom",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/gofileroom/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "GoFileRoom is a cloud-based document management and workflow solution. With the GoFileRoom connector, you can perform document, user management, and FirmFlow actions."
                }
            },
            {
                "name": "shared_googlecalendar",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Google Calendar",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/googlecalendar/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Google Calendar lets you organize your schedule and share events with co-workers and friends. With Google's free online calendar, it's easy to keep track of your daily schedule."
                }
            },
            {
                "name": "shared_googlecontacts",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Google Contacts",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/googlecontacts/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Google Contacts is an online address book, integrated across your Google products and more."
                }
            },
            {
                "name": "shared_googledrive",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Google Drive",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3506/googledrive/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Google Drive is a file storage and synchronization service created by Google. It allows users to store files in the cloud, share files, and edit documents, spreadsheets, and presentations with collaborators."
                }
            },
            {
                "name": "shared_googlepalm",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Google PaLM (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/googlepalm/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Google Palm offers advanced text generation and manipulation capabilities"
                }
            },
            {
                "name": "shared_googlesheet",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Google Sheets",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/googlesheet/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Connect to Google Sheets to manage your spreadsheets. You can create, edit, and collaborate with others on spreadsheets."
                }
            },
            {
                "name": "shared_googletasks",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Google Tasks",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1660/1.0.1660.3465/googletasks/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Google Tasks is a very simple task list. Works inside Gmail, Android, and Calendar seamlessly."
                }
            },
            {
                "name": "shared_gotomeeting",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GoToMeeting",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/gotomeeting/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "GoToMeeting is an online meeting tool. You can schedule your own meetings or watch for the ones you are invited to."
                }
            },
            {
                "name": "shared_gototraining",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GoToTraining",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/gototraining/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Citrix GoToTraining enables you to manage a stable and high-performance online training environment."
                }
            },
            {
                "name": "shared_gotowebinar",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GoToWebinar",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/gotowebinar/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Citrix GoToWebinar enables you to manage a stable and high-performance online webinar environment."
                }
            },
            {
                "name": "shared_gratavid",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Gratavid",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/gratavid/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Gratavid is a SaaS service that allows organizations to collect and send personalized videos."
                }
            },
            {
                "name": "shared_gravityformsbyreenhanced",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Gravity Forms by reenhanced",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/gravityformsbyreenhanced/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Gravity Forms by reenhanced lets you connect your Gravity Forms submissions to your flows. Once you install the add-on into your Gravity Forms Wordpress site, you'll be able to have your form submissions trigger this connector."
                }
            },
            {
                "name": "shared_groupmgr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "GroupMgr",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/groupmgr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A powerful set of tools, for both IT managers and users, to efficiently create, manage, browse and analyse all groups in your Microsoft 365 environment."
                }
            },
            {
                "name": "shared_harnesspdfx",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Harness PDFx",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/harnesspdfx/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PDFx automates the extraction of data from complex and varied PDFs. It can extract and structure any data type, including point data, tables and forms, and images. Manage your extracted data within a personal or shared workspace before exporting it to your own systems. The connector provides an easy way to get your documents into your workspace."
                }
            },
            {
                "name": "shared_harvest",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Harvest",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/harvest/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Harvest is a simple tool to help track the time spent by your team on each project and task."
                }
            },
            {
                "name": "shared_hashgeneratorip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Hash Generator (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/hashgeneratorip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This hash generator allows you to generate hashes from your input string. You can choose between SHA1, SHA256, SHA512 and MD5."
                }
            },
            {
                "name": "shared_hellosign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HelloSign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/hellosign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HelloSign enables secure electronic signatures that are business-caliber, easy-to-use and legally binding."
                }
            },
            {
                "name": "shared_highgearworkflow",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HighGear Workflow",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/jayawan/releases/v1.0.1655/1.0.1655.3418/highgearworkflow/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HighGear makes it easy to rapidly deploy and securely manage work, at scale. As a highly configurable no-code workflow platform, connecting with HighGear allows you to readily integrate business applications. Get your entire team connected across the enterprise and start building seamless workflows and processes with more visibility, auditability, and real-time measurement of all work activity."
                }
            },
            {
                "name": "shared_hipchat",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HipChat",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/hipchat/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "HipChat is group chat, video chat and screen sharing tool for teams of all sizes. Built for business, HipChat is persistent, searchable and loaded with goodies your team will love."
                }
            },
            {
                "name": "shared_hithorizons",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HitHorizons",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/hithorizons/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HitHorizons enables you to work with data of 75M+ European companies from 60 countries directly in your Microsoft products. Enrich you software with company data from various sources to provide you with a more complete and complex picture of the market, individual companies and their evolution over time."
                }
            },
            {
                "name": "shared_hivecpqproductconfig",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HiveCPQ Product Configurator",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/hivecpqproductconfig/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HiveCPQ is a comprehensive Configure Price Quote (CPQ) solution that empowers sales teams to generate accurate quotes for complex products. Streamline your sales process by seamlessly integrating HiveCPQ to automate workflows, sync data, and optimize your operations using our connector. Maximize efficiency and deliver exceptional sales experiences with HiveCPQ's powerful connector."
                }
            },
            {
                "name": "shared_holopinip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Holopin",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1641/1.0.1641.3326/holopinip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Holopins are digital badges, but actually cool. Earn verifiable digital badges for skills, achievements, and all the amazing things you do. Build collections and create your own badge board."
                }
            },
            {
                "name": "shared_honeywellforge",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Honeywell Forge",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/honeywellforge/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Honeywell Forge is an Enterprise Performance Management Software-as-a-Service. It enables autonomous control of devices and codifies domain knowledge of assets in a contextual way. Use Honeywell Forge Connector to subscribe to Honeywell Forge to receive service cases and to close existing service cases."
                }
            },
            {
                "name": "shared_hostio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Host.io (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3506/hostio/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Host.io collects data on every known domain name from every TLD and update it every month, including DNS records and website data for each of the domains."
                }
            },
            {
                "name": "shared_hotprofile",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HotProfile",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/hotprofile/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HotProfile automates management of business card data conversion data."
                }
            },
            {
                "name": "shared_houseraterqa",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HouseRater QA",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/houseraterqa/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to the HouseRater QA Cloud to create, update, and subscribe to inspections for your rating company. Contact HouseRater at support@houserater.com if you want to try using our system to improve your Energy Rating processes."
                }
            },
            {
                "name": "shared_hrcloud",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HR Cloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/hrcloud/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HR Cloud is a powerful and globally recognized HRMS software for the entire employee lifecycle.\nUser this connector to easily send employee information between HR Cloud and other systems you use."
                }
            },
            {
                "name": "shared_hrflowai",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HrFlow.ai",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/hrflowai/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HrFlow.ai is the 1st multi-layer AI powered API that brings intelligence to your HR Data and bridges the gap between all your data Sources and Destinations."
                }
            },
            {
                "name": "shared_htmltopdfconverter",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HTML to PDF by Pascalcase",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/htmltopdfconverter/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Converts HTML files to PDF. No more 2mb limitation."
                }
            },
            {
                "name": "shared_huddle",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Huddle",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/huddle/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Huddle is a secure document collaboration and client portal trusted by Enterprise and Government alike."
                }
            },
            {
                "name": "shared_huddleforusgovhealth",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Huddle for US Gov & Healthcare",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/huddleforusgovhealth/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "US GOVERNMENT & HEALTHCARE VERSION (Standard version is also available.) Huddle is a secure document collaboration and client portal trusted by Enterprise and Government alike."
                }
            },
            {
                "name": "shared_huddoboards",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Huddo Boards",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/huddoboards/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Huddo Boards - Collaboration done right. A task management tool with multiple ways to enter and view the data, including textual, kanban, mindmap and timeline."
                }
            },
            {
                "name": "shared_hume",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Hume (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/hume/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Hume is the AI toolkit to understand emotional expression and align technology with human well-being. Our platform is developed in tandem with scientific innovations that reveal how people experience and express over 30 distinct emotions."
                }
            },
            {
                "name": "shared_hyasinsight",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HYAS Insight",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/hyasinsight/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "HYAS Insight integration to Microsoft Azure Sentinel provides direct, high volume access to HYAS Insight data. It enables investigators and analysts to understand and defend against cyber adversaries and their infrastructure."
                }
            },
            {
                "name": "shared_iaconnectdynamiccode",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect Dynamic Code",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/iaconnectdynamiccode/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for developing dynamic code modules."
                }
            },
            {
                "name": "shared_iaconnectjava",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect Java",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/iaconnectjava/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for automating Java applications using the Java Access Bridge (JAB)."
                }
            },
            {
                "name": "shared_iaconnectjml",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect JML",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/iaconnectjml/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for automating Joiner / Mover / Leaver processes."
                }
            },
            {
                "name": "shared_iaconnectmainframe",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect Mainframe",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/iaconnectmainframe/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for automating 5250 and 3270 Mainframe sessions using Terminal Emulation applications that support the HLLAPI API."
                }
            },
            {
                "name": "shared_iaconnectmsoffice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect Microsoft Office",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/iaconnectmsoffice/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for Microsoft Office automation."
                }
            },
            {
                "name": "shared_iaconnectsapgui",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect SAP GUI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/iaconnectsapgui/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for automating the SAP GUI application."
                }
            },
            {
                "name": "shared_iaconnectsession",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect Session",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/iaconnectsession/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for automating the environment, session, file management and configuring IA-Connect."
                }
            },
            {
                "name": "shared_iaconnectui",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect UI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/iaconnectui/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for Windows application User Interface Automation (UIA)."
                }
            },
            {
                "name": "shared_iaconnectwebbrowser",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IA-Connect Web Browser",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/iaconnectwebbrowser/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IA-Connect is a Robotic Process Automation (RPA) platform which adds RPA functionality from the Cloud to on-premises virtual machines or over Citrix or Microsoft Remote Desktop (RDS) connections. This is the module for Web Browser automation."
                }
            },
            {
                "name": "shared_idanalyzer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ID Analyzer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/idanalyzer/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ID Analyzer provides several different identity verification products, you need to acquire basic knowledge of each product in order to choose the best solution for your application."
                }
            },
            {
                "name": "shared_ideanote",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ideanote",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ideanote/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Ideanote is the next-generation innovation software that has everything you need to collect, develop, prioritize and act on more of the right ideas."
                }
            },
            {
                "name": "shared_imanageinsightplus",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "iManage Insight Plus",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/imanageinsightplus/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "iManage Insight Plus connector empowers users to manage their organization's knowledge assets, making sure all files are secure within the iManage Work ecosystem."
                }
            },
            {
                "name": "shared_imanagework",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "iManage Work",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3450/imanagework/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "iManage Work connector enables users to automate repetitive tasks and approval processes while they keep all their files secure in the iManage Work environment."
                }
            },
            {
                "name": "shared_imanageworkforadmins",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "iManage Work for Admins",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/v-mohango/imanageadmins/1.0.1674.3563/imanageworkforadmins/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "iManage Work for Admins connector enables administrators to automate their repetitive or integration tasks, such as adding users or updating custom fields."
                }
            },
            {
                "name": "shared_imis",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "iMIS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/imis/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "iMIS, a purpose-built Engagement Management System for associations and non-profit organizations."
                }
            },
            {
                "name": "shared_impala",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Apache Impala",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/impala/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Apache Impala (incubating) is the open source, native analytic database for Apache Hadoop. Connect to your Impala database to read data from tables."
                }
            },
            {
                "name": "shared_impexium",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Impexium",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/impexium/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Impexium is the premier association management software solution for nonprofits and member-based organizations."
                }
            },
            {
                "name": "shared_impower",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Impower",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1641/1.0.1641.3326/impower/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector to Upload Invoices to Impower"
                }
            },
            {
                "name": "shared_imprezian",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Imprezian360-CRM",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/imprezian/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Imprezian360 CRM All-In-One"
                }
            },
            {
                "name": "shared_indaadhaarnm",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IN-D Aadhaar Number Masking",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/indaadhaarnm/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Eliminate risks and ensure compliance by redacting first 8 digits of Aadhaar Number and QR Code from Aadhaar images"
                }
            },
            {
                "name": "shared_indfacematch",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IN-D Face Match",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/indfacematch/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Detect human faces and match it against the photos from ID cards for identity verification process in onboarding. Multiple faces on the photo or No faces on the photo and photos taken in poor lighting conditions can be rejected at source for re-upload."
                }
            },
            {
                "name": "shared_indinsurance",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IN-D Insurance (ICD10 & CPT)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/indinsurance/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IN-D Insurance does ICD10 and CPT auto-coding by understanding the disease name and the respective diagnosis by extracting the information from the discharge summary uploaded without a need to set up any template."
                }
            },
            {
                "name": "shared_indinvoicedatacapture",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IN-D Invoice Data Capture",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/indinvoicedatacapture/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IN-D Payables is a smart invoice processing solution that converts static documents (scanned, PDFs, screenshots, etc.) into usable information to fuel your business processes. IN-D Payables is an AI-led intelligent document classification and capture solution that automates the processing of all kinds of commercial documents used in Shipping, Logistics, and Manufacturing operations."
                }
            },
            {
                "name": "shared_indkycindia",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IN-D KYC India",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/indkycindia/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Classify ID documents, and extracts useful attributes smartly leveraging on the power of AI. Works with most of the officially valid documents for vetting your customers making your onboarding fraud-proof and build trust."
                }
            },
            {
                "name": "shared_indpayables",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IN-D Payables",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/indpayables/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IN-D Payables process invoices to extract key attributes like invoice numbers, vendor name, etc., and the table line items without setting up a template. When it feels less confident about the extraction, it prompts the user to validate the results extracted with an intuitive UI. IN-D Payables continuously learn over time and does support stamped/crumpled invoices, multi-page invoices and multiple invoices in batches"
                }
            },
            {
                "name": "shared_industrialappstore",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Industrial App Store",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/industrialappstore/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Industrial App Store from Intelligent Plant is built on an architecture that enables cloud-based applications and services to interact with on-site Process Data Historians and Alarm & Event Logs. Use the Industrial App Store Connector to introduce plant data to your flows."
                }
            },
            {
                "name": "shared_ineight",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "InEight",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1652/1.0.1652.3394/ineight/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "InEight Connector provides an API to work with InEight objects."
                }
            },
            {
                "name": "shared_infobip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Infobip",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/infobip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Provide SMS and VOICE communication channels for enterprises over Infobip platform to better their customer engagement."
                }
            },
            {
                "name": "shared_infoquery",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "InfoQuery",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/infoquery/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "InfoQuery allows you to automate your business by leveraging your Resware data in a low-code solution. You can view, create, delete and update files, documents, partners, etc."
                }
            },
            {
                "name": "shared_informix",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Informix",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/informix/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Connector for Informix integrates Azure applications with resources stored in an IBM Informix database. Connector supports SELECT, INSERT, UPDATE, and DELETE operations."
                }
            },
            {
                "name": "shared_infoshare",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "InfoShare",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/infoshare/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "InfoShare is designed for use in businesses seeking to optimise the way they manage digital documents, information, binders and processes."
                }
            },
            {
                "name": "shared_infusionsoft",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Infusionsoft",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/infusionsoft/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Infusionsoft is sales and marketing automation software built exclusively for small business success."
                }
            },
            {
                "name": "shared_inoreader",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Inoreader",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/inoreader/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Inoreader is a content reader built for power users. Use Inoreader to subscribe to feeds, read articles or catalogue them for viewing later."
                }
            },
            {
                "name": "shared_inqubajourney",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "inQuba Journey",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/inqubajourney/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Seamlessly publish data to the inQuba Customer Journey APIs and effectively track your customer journeys."
                }
            },
            {
                "name": "shared_insightly",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Insightly",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/insightly/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Insightly is the easiest customer relationship management solution (CRM) to use for managing deep customer relationships. Customers use Insightly's tightly integrated CRM & project management features to close new business, track post sale customer interactions & drive repeat purchases."
                }
            },
            {
                "name": "shared_instapaper",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Instapaper",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1658/1.0.1658.3450/instapaper/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Instapaper is a tool for saving web pages to read later. You can create reading lists by organizing pages into folders which can then be accessed from any mobile or web client."
                }
            },
            {
                "name": "shared_integrablepdf",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Integrable PDF",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/integrablepdf/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Integrable PDF is a connector to work with PDF documents. Actions include: watermark PDF documents, protect PDF documents with a password, merge and split PDF documents, and more. Check https://integrable.net/microsoft-flow/pdf for documentation, examples and tutorials."
                }
            },
            {
                "name": "shared_integrationtoolbox",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Integration Toolbox",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/integrationtoolbox/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Integration Toolbox provides a set of operations which transform data in various ways."
                }
            },
            {
                "name": "shared_intellihr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "intelliHR",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/intellihr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "intelliHR is a cloud-based people management platform with advanced analytics capabilities. Connect to your intelliHR tenant to automate people-oriented workflows (such as onboarding) and data export."
                }
            },
            {
                "name": "shared_intentionaldatasources",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Intentional Data Sources",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/intentionaldatasources/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector for Granada data sources"
                }
            },
            {
                "name": "shared_intercom",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Intercom",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/intercom/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Intercom makes messaging apps for businesses that help them understand and talk to consumers."
                }
            },
            {
                "name": "shared_iobeya",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "iObeya",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/iobeya/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect your favorite apps with iObeya, automate information flow between teams, and create a single source of truth for better decision-making thanks to iObeya."
                }
            },
            {
                "name": "shared_iotcentral",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure IoT Central V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/iotcentral/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This is a legacy connector for Azure IoT Central V2 applications that will become deprecated in the future. You should use the Azure IoT Central V3 connector and applications instead. Azure IoT Central makes it easy to connect, monitor, and manage your IoT devices at scale. With the IoT Central V2 connector, you can trigger flows when a rule has fired and take action by creating new devices, updating existing devices, and deleting devices."
                }
            },
            {
                "name": "shared_ipqsfraudandriskscor",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "IPQS Fraud and Risk Scoring",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ipqsfraudandriskscor/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "IPQualityScore (IPQS) provides enterprise grade fraud prevention, risk analysis, and threat detection. Analyze IP addresses, phone numbers, email addresses, and URLs or domains to identify sophisticated bad actors and high risk behavior."
                }
            },
            {
                "name": "shared_isoplanner",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ISOPlanner",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/isoplanner/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to the ISOPlanner ecosystem."
                }
            },
            {
                "name": "shared_itautomate",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ITautomate",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/itautomate/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ITautomate is an online platform that allows you to automate a wide variety of IT operational tasks, saving your business time, money and resources. Issue saved commands such as PowerShell cmdlets on remote devices and parse the results to use in future actions."
                }
            },
            {
                "name": "shared_jasperip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Jasper (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/jasperip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Jasper is an on-brand AI platform for businesses. It helps creators use generative AI to break through writer’s block, create original imagery, and repackage content into different formats, tones and languages. Unlike most AI tools which are tied to individual tools and can produce pretty generic outputs, Jasper can be trained on your brand and called up on any platform you use from email to social media to your website."
                }
            },
            {
                "name": "shared_jbhunt",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "JBHunt",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/jbhunt/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Access to committed, market-relevant rating, tendering, and tracking. Connected to nearly 1M trucks through carriers on 360 Marketplace by J.B. Hunt."
                }
            },
            {
                "name": "shared_jedoxodatahub",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Jedox OData Hub",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/jedoxodatahub/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to your Jedox OData Hub. Fetch data from the Olap server, stream data from the Integrator server or execute loads and jobs."
                }
            },
            {
                "name": "shared_jgintegrations",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "JG Integrations",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/jgintegrations/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A collection of helper functions to replace missing or paid features in flow."
                }
            },
            {
                "name": "shared_jira",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Jira",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/jira/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "APIToken",
                                "uiDefinition": {
                                    "displayName": "API Token",
                                    "description": "Use API Token to access Jira"
                                },
                                "parameters": {
                                    "username": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Username or Email",
                                            "description": "Your Jira username. For Jira Cloud you need to use a valid email address.",
                                            "tooltip": "Provide your username",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "API token",
                                            "description": "Your API token (https://id.atlassian.com/manage/api-tokens).",
                                            "tooltip": "Provide your API token",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "oauth",
                                "uiDefinition": {
                                    "displayName": "Oauth",
                                    "description": "Use Oauth to access Jira."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2",
                                            "clientId": "AbGw9NLdZaiBOuw9x6I9iJLtDWeHXjA4",
                                            "scopes": [
                                                "offline_access",
                                                "read:jira-user",
                                                "read:jira-work",
                                                "write:jira-work",
                                                "manage:jira-webhook",
                                                "manage:jira-configuration",
                                                "manage:jira-project"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "authorizationUrl": {
                                                    "value": "https://auth.atlassian.com/authorize"
                                                },
                                                "tokenUrl": {
                                                    "value": "https://auth.atlassian.com/oauth/token"
                                                },
                                                "refreshUrl": {
                                                    "value": "https://auth.atlassian.com/oauth/token"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Log in with Jira Credentials",
                                            "description": "Log in with Jira Credentials",
                                            "tooltip": "Provide Jira Credentials",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Jira is a software development tool for agile teams to plan, track, and release world-class software. Connecting Jira issues to the rest of your tools helps break down barriers and unleash the potential of your team."
                }
            },
            {
                "name": "shared_jotform",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "JotForm",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/jotform/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "JotForm is an online form service used to generate leads, distribute surveys, collect payments and more."
                }
            },
            {
                "name": "shared_jotformenterprise",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Jotform Enterprise",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/jotformenterprise/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Create powerful custom forms and surveys with Jotform - free to embed and share in your own website. Build automated workflows and connect additional apps to your Jotform Enterprise account. Select any of your forms from Jotform Teams to use in your automation flow."
                }
            },
            {
                "name": "shared_junglemail365",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "JungleMail 365",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/junglemail365/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "JungleMail for Office 365 is a service that helps companies deliver personalized newsletters to their employees and their customers and increase engagement. Connect to JungleMail 365 to create newsletters, approve them and get analytical data."
                }
            },
            {
                "name": "shared_jupyrest",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Jupyrest",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3444/jupyrest/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "oauthServicePrincipal",
                                "uiDefinition": {
                                    "displayName": "Service principal authentication",
                                    "description": "Use your own Azure Active Directory app for service principal authentication."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Provide your Credentials",
                                            "description": "Provide your Credentials",
                                            "tooltip": "Provide your Credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "Client (or Application) ID of your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "Client secret of your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The tenant ID of for the Azure Active Directory application",
                                                "type": "string"
                                            },
                                            "displayName": "Tenant",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:resourceUri": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "ResourceUri",
                                            "description": "The resource you are requesting authorization to use.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "jupyrestinstance": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The url where your Jupyrest instance is hosted.",
                                                "type": "string"
                                            },
                                            "displayName": "Jupyrest instance",
                                            "tooltip": "eg. https://cdbkeplerdev.azurewebsites.net",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Jupyrest is a service that can run notebooks with predefined input and output contracts."
                }
            },
            {
                "name": "shared_k2workflow",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "K2 Workflow",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/k2workflow/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Use the K2 Workflow API service to remotely work with workflows and tasks."
                }
            },
            {
                "name": "shared_kaizala",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Kaizala",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/kaizala/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Kaizala is a mobile app that helps you connect with your entire mobile workforce and supply chain, organize and allocate tasks more efficiently with built-in and custom Actions, and get actionable information and insights to accelerate decision-making."
                }
            },
            {
                "name": "shared_kanbanize",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Kanbanize",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/kanbanize/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Kanbanize connector allows you to create, update or move cards inside your Kanban boards, as well as to retrieve information about your boards and their structure. Other supported functions are adding comments or logging time on the cards."
                }
            },
            {
                "name": "shared_kanbantool",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Kanban Tool",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/kanbantool/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Kanban Tool is an intuitive project management service for real-time collaboration. By splitting work into stages, e.g. To do - Doing - Done, teams get a visual representation of the process and status of all tasks. Unlimited boards with swimlanes and WIP limits. In-depth customization of the layout, card template, and process automation. Task assignments and comments. Seamless time tracking & reporting. iOS and Android apps and much more!"
                }
            },
            {
                "name": "shared_keyvault",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Key Vault",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/keyvault/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication type",
                            "description": "The authentication type to use."
                        },
                        "values": [
                            {
                                "name": "oauthDefault",
                                "uiDefinition": {
                                    "displayName": "Default Azure AD application for OAuth",
                                    "description": "Sign in with the default Azure Active Directory application."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "7ab7862c-4c57-491e-8a45-d52a7e023983",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/keyvault",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://vault.azure.net",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "resourceUri": {
                                                    "value": "https://vault.azure.net"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Provide your credentials",
                                            "description": "Enter your credentials to sign in.",
                                            "tooltip": "Sign in with your credentials.",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "vaultName": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Key vault name",
                                            "description": "Name for the key vault.",
                                            "tooltip": "Provide the name for your key vault.",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "oauthServicePrincipal",
                                "uiDefinition": {
                                    "displayName": "Service principal authentication",
                                    "description": "Use your Azure Active Directory application for service principal authentication."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aad",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/keyvault",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "AzureActiveDirectoryResourceId": "https://vault.azure.net",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                },
                                                "resourceUri": {
                                                    "value": "https://vault.azure.net"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Provide your credentials",
                                            "description": "Enter your credentials to sign in.",
                                            "tooltip": "Sign in with your credentials.",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "The client or application ID for your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "The client secret for your Azure Active Directory application."
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The tenant ID for the Azure Active Directory application.",
                                                "type": "string"
                                            },
                                            "displayName": "Tenant ID",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:VaultName": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The name of your key vault to use for the connection.",
                                                "type": "string"
                                            },
                                            "displayName": "Key vault name",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Key Vault is a service to securely store and access secrets."
                }
            },
            {
                "name": "shared_kintone",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "kintone",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/kintone/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Build a faster business with kintone. Databases, apps, processes. No code required."
                }
            },
            {
                "name": "shared_knowledgelake",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "KnowledgeLake",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/knowledgelake/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Integration with the KnowledgeLake Intelligent Content Automation Platform"
                }
            },
            {
                "name": "shared_knowledgeonerecfind6",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Knowledgeone RecFind6",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/knowledgeonerecfind6/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Knowledgeone RecFind6 provides table query and file upload services from external system to RecFind 6 databases."
                }
            },
            {
                "name": "shared_kroki",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Kroki",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/kroki/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Kroki provides a service to create diagrams from textual descriptions."
                }
            },
            {
                "name": "shared_kusto",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure Data Explorer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/kusto/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure Data Explorer a.k.a Kusto is a log analytics cloud platform optimized for ad-hoc big data queries. Read more about it here: http://aka.ms/kdocs"
                }
            },
            {
                "name": "shared_kyndrylmainframe",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Kyndryl mainframe",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/kyndrylmainframe/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Unlock the value of your data by using this connector to enable low-code developers to build solutions that will unleash new data insights and capabilities across your organization. Work with the thousands of mainframe developers at Kyndryl to innovate and provide better end user experiences against your mainframe data whilst securing it through Kyndryl Bridge."
                }
            },
            {
                "name": "shared_langai",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Lang.ai",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/langai/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Lang.ai is a SaaS platform that automate time-consuming manual tasks like tagging, prioritization and routing.AI that literally takes minutes to implement as you build your tags combining concepts visually instead of spending months using a traditional AI approach."
                }
            },
            {
                "name": "shared_languagequestionansw",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Language - Question Answering",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/languagequestionansw/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "keyBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Api Key",
                                    "description": "ApiKey"
                                },
                                "parameters": {
                                    "apiKey": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Account Key",
                                            "description": "The endpoint key for your language resource to be copied from Azure portal",
                                            "tooltip": "Provide your Language Endpoint Key",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "siteUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Site URL",
                                            "description": "Hostname of your language resource to be copied from Azure portal",
                                            "tooltip": "Provide Your Language Endpoint HostName",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "tokenBasedAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Blob Storage."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "fb0b0d8e-05af-43a7-b23c-843ea5010245",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/languagequestionansw",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://cognitiveservices.azure.com",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://cognitiveservices.azure.com"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.microsoftonline.com"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "siteUrl": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Site URL",
                                            "description": "Hostname of your language resource to be copied from Azure portal",
                                            "tooltip": "Provide Your Language Endpoint HostName",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Language - Question Answering API is a cloud-based service that provides advanced natural language processing with state of the art transformer models to generate answers against custom question answering projects or raw text. Question answering is a feature in Language service which is enhanced from the QnA Maker service with additional features like support for unstructured documents and precise answering."
                }
            },
            {
                "name": "shared_lansweeperappforsent",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Lansweeper App For Sentinel",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/lansweeperappforsent/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Integration of Lansweeper app on the MS Sentinel Platform implements the investigative actions and enables end-users to implement any use cases as a combination of the below-mentioned actions.\nAuthorization: Authenticate the connection with Lansweeper APIs using the Authorization Token from Logic app.\nList Authorized Sites: Retrieve the list of the authorized sites.\nHunt IP or Hunt MAC: Get the asset details from the Lansweeper platform for the given Site ID and IP address or MAC address."
                }
            },
            {
                "name": "shared_lassox",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Lasso X",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/lassox/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows you to use the Lasso X API to retrieve information about the People, Companies and Production Units in the Danish CVR Registry.\n\nRequires an API Key from Lasso X. For more information, visit www.lassox.com"
                }
            },
            {
                "name": "shared_latinsharedocuments",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LatinShare Documents",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/latinsharedocuments/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector provides a set of actions related to Docx, HTML and PDF documents. You can create documents from templates (DOCX or HTML files) and convert them to PDF. Visit the official site for more information http://flow.latinshare.com/sitio2020/documentacion-documents/"
                }
            },
            {
                "name": "shared_latinshareshpmanagement",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LatinShare SHP Management",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/latinshareshpmanagement/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector provides a set of SharePoint-related actions. For example, document, folder, list and site management. You can copy, move and delete documents and folders, delete subsites, and enable version control on lists via URL. Visit the official site for more information http://flow.latinshare.com/sitio2020/documentacion-sp-managments/"
                }
            },
            {
                "name": "shared_latinshareshppermissions",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LatinShare SHP Permissions",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/latinshareshppermissions/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector provides a set of actions related to SharePoint Online. For example, manage permissions for items, lists, and sites. You can grant permissions to specific users or groups, remove permissions to specific users or groups, remove all permissions, and restore permission inheritance for SharePoint resources. Visit the official site for more information https://flow.latinshare.com/sitio2020/documentacion-sp-permissions/"
                }
            },
            {
                "name": "shared_lawlift",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Lawlift",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/lawlift/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Lawlift is a company focused on document automation. The editor, which has become known for its ease of use, has won several awards. Customers are large and medium-sized companies, numerous big law firms, legal departments and notary offices. For more information visit : www.lawlift.com ."
                }
            },
            {
                "name": "shared_lcpicordis",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LCP - iCordis",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/lcpicordis/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Retrieve submissions for iCordis e-loket forms, either by polling for them or by subscribing to a webhook."
                }
            },
            {
                "name": "shared_leaddesk",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LeadDesk",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/leaddesk/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "LeadDesk offers cloud service for high-volume sales and customer-service. LeadDesk helps contact center agents close more by connecting the right person, with the right offer, through the right channel at the right time. Connect to LeadDesk and perform various actions to manage your leads, contacts and agents."
                }
            },
            {
                "name": "shared_leadloader",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Repfabric",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/leadloader/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This Connector allows you to create data such as companies, contacts, opportunities, and more in Repfabric right from Excel. Rather than tediously uploading formatted data on spreadsheets, select the rows of data you want to appear in Repfabric, run your flow, and instantly your information will appear!"
                }
            },
            {
                "name": "shared_leankit",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LeanKit",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/leankit/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Helping teams work together to deliver customer value, faster."
                }
            },
            {
                "name": "shared_legalbotaitools",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LegalBot AI Tools",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/legalbotaitools/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Provides API access to Artificial Intelligence, NLP, Machine Translation and more. Specially designed AI and NLP functions for legal industry"
                }
            },
            {
                "name": "shared_letterdrop",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Letterdrop (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/letterdrop/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Letterdrop is the only SEO tool that optimizes for people-first content. Beyond SEO, it's actually a complete content marketing suite designed to help you go from idea to publish as quickly as possible while following best practices. This includes project management, social distribution, and repurposing content."
                }
            },
            {
                "name": "shared_lettriagdprcompliance",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Lettria GDPR Compliance",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/lettriagdprcompliance/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Lettria GDPR Compliance helps your organization comply to GDPR by analyzing text data within your softwares and points outs compliance issues (such as personal data, offensive or subjective comments and more)."
                }
            },
            {
                "name": "shared_libraryofcongressip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Library of Congress",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1641/1.0.1641.3326/libraryofcongressip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Library of Congress service provides information about things you can find on the Library of Congress website, including:\n\nitems (books, archived websites, photos, and videos)\ncollections (thematic or otherwise grouped items that have been digitized)\nimages (thumbnails and higher resolution formats)"
                }
            },
            {
                "name": "shared_lifx",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LIFX",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/lifx/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "LIFX make Wi-Fi-enabled LED smart lighting. Deep colors, bright whites, and unique features, effects and integrations make for Smarter Light. Use this connector to control your LIFX."
                }
            },
            {
                "name": "shared_linkedin",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LinkedIn",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/linkedin/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Amplify your content's reach by easily sharing on LinkedIn."
                }
            },
            {
                "name": "shared_linkedinv2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LinkedIn V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/jayawan/releases/v1.0.1655/1.0.1655.3418/linkedinv2/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Amplify your content's reach by easily sharing on LinkedIn. The connector targets LinkedIn API version 2."
                }
            },
            {
                "name": "shared_linkmobility",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LINK Mobility",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/linkmobility/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "LINK Mobility provides a SMS text message gateway that can be used to send SMS messages as part of business flows. To use the connector, you must contact LINK Mobility support to purchase a service subscription and obtain login information."
                }
            },
            {
                "name": "shared_livechat",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LiveChat",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/livechat/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "LiveChat is an online customer service software with live support, help desk software and web analytics capabilities."
                }
            },
            {
                "name": "shared_livetilesbots",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LiveTiles Bots",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/livetilesbots/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Let people focus on the work that matters most. Automate mundane, repetitive tasks. Create personal, team, enterprise and external assistants with a range of abilities.\nThis connector allows LiveTiles Bots customers to easily connect a flow to their bot, in order to allow users to trigger the flow through a Conversational User Interface."
                }
            },
            {
                "name": "shared_lms365",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LMS365",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/lms365/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "LMS365 provides a modern, cloud based and secure learning management system, fit for the Modern Digital Workplace. It eliminates complexity by providing a complete learning solution that integrates seamlessly into your existing Office 365 and SharePoint environments. LMS365 is easy accessible from your browser, our intuitive mobile app or from Microsoft Teams enabling all companies to deliver training in any context, anytime, anywhere."
                }
            },
            {
                "name": "shared_lnkbio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Lnk.Bio",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/lnkbio/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Automate publishing workflow on Lnk.Bio: create a new Link on your public Lnk.Bio profile for any action taken on another platform."
                }
            },
            {
                "name": "shared_loginllamaip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LoginLlama",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/loginllamaip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "LoginLlama adds an extra layer of customer security without the extra work. LoginLlama uses a number of ranking factors to decide if a login is deemed suspicious. We determine a score for each login based on how 'suspicious' it is. We then use Bollinger Bands to determine if the login is suspicious or not."
                }
            },
            {
                "name": "shared_luis",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "LUIS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/luis/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Azure cognitive services language understanding intelligent service (LUIS) lets you understand language contextually, so your apps communicate with people in the way they speak."
                }
            },
            {
                "name": "shared_m365messagecenter",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft 365 message center",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/m365messagecenter/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Sync messages from the message center in Microsoft 365 admin center to a plan in Microsoft Planner. Note: Setup of this connector will fail unless it is initiated from within Microsoft 365 message center."
                }
            },
            {
                "name": "shared_m365updatesapp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Updates App (Microsoft 365)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/m365updatesapp/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Updates in Microsoft Teams is an app that saves people time and energy by helping them create, submit, and review all their updates right in the flow of work."
                }
            },
            {
                "name": "shared_mailchimp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MailChimp",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/olshyron/aadil_plugins/1.0.1667.3502/mailchimp/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "MailChimp is a SaaS service that allows businesses to manage and automate email marketing activities, including sending marketing emails, automated messages and targeted campaigns."
                }
            },
            {
                "name": "shared_mailinatorip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mailinator",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/mailinatorip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Mailinator service provides programmatic access to the Mailinator system. This includes fetching and injecting messages into the Mailinator system and creating routing rules for specific message domains within the system."
                }
            },
            {
                "name": "shared_mailparser",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MailParser",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mailparser/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Extract data from emails & automate your workflow with our powerful email parser software. Convert emails to Excel, parse leads from emails, and more."
                }
            },
            {
                "name": "shared_mandrill",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mandrill",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mandrill/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Mandrill is a transactional email API for MailChimp users. It's reliable, powerful, and ideal for sending data driven emails, including targeted e-commerce and personalized one-to-one messages."
                }
            },
            {
                "name": "shared_mapboxip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mapbox (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mapboxip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Mapbox allows you to access its navigation, location search and static map generation services to create interative/static maps in your application."
                }
            },
            {
                "name": "shared_mappro",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Map Pro",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/mappro/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Map Pro is an application for Microsoft Teams that displays a map in any of your channels. This connector will allow you to manage existing places or create new ones."
                }
            },
            {
                "name": "shared_maqtextanalytics",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Text Analytics",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/maqtextanalytics/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Discover meaningful insights in your text data. Perform Sentiment Analysis, extract Key Phrases and scrub PII Data from your text data."
                }
            },
            {
                "name": "shared_marketingcontenthub",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Marketing Content Hub",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/marketingcontenthub/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Marketing Content Hub by Stylelabs integrates and blends boundaries between traditional marketing silos. It provides an integrated solution for Digital asset management (DAM), Product information management (PIM), Marketing resource management (MRM), Web to Print, Marketing portal and Digital rights management (DRM)."
                }
            },
            {
                "name": "shared_marketo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Marketo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/marketo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Marketo is a marketing automation platform that enables marketers to manage personalized multi-channel programs and campaigns to prospects and customers."
                }
            },
            {
                "name": "shared_marketoma",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Marketo MA",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/marketoma/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Marketo Marketing Automation. This API provides access to Marketo objects such as Campaigns, Programs, Leads, Lists (Static and Smart) as well as filesystem assets such as files and folders."
                }
            },
            {
                "name": "shared_mavimimprove",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mavim-iMprove",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/mavimimprove/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With the Mavim connector you are able to build a digital twin of your organization by visualizing the relationships among people, process and technology and creates a map of business operations to help you monitor change, measure impact, and make informed business decisions to help you reach your destination. Our cloud software makes use of open standards for integration with third party applications, enabling simple adoption into any company’s technology stack."
                }
            },
            {
                "name": "shared_maximizer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Maximizer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/maximizer/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Maximizer is an integration for Maximier CRM to CRUD Maximizer entries."
                }
            },
            {
                "name": "shared_medallia",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Medallia",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/medallia/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Medallia Experience Cloud is a customer feedback management software platform that empowers organizations to improve the customer experience. Connect with Medallia to manage your experience data. You can perform various actions such as send invitations, send experience signals, receive voice of customer data, etc."
                }
            },
            {
                "name": "shared_medium",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Medium",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/medium/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Medium is a vibrant network of thinkers who care about the world and making it better. Connect to your Medium account to track new publications, write stories and more."
                }
            },
            {
                "name": "shared_meetingroommap",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MeetingRoomMap",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/meetingroommap/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Search and display images for locations.\nUse admin site https://www.meetingroommap.net to upload images/floorplans and map rooms, people and other locations to these images.\nUse this connector to search and display the mapped locations. Operations exists for each of the location types: Meeting rooms, people and custom locations."
                }
            },
            {
                "name": "shared_meisterplan",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Meisterplan",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/meisterplan/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Meisterplan is a portfolio-level resource management tool that helps portfolio and resource managers manage people across teams and initiatives whether your work is traditional, agile or hybrid. Use it to make confident portfolio decisions and interactively surface and solve resource conflicts."
                }
            },
            {
                "name": "shared_mensagia",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mensagia",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mensagia/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Mensagia offers reliable SMS, Email and Voice messages for business automation communication."
                }
            },
            {
                "name": "shared_metatask",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Metatask",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/metatask/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Metatask is a simple tool to organize and control internal processes that lets normal users quickly build and execute business workflows."
                }
            },
            {
                "name": "shared_microsoft365compliance",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft 365 compliance",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/releases/v1.0.1655-ff-ase-patch/1.0.1655.3418/microsoft365compliance/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Microsoft Purview compliance portal is home to integrated solutions for protecting and governing data, mitigating risks, and more. Simplify tasks across these solutions so you can focus on your compliance posture."
                }
            },
            {
                "name": "shared_microsoftbookings",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Bookings",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/microsoftbookings/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Bookings is a scheduling tool and is part of the Microsoft Office family of products. It allows users and organizations to create booking pages and helps their customers book appointments easily."
                }
            },
            {
                "name": "shared_microsoftflowforadmins",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Automate for Admins",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/microsoftflowforadmins/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Power Automate Management Connector for Administrators"
                }
            },
            {
                "name": "shared_microsoftforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/microsoftforms/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Forms is a new part of Office 365 Education that allows teachers and students to quickly and easily create custom quizzes, surveys, questionnaires, registrations and more."
                }
            },
            {
                "name": "shared_microsoftformspro",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Dynamics 365 Customer Voice",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1655/1.0.1655.3416/microsoftformspro/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Use Dynamics 365 Customer Voice to quickly create and send customized surveys to keep in close contact with your customers. View responses in automatically generated reports that highlight important trends and flag outlier scores for immediate attention. Track the customer metrics that matter the most to your business to make informed decisions."
                }
            },
            {
                "name": "shared_microsoftgraphsecurity",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Graph Security",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/microsoftgraphsecurity/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Microsoft Graph Security connector helps to connect different Microsoft and partner security products and services, using a unified schema, to streamline security operations, and improve threat protection, detection, and response capabilities. Learn more about integrating with the Microsoft Graph Security API at https://aka.ms/graphsecuritydocs"
                }
            },
            {
                "name": "shared_microsoftloop",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Loop",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/microsoftloop/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Loop Connector for Loop Business Process Automation Rules"
                }
            },
            {
                "name": "shared_microsoftpartnercent",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Partner Center",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/microsoftpartnercent/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "This connector allows you to connect to MPC API and collect some information including customer details, orders and subscriptions."
                }
            },
            {
                "name": "shared_microsoftschooldatas",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft School Data Sync V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/microsoftschooldatas/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Uploads CSV files to School Data Sync Version 2"
                }
            },
            {
                "name": "shared_microsoftschooldatasync",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft School Data Sync",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/microsoftschooldatasync/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Simplify class management in Office 365. School Data Sync reads rosters from your SIS and creates classes and groups for Microsoft Teams, Intune for Education, and third party applications.\n\nConnect to School Data Sync to upload school and roster information, manage your sync profile."
                }
            },
            {
                "name": "shared_microsoftsearch",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Search",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train2/1.0.1641.3328/microsoftsearch/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Search allows intelligent search against M365 content of multiple types from different workloads."
                }
            },
            {
                "name": "shared_microsofttranslator",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Translator",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1623/1.0.1623.3210/microsofttranslator/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Translator lets you translate text across multiple languages."
                }
            },
            {
                "name": "shared_microsofttranslatorv",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Translator V3",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/microsofttranslatorv/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Azure Cognitive Services Translator lets you to translate text and documents over 100 languages using general or custom models."
                }
            },
            {
                "name": "shared_mimeautomationip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mime Automation",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/mimeautomationip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Mime Automation provides a way to extract data from a TNEF (winmail.dat) encoded file"
                }
            },
            {
                "name": "shared_mitto",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mitto",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mitto/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Mitto connector enables apps to send enterprise grade SMS. Use it to send alerts, reminders, invites, marketing messages or any other kind of short message. We provide you a fast and reliable service which also brings you high conversion rates!"
                }
            },
            {
                "name": "shared_mobilistotele",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mobili Stotele",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mobilistotele/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Mobili Stotele is a mobile virtual PBX service for Tele2 mobile subscribers. This connector lets users to easily send all the data and events about calls, voicemails, contacts and configuration to other services."
                }
            },
            {
                "name": "shared_mobilyws",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MobilyWS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mobilyws/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Mobily.ws enables Apps to send global SMS"
                }
            },
            {
                "name": "shared_mobsimsendsms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MOBSIM Send SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mobsimsendsms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With Mobsim Send SMS, send text messages: alerts, notifications, marketing messages and more."
                }
            },
            {
                "name": "shared_mockarooip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mockaroo (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/mockarooip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Harness the Mockaroo API https://www.mockaroo.com/ to generate realistic sample data instrumental for application testing and development."
                }
            },
            {
                "name": "shared_moduleq",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ModuleQ",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1650/1.0.1650.3374/moduleq/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ModuleQ's proactive AI technology equips you for success. Use the ModuleQ Connector to trigger notifications when new recommendations are available. More details at https://moduleq.com (requires existing ModuleQ account)."
                }
            },
            {
                "name": "shared_monday",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "monday",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/monday/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Monday is a customizable web and mobile work management platform, designed to help teams and organizations with operational efficiency by tracking projects and workflows, visualizing data, and team collaboration."
                }
            },
            {
                "name": "shared_mongodb",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MongoDB",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/mongodb/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "MongoDB is a general purpose, distributed, document data platform which is loved by developers and used across enterprises to run variety of workloads.You can now explore the various endpoints and perform CRUD operations and aggregations on your collection using the MongoDB Connector."
                }
            },
            {
                "name": "shared_morf",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Morf",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/morf/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Morf is a modern and lightweight API-driven platform that offers a rapid and flexible approach to form generation."
                }
            },
            {
                "name": "shared_motawordtranslations",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MotaWord Translations",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/motawordtranslations/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "You can now professionally translate your documents or any other kind of content with MotaWord connector. We support many content/file types into 95+ languages with 18000+ professional translators. We are everywhere you are! Check our website and mobile apps to track your translatiosn in real-time."
                }
            },
            {
                "name": "shared_motimate",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Motimate",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/motimate/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Motimate is the result of more than 10 years of working with some of Scandinavias largest companies in improving their internal communication, increasing their sales and refining their employee training. We provide an award winning SAAS-solution making internal communication and corporate training fun and easy.\n\nRead more about Motimate on motimateapp.com."
                }
            },
            {
                "name": "shared_msgraphgroupsanduser",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MS Graph Groups and Users",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/msgraphgroupsanduser/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The MS Graph Groups and Users connector helps retrieve Azure AD groups, members (users) and license details"
                }
            },
            {
                "name": "shared_msnweather",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MSN Weather",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/msnweather/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "MSN Weather gets you the very latest weather forecast, including temperature, humidity, precipitation for your location."
                }
            },
            {
                "name": "shared_mtarget",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Mtarget SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mtarget/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With MTarget SMS, send and receive text messages: alerts, notifications, marketing messages..."
                }
            },
            {
                "name": "shared_muhimbi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Muhimbi PDF",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/jayawan/releases/v1.0.1655/1.0.1655.3418/muhimbi/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Convert, Compress, Merge, Watermark, Secure and OCR files."
                }
            },
            {
                "name": "shared_mural",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MURAL",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/mural/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect MURAL with your favorite apps, so you can automate your work and have more time for what matters most—no code required."
                }
            },
            {
                "name": "shared_myacclaro",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "My Acclaro",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/myacclaro/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "My Acclaro allows you to seamlessly connect to the Acclaro client portal to submit your translation projects directly."
                }
            },
            {
                "name": "shared_mysql",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "MySQL",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/mysql/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "MySQL is an open-source relational database management system. Connect to on-premise MySQL database to read and write data."
                }
            },
            {
                "name": "shared_nableclouduserhub",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "N-able Cloud User Hub",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/nableclouduserhub/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cloud User Hub is a unified Microsoft CSP portal that lets you automate common tasks across all Microsoft 365 apps without switching consoles or customers."
                }
            },
            {
                "name": "shared_nameapi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "NameAPI (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/nameapi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "NameAPI is a web API to handle people's names in your software."
                }
            },
            {
                "name": "shared_narvar",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Narvar",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/narvar/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Narvar provides connection with Narvar portal. Alows create and update of orders on narvar portal as well as viewing already created orders."
                }
            },
            {
                "name": "shared_netdocuments",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "NetDocuments",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/netdocuments/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "NetDocuments is a cloud content management service for businesses of all sizes to securely create, store, manage and share their document work anywhere, anytime."
                }
            },
            {
                "name": "shared_neum",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Neum (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/neum/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With Neum AI, your context in prompts is always accurate and up to date. It enables you to create a pipeline that keeps your data synced between a source (ex. Document DB) and a sink (ex. Pinecone)."
                }
            },
            {
                "name": "shared_newsdataio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "NewsData.io (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/newsdataio/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The NewsData.io service gets you top live-breaking news from all over the world in real-time. Apply multiple filters to narrow down your desired results."
                }
            },
            {
                "name": "shared_nexmo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Nexmo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/nexmo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Nexmo, the Vonage API Platform, enables you to add communications within the context of your applications, including SMS, Voice and Chat. Sign up for a Nexmo account here - https://www.nexmo.com/"
                }
            },
            {
                "name": "shared_nextcom",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Nextcom",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/nextcom/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect your application data flow to Nextcom to optimize sales and customer management."
                }
            },
            {
                "name": "shared_nitro",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Nitro",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/nitro/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Get your documents signed smarter, faster and more securely with Nitro Sign - without the need for paper or pen."
                }
            },
            {
                "name": "shared_nodefusionportal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Nodefusion Portal",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/nodefusionportal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A Nodefusion Portal Connector is used for various actions, such as opening support case, managing subscriptions, checking service roadmaps and other actions available in Nodefusion Portal for Nodefusion's customers"
                }
            },
            {
                "name": "shared_nosco",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Nosco",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/nosco/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Manage ideas with the Nosco platform."
                }
            },
            {
                "name": "shared_notiivybrowsernotif",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Notiivy Browser Notifications",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/notiivybrowsernotif/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Notiivy is a browser notification service allowing you to engage and communicate with users and customers without exhausting your email channel."
                }
            },
            {
                "name": "shared_npstoday",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "nps.today",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/npstoday/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The nps.today connector allows you to send out customer satisfaction and NPS surveys based on events in your own system and to get your own system notified whenever a new response or survey campaign member is added."
                }
            },
            {
                "name": "shared_nunify",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "nunify",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/nunify/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "An event tech platform to run any type of event - virtual events, hybrid events, webinars, in-person events & meetings. This platform provides all tools for registrations, onsite check-in, networking, audience engagement, gamification, live stream, event apps, sponsorships."
                }
            },
            {
                "name": "shared_objectiveconnect",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Objective Connect",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/objectiveconnect/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Objective Connect is the trusted file sharing platform which allows organisation to share sensitive documents with external parties. Users can create private workspaces and invite participants in the Cloud in a matter of seconds. The collaboration, reporting, security and compliance features allow governments and regulated industries the ability to work externally while having peace of mind."
                }
            },
            {
                "name": "shared_occuspace",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Occuspace",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/occuspace/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Occuspace connector provides real-time and historical occupancy data for Occuspace-enabled locations. Show how many people are in your space in real-time and learn from past trends to let people know when to expect busy times."
                }
            },
            {
                "name": "shared_office365",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Office 365 Outlook",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/office365/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Office 365 is a cloud-based service that is designed to help meet your organization's needs for robust security, reliability, and user productivity."
                }
            },
            {
                "name": "shared_office365groups",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Office 365 Groups",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/office365groups/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Office 365 Groups lets you manage group membership and calendar events in your organization using your Office 365 account. You can perform various actions such as get group roster, add or remove members and create group events."
                }
            },
            {
                "name": "shared_office365groupsmail",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Office 365 Groups Mail",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/office365groupsmail/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "The Office 365 Groups Mail connector allows users to work with data located in a Office 365 Group mailbox. The functionality in this connector works independently from a single user's personal mailbox and allows users to work with any Group they can access within their organization. The connector works off the Microsoft Graph API, and uses terminology specified in a Office 365 Groups documentation within the Graph API. Learn more in the connector documentation."
                }
            },
            {
                "name": "shared_office365users",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Office 365 Users",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/office365users/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Office 365 Users Connection provider lets you access user profiles in your organization using your Office 365 account. You can perform various actions such as get your profile, a user's profile, a user's manager or direct reports and also update a user profile."
                }
            },
            {
                "name": "shared_office365video",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Office 365 Video",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/office365video/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Video for Office 365 offers a highly scalable, easy-to-use portal for uploading and sharing your corporate videos"
                }
            },
            {
                "name": "shared_oneblink",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OneBlink",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/oneblink/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Empowers business users to create and deploy digital forms for enterprise and government organisations as web and native apps, while allowing developers to customise, extend, or harness the forms through their own custom apps. Connect your forms with this connector to allow easy submission of your form data into your backend systems or databases without the need to write complex integration code."
                }
            },
            {
                "name": "shared_onedrive",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OneDrive",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/onedrive/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Connect to OneDrive to manage your files. You can perform various actions such as upload, update, get, and delete on files in OneDrive."
                }
            },
            {
                "name": "shared_onedriveforbusiness",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OneDrive for Business",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/onedriveforbusiness/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "OneDrive for Business is a cloud storage, file hosting service that allows users to sync files and later access them from a web browser or mobile device. Connect to OneDrive for Business to manage your files. You can perform various actions such as upload, update, get, and delete files."
                }
            },
            {
                "name": "shared_oneflow",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Oneflow",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/oneflow/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Be more effective with truly digital contracts that make work faster, and life easier. Automate your contract management process with Oneflow"
                }
            },
            {
                "name": "shared_onenote",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OneNote (Business)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/onenote/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "OneNote is a note taking app from Microsoft that makes it easy to sync your ideas, sketches and notes across all your devices! Connect to your Office 365 account with OneDrive for Business enabled to track new sections, create notes and more."
                }
            },
            {
                "name": "shared_oodrivesign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Oodrive Sign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/oodrivesign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect and consume Oodrive sign's service through your workflows."
                }
            },
            {
                "name": "shared_openbrewerydb",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Open Brewery DB (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3506/openbrewerydb/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Open Brewery DB is a free dataset and API with public information on breweries, cideries, brewpubs, and bottle shops."
                }
            },
            {
                "name": "shared_openexperience",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Open Experience",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/openexperience/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Open Experience GmbH provides innovative solutions for the digitization of construction work. With this connector your construction site documentation is one step further to be fully automated, saving you the time and resources."
                }
            },
            {
                "name": "shared_openlegacyibmias400",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OpenLegacy IBM I (AS400)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/openlegacyibmias400/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "OpenLegacy IBM i (AS400) connector provides bidirectional connectivity to your system’s data and business logic through OpenLegacy Hub microservices deployed on OpenLegacy’s cloud or any other target deployment. You can now build Business Flows with information from your legacy environment using the OpenLegacy Hub. This will enable you to utilize your legacy assets as digital components, providing you a legacy integration and modernization solution from Day 1."
                }
            },
            {
                "name": "shared_openlegacyibmmainframe",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OpenLegacy IBM Mainframe",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/openlegacyibmmainframe/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "OpenLegacy IBM Mainframe connector provides bidirectional connectivity to your system’s data and business logic through OpenLegacy Hub microservices deployed on OpenLegacy’s cloud or any other target deployment. You can now build Business Flows with information from your legacy environment using the OpenLegacy connector. This will enable you to utilize your legacy assets as digital components, providing you a legacy integration and modernization solution from Day 1."
                }
            },
            {
                "name": "shared_opentextcoreshare",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OpenText Core Share",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/jayawan/releases/v1.0.1655/1.0.1655.3418/opentextcoreshare/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "OpenText Core is a fast-deploying SaaS content management solution that delivers simple, agile and secure cloud-based content management. Core integrates into crucial business process applications, including SAP® S/4HANA Public Cloud, Salesforce and Microsoft® 365 to maximize employee productivity, accelerate business processes and enhance governance. Now you can bring content and processes even more together by combining it in your low code solutions."
                }
            },
            {
                "name": "shared_opentextcsbyonefox",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OpenText Extended ECM",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/opentextcsbyonefox/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "OpenText Extended ECM is an enterprise content management platform that securely governs the information lifecycle by integrating with leading enterprise applications, such as SAP®, Microsoft® 365, Salesforce and SAP SuccessFactors®. You can bring content and processes more together by combining it in your low code solutions and provide access to information when and where it is needed which improves decision-making and drives operational effectiveness. Also works with OpenText Content Server."
                }
            },
            {
                "name": "shared_opentextdocumentum",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OpenText Documentum",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/opentextdocumentum/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "OpenText Documentum is a content services platform that manages content across file stores, enterprise applications, such as SAP and Microsoft, ensuring information is organized, preserved and secure. Bring together content and processes even closer by combining it in your low code solutions and provide access to information when and where it is needed which improves decision-making and drives operational effectiveness."
                }
            },
            {
                "name": "shared_opentextedocsbyonefox",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OpenText eDOCS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/opentextedocsbyonefox/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "OpenText eDOCS is a flexible, collaborative enterprise content management (ECM) system designed to support legal and other professional services organizations. Now you can bring content and processes more together by combining it in your low code solutions to ensure that critical business content is managed and secure throughout the content lifecycle, while remaining easily accessible for day-to-day operations."
                }
            },
            {
                "name": "shared_optiapi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "OptiAPI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/optiapi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The official api for OptiAPI, which connects countless of everyday actions with Power Automate."
                }
            },
            {
                "name": "shared_oracle",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Oracle Database",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/oracle/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Oracle Database is a relational database management system developed by Oracle. Connect to on-premise Oracle Database to perform various actions such as create, update, get, and delete on rows in a table."
                }
            },
            {
                "name": "shared_ordnancesurveyplaces",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ordnance Survey Places",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ordnancesurveyplaces/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The OS Places API provides a detailed view of an address and its life cycle. It contains all the records of AddressBase Premium and so provides all the information relating to an address or property from creation to retirement. It contains local authority, Ordnance Survey and Royal Mail addresses, current addresses, and alternatives for current addresses, provisional addresses (such as planning developments) and historic information."
                }
            },
            {
                "name": "shared_ottobot",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Otto.bot",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ottobot/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Otto is an easy-to-train chatbot which answers questions and automates the tasks you need done, while never forgetting, never leaving the organization, and working 24/7/365 to help you get more accomplished every single day. AI and automation solutions allow you to get more tasks done every day with more productivity, lower costs, without the constraint of time."
                }
            },
            {
                "name": "shared_outlook",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Outlook.com",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/outlook/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Outlook.com connector allows you to manage your mail, calendars, and contacts. You can perform various actions such as send mail, schedule meetings, add contacts, etc."
                }
            },
            {
                "name": "shared_outlooktasks",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Outlook Tasks",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/outlooktasks/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Outlook Tasks service lets you create, read, synchronize, update and delete your tasks that are secured by Azure Active Directory in Office 365 or a Microsoft account."
                }
            },
            {
                "name": "shared_pagerduty",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PagerDuty",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1660/1.0.1660.3465/pagerduty/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "PagerDuty is an agile incident management platform that integrates with IT Ops and DevOps monitoring stacks to improve operational reliability and agility for organizations."
                }
            },
            {
                "name": "shared_panviva",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Panviva",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/panviva/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Panviva is an omnichannel knowledge management solution. Our priority is to aid our clients in keeping their employees happy, so that they can focus on ensuring their customers are happy. Digitally transforming organisations for the last 20 years, we're now helping our customers to deliver knowledge nuggets to their employees and customers, whether they are in the home or the office - anytime and anywhere."
                }
            },
            {
                "name": "shared_parishsoftfamilysuit",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ParishSoft Family Suite",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/parishsoftfamilysuit/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Ministry Brands ParishSOFT Family Suite is an integrated church management software solution that gives you access to everything you need for your ministry to run smoothly. Pastors, staff, and parish administrators can streamline the behind-the-scenes administrative work. Rather than having a different software or online platform for membership, online giving, communications, and volunteer management, Ministry Brands ParishSOFT Family Suite cohesively ties all the tasks into one system."
                }
            },
            {
                "name": "shared_parserr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Parserr",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/parserr/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Parserr allows you extract data from recurring incoming emails and Excel, CSV and PDF attachments"
                }
            },
            {
                "name": "shared_parseur",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Parseur",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/parseur/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Extract structured data trapped in your emails. Then send it to your favorite application."
                }
            },
            {
                "name": "shared_partnercenterevents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Partner Center Events",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/partnercenterevents/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows Microsoft partners to register for specific resource change events related to Microsoft partner center referrals."
                }
            },
            {
                "name": "shared_partnercenterref",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Partner Center Referrals",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/partnercenterref/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Partner center referrals connector will help Microsoft partners to get a bidirectional sync between their CRM instances and partner center referrals system."
                }
            },
            {
                "name": "shared_partnerlinq",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PartnerLinq",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/partnerlinq/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PartnerLinq is an integration tool used to connect two or more systems together. Use this connector to connect with PartnerLinq."
                }
            },
            {
                "name": "shared_paylocity",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Paylocity",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/paylocity/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Paylocity develops industry-leading, cloud-based payroll and human capital management software solutions for medium-sized organizations. Use this connector to create events triggered by actions initiated in Paylocity payroll and HCM applications. Contact Paylocity to obtain access credentials to set up your Office 365 integration."
                }
            },
            {
                "name": "shared_pdf4me",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PDF4me",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/pdf4me/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PDF4me gives you all functionalities around PDF, e.g. convert, merge, split, make PDF/A compatible, optimize, protect, unlock, do OCR, create watermarks, create images, rotate PDF, attach barcodes."
                }
            },
            {
                "name": "shared_pdf4meconnect",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PDF4me Connect",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/pdf4meconnect/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PDF4me gives you all functionalities around PDF, e.g. convert, merge, split, make PDF/A compatible, optimize, protect, unlock, do OCR, create watermarks, create images, rotate PDF, attach barcodes."
                }
            },
            {
                "name": "shared_pdf4meswissqr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PDF4me SwissQR",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pdf4meswissqr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PDF4me SwissQR gives you functionalities like create SwissQR bill on your PDF document, split by SwissQR Code and Read SwissQR Code as Json on your PDF file."
                }
            },
            {
                "name": "shared_pdfblocks",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PDF Blocks",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pdfblocks/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PDF Blocks is a secure, reliable, and fast service to work with PDF documents in your flow. Actions include: Merge PDF documents, add or remove passwords, watermark documents, remove, extract, reverse, and rotate pages, and more. Check https://www.pdfblocks.com/power-automate for documentation, examples, and tutorials. Users can choose to process their PDF documents in US or European servers to comply with data location requirements."
                }
            },
            {
                "name": "shared_pdfco",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PDFco",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pdfco/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PDF.co connector is an excellent tool for converting raw HTML or website URL to PDF document. It also has features to merge documents of different formats into PDF, Split PDF document, adding text/images to existing PDF and filling out PDF form fields."
                }
            },
            {
                "name": "shared_pdfcross",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PDFcross",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pdfcross/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "It is a PDF operation tool to automate the work related to your PDF (for example, watermark and merge multiple files) and improve the work efficiency. We support Japanese language."
                }
            },
            {
                "name": "shared_peakboard",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Peakboard",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/peakboard/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Receive alerts from Peakboard Boxes."
                }
            },
            {
                "name": "shared_peltarion",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Peltarion AI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/peltarion/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Using this connector, you can connect your app with your Peltarion models. Just add the connector and enter URL and token from the Peltarion platform, and send your data"
                }
            },
            {
                "name": "shared_pilotthings",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pilot Things",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pilotthings/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Pilot Things is a platform to manage, visualize, automate and integrate your IoT device fleet."
                }
            },
            {
                "name": "shared_pineconeip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pinecone",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/pineconeip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Pinecone makes it easy to provide long-term memory for high-performance AI applications. Pinecone is a managed, cloud-native vector database with no infrastructure hassles. Pinecone serves fresh, filtered query results with low latency at the scale of billions of vectors."
                }
            },
            {
                "name": "shared_pinterest",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pinterest",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pinterest/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Pinterest allows you to create a bulletin of photos called a Board. You can follow boards, add pins to existing ones or collaborate with people to build shared boards."
                }
            },
            {
                "name": "shared_pipedrive",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pipedrive",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pipedrive/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Pipedrive is a CRM & pipeline management tool that helps you focus on actions that matter."
                }
            },
            {
                "name": "shared_pipwarekpis",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PIPware KPIs",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pipwarekpis/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows you to save KPI Target or KPI Actual data to your PIPware instance. This is more efficient than capturing the data into PIPware manually. Commonly used data sources are Excel or SQL, but any source returning data in the expected format can be used."
                }
            },
            {
                "name": "shared_pitneybowes",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pitney Bowes Data Validation",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3444/pitneybowes/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Pitney Bowes Data Validation Services helps eliminate errors in data and improve customer experience. It makes communication easier, faster and effortless by enriching customer details, keeping it up-to-date and maintaining its accuracy and consistency. To learn more, visit the documentation page: https://aka.ms/kvz9oh"
                }
            },
            {
                "name": "shared_pivotaltracker",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pivotal Tracker",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pivotaltracker/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Pivotal Tracker is purpose-built to make it easy for you to convert an idea into a set of stories that you can prioritize, assign, and manage through completion."
                }
            },
            {
                "name": "shared_pixelmeip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PixelMe",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/pixelmeip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PixelMe links allow you to track customers across platforms and increase the likelihood of turning clicks into conversions. Deep links direct users straight to a particular website or app page, eliminating the need for them to navigate or re-enter billing details. PixelMe’s deep links open directly in the Amazon app, allowing you to drive customers directly to the Amazon app for better UX, enhanced retention, and higher likelihood of conversion."
                }
            },
            {
                "name": "shared_pkisigning",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PKIsigning",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pkisigning/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Automate your document signing needs with the PKIsigning platform connector. Send documents to the PKIsigning platform; send invites and retrieve the signed documents."
                }
            },
            {
                "name": "shared_planful",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Planful",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1647/1.0.1647.3361/planful/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Planful is the pioneer of financial performance management cloud software. The Planful platform is used by the Office of the CFO around the globe to streamline business-wide planning, budgeting, consolidations, reporting, and visual analytics."
                }
            },
            {
                "name": "shared_planner",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Planner",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/jayawan/releases/v1.0.1655/1.0.1655.3424/planner/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Planner lets you easily bring together teams, tasks, documents, and conversations for better results."
                }
            },
            {
                "name": "shared_pling",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pling",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pling/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Easily send notifications to users in your organization directly in a chat in Microsoft Teams. Requires installation of the Pling app in Microsoft Teams."
                }
            },
            {
                "name": "shared_plivo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Plivo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/plivo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Plivo enables sending and receiving SMS & voice calls globally for businesses of all sizes."
                }
            },
            {
                "name": "shared_plumsail",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Plumsail Documents",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/plumsail/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Plumsail Documents connector allows you to set up automated document generation and conversion. The connector provides a wide range of actions to manipulate PDF documents and PDF forms. Create documents from templates, convert to PDF, split and merge PDF files, protect them, read PDF forms, and more - all you need to automate documents in one connector. Find more information at https://plumsail.com/documents"
                }
            },
            {
                "name": "shared_plumsailforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Plumsail Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/plumsailforms/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Plumsail Forms allows you to design rich web forms, share them with your users, and automate processing of submissions and attachments: generate documents, create records in Excel or Google Sheets, save data to SharePoint or One Drive. Find more information at https://plumsail.com/forms/public-forms/"
                }
            },
            {
                "name": "shared_plumsailhelpdesk",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Plumsail HelpDesk",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/plumsailhelpdesk/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "The API allows interact with Plumsail HelpDesk ticketing system. Visit https://plumsail.com/docs/help-desk-o365/v1.x/API/ms-flow.html for more information."
                }
            },
            {
                "name": "shared_plumsailsp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Plumsail SP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/plumsailsp/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "This connector provides a set of SharePoint related actions. For example, permissions, documents, folders, document sets management. Visit official site for more information https://plumsail.com/actions/"
                }
            },
            {
                "name": "shared_poka",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Poka",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/poka/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Poka connector contains a list of triggers that allow you to interact with the data in your application."
                }
            },
            {
                "name": "shared_polarispsa",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Polaris PSA",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/polarispsa/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Polaris PSA is a self-driving professional services automation solution that uses advanced technology to analyze real-time data, and then delivers recommendations to help keep projects, resources, and finances on track. The connector allows you to continuously sync projects, tasks, and resource assignments from Project Online to Polaris and time data from Polaris to Project Online."
                }
            },
            {
                "name": "shared_politemail",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PoliteMail",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/politemail/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Measure results with powerful email metrics, including opens, read-time and click through rates plus valuable analytics to help you gain the insights you need to improve your communications."
                }
            },
            {
                "name": "shared_postgresql",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PostgreSQL",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/postgresql/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PostgreSQL is a relational database management system developed by PostgreSQL Global Development Group. Connect to on-premise PostgreSQL database to read data from tables."
                }
            },
            {
                "name": "shared_powellteams",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Powell Teams",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/powellteams/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Powell Teams API endpoints allows you to manage the governance of your teams (creation / update of your teams)."
                }
            },
            {
                "name": "shared_powerappsforadmins",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Apps for Admins",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3520/powerappsforadmins/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Power Apps Management Connector for Administrators"
                }
            },
            {
                "name": "shared_powerappsforappmakers",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Apps for Makers",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3520/powerappsforappmakers/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Power Apps Management Connector for Makers"
                }
            },
            {
                "name": "shared_powerappsnotification",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Apps Notification",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/powerappsnotification/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Send push notifications to apps created with Power Apps. Trigger them from Flows or other apps."
                }
            },
            {
                "name": "shared_powerappsnotificationv2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Apps Notification V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/powerappsnotificationv2/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Send push notifications to apps created with Power Apps, Field Service, and Sales. Trigger them from Flows or other apps."
                }
            },
            {
                "name": "shared_powerassist",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Assist",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/powerassist/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Power Assist provides a wide variety of utility and data manipulation actions to accelerate and empower your Power Platform development."
                }
            },
            {
                "name": "shared_powerbi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power BI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1651/1.0.1651.3382/powerbi/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Power BI is a suite of business analytics tools to analyze data and share insights. Connect to get easy access to the data in your Power BI dashboards, reports and datasets."
                }
            },
            {
                "name": "shared_powerform7",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Form 7",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/powerform7/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Power Form 7 connects Contact Form 7 to your flows. Once you install and configure the Power Form 7 WordPress plugin, all of your forms will be available as triggers or for submission."
                }
            },
            {
                "name": "shared_powerplatformadminv2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Platform for Admins V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/sauravmishra/PBForPowerPlatformForAdminv2/1.0.1670.3520/powerplatformadminv2/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "oauth2-auth",
                                "uiDefinition": {
                                    "displayName": "OAuth Connection",
                                    "description": "OAuth Connection"
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "49676daf-ff23-4aac-adcc-55472d4e2ce0",
                                            "scopes": [
                                                ".default"
                                            ],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/powerplatformadminv2",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://api.powerplatform.com",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.microsoftonline.com"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                },
                                                "resourceUri": {
                                                    "value": "https://api.powerplatform.com"
                                                },
                                                "enableOnbehalfOfLogin": {
                                                    "value": "false"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "OAuth Connection",
                                            "description": "OAuth Connection",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "oAuthClientCredentials",
                                "uiDefinition": {
                                    "displayName": "Service Principal Connection",
                                    "description": "Service Principal Connection"
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "49676daf-ff23-4aac-adcc-55472d4e2ce0",
                                            "scopes": [
                                                ".default"
                                            ],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/powerplatformadminv2",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://api.powerplatform.com",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.microsoftonline.com"
                                                },
                                                "tenantId": {
                                                    "value": "common"
                                                },
                                                "resourceUri": {
                                                    "value": "https://api.powerplatform.com"
                                                },
                                                "enableOnbehalfOfLogin": {
                                                    "value": "false"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Service Principal Connection",
                                            "description": "Service Principal Connection",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "Client (or Application) ID of your application"
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "Client secret of your application"
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Tenant",
                                            "schema": {
                                                "type": "string",
                                                "description": "The tenant ID of your application"
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Unified connector for all administrative capabilities in Microsoft Power Platform"
                }
            },
            {
                "name": "shared_powerplatformforadmins",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Platform for Admins",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/powerplatformforadmins/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Power Platform Management Connector provides access to environment lifecycle management capabilities, DLP policy management, and other admin capabilities provided in the BAP API."
                }
            },
            {
                "name": "shared_powertextor",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Textor",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1647/1.0.1647.3361/powertextor/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With the Power Textor connector, send SMS messages to your customers and get push notifications when a text message is received. Build brand loyalty by a one-on-one conversation with customers with Power Textor actions that support a range of text message sending options; including on-demand SMS, scheduled SMS, event reminders, and Google Review requests. Each functionality is available for an individual number or a group of numbers."
                }
            },
            {
                "name": "shared_powervirtualagents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Power Virtual Agents",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/powervirtualagents/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Power Virtual Agents allows you to create conversational experiences that offer support by easily building powerful bots using a guided, no-code graphical interface—all without needing data scientists or developers. Connect to allow your bot to execute your own custom flows."
                }
            },
            {
                "name": "shared_ppmexpress",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PPM Express",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/ppmexpress/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PPM Express is an Online Project Portfolio Management Software. Connector to PPM Express allows you to retrieve information about the entities (Project, Idea, Task, Key Date, Resource) from your PPM Express tenant, as well as to create new or update existing ones."
                }
            },
            {
                "name": "shared_prioritymatrix",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Priority Matrix",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/prioritymatrix/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Priority Matrix creates a central source of truth to coordinate all the work your team needs to do. Prioritize all your work, share with your team and focus on the high-impact tasks first. Connect now to manage your tasks automatically."
                }
            },
            {
                "name": "shared_prioritymatrixhipaa",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Priority Matrix HIPAA",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/prioritymatrixhipaa/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Priority Matrix HIPAA creates a central source of truth to coordinate all the work your team needs to do. Prioritize all your work, share with your team and focus on the high-impact tasks first. Connect now to manage your tasks automatically."
                }
            },
            {
                "name": "shared_processstreet",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Process Street",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/processstreet/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Process Street is a modern process management platform for teams. You can use this connector to run workflows, find and update workflow runs, and trigger actions when a workflow is run or changes."
                }
            },
            {
                "name": "shared_progressusadvancedpr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Progressus Advanced Projects",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/progressusadvancedpr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use Progessus Advanced Projects connector to make odata calls to Progresssus Advanced Projects data."
                }
            },
            {
                "name": "shared_projectonline",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Project Online",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/projectonline/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Project Online is a flexible online solution for project portfolio management (PPM) and everyday work from Microsoft. Delivered through Office 365, Project Online enables organizations to get started quickly with powerful project management capabilities to plan, prioritize, and manage projects and project portfolio investments-from almost anywhere on almost any device."
                }
            },
            {
                "name": "shared_projectplace",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ProjectPlace",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/projectplace/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Get work done across projects and teams. ProjectPlace lets you plan, collaborate and track progress of all projects and assignments in an easy and user-friendly way."
                }
            },
            {
                "name": "shared_projectroadmap",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Project Roadmap",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/globalperconnector-train1/1.0.1639.3312/projectroadmap/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Project Roadmap Connector"
                }
            },
            {
                "name": "shared_projectum",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Projectum Present It",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/projectum/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Fill data dynamically into your documents.\n\nGet a trial key here by filling in the form:\nhttps://forms.office.com/Pages/ResponsePage.aspx?id=Kns17vkbpkK6q5dy2FsowQ7i3LhuXXpOhvMyBVDJFPNUNEE5OUo2RzUxVDM5OVIxME5CRzRTQUcwQy4u"
                }
            },
            {
                "name": "shared_projectwiseshare",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Projectwise Share",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/projectwiseshare/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ProjectWise Share is an instantly available, easy to configure File Sharing Service that’s associated with a CONNECT Project. It provides CONNECT Edition applications, Cloud Services and Mobile applications the ability to save and / or consume files from a common cloud repository and CONNECTED Users an easy, secure way to share files with Team Members."
                }
            },
            {
                "name": "shared_prowfmauthentication",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PRO WFM Authentication",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/prowfmauthentication/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Simplifies the steps to retrieve and manage an access token for Pro WFM APIs."
                }
            },
            {
                "name": "shared_public360",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Public 360",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/public360/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Public 360 is a market leading ECM system in the Nordics. The Public 360 connector enables users to create flows that archive cases, documents and files into Public 360. The Public 360 connector will enable users to archive more and easier! That includes archiving social media posts, Outlook items or OneDrive documents."
                }
            },
            {
                "name": "shared_puggamifiedengagement",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "PUG Gamified Engagement",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/puggamifiedengagement/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The PUG Gamified Engagement Connector for Dynamics 365 enables the first phase of a comprehensive and personalized gamified engagement program for driving customer loyalty. This app comes with out-of-the-box integration into D365 and enables D365 platform customers to create users within a loyalty framework, generate badges based on digital actions, and issue currency for answering calls to action."
                }
            },
            {
                "name": "shared_pureleads",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pure Leads",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pureleads/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Pure Leads helps capture, track, distribute and manage your leads with ease. Grow faster with our scalable lead generation software."
                }
            },
            {
                "name": "shared_pushcut",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Pushcut",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/pushcut/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Pushcut is an app for iOS that lets you create smart notifications to kick off shortcuts, URLs, and online automations."
                }
            },
            {
                "name": "shared_rainbird",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Rainbird",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/rainbird/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Rainbird is a no-code intelligent automation platform that enables you to automate complex decisions. This connector enables you to interact with knowledge maps you have built in Rainbird."
                }
            },
            {
                "name": "shared_rapidplatform",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RAPID Platform",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/rapidplatform/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "RAPID Platform enables the creation of customised application for your business by allowing you to capture data, run workflows and create Power BI Dashboards. With the RAPID Platform connector you can unlock hundreds of integrations as well as more automation options to take your RAPID solution to the next level."
                }
            },
            {
                "name": "shared_recordedfuture",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Recorded Future",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/recordedfuture/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Recorded Future Connector enables access to the Recorded Future Intelligence. The connector has dedicated actions for pulling Recorded Future indicators (IP, Domain, URL, Hash) and associated context (Risk Score, Risk Rules, Intelligence Card Link and Related Entities) , Vulnerabilities, Recorded Future Alerts and enables access to Recorded Future SOAR API and Fusion Files"
                }
            },
            {
                "name": "shared_recordedfutureidenti",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Recorded Future Identity",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/recordedfutureidenti/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Recorded Future Identity Intelligence Connector enables security and IT teams to detect identity compromises, for both employees and customers. To do this, Recorded Future automates the collection, analysis, and production of identity intelligence from a vast range of sources. Through this connector, organizations can incorporate identity intelligence into automated workflows (e.g., password resets) with applications such as Azure Active Directory and Microsoft Sentinel."
                }
            },
            {
                "name": "shared_recordedfuturesandbo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Recorded Future Sandbox",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/recordedfuturesandbo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Recorded Future Sandbox Connector enables security and IT teams to analyze and understand files and URLs, which provides safe and immediate behavioral analysis, helping contextualize key artifacts in an investigation, leading to faster triage. Through this connector, organizations can incorporate the malware analysis sandbox into automated workflows with applications such as Microsoft Defender for Endpoint and Microsoft Sentinel."
                }
            },
            {
                "name": "shared_recordedfuturev2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Recorded Future V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1653/1.0.1653.3403/recordedfuturev2/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Recorded Future Connector enables access to the Recorded Future Intelligence. The connector has dedicated actions for pulling Recorded Future indicators (IP, Domain, URL, Hash) and associated context (Risk Score, Risk Rules, Intelligence Card Link and High Confidence Evidence Based Links), Vulnerabilities, Recorded Future Alerts and enables access to Recorded Future SOAR API and Fusion Files"
                }
            },
            {
                "name": "shared_redmine",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Redmine",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/redmine/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Redmine is a web based tool for software project management."
                }
            },
            {
                "name": "shared_redquesmartinvoiceca",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Redque",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/redquesmartinvoiceca/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Accessing and managing the Redque system."
                }
            },
            {
                "name": "shared_reflectip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Reflect",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/reflectip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Reflect is a beautiful note-taking tool designed to help you think. Mirror the way your mind works by associating notes through backlinks. Reflect builds you a second brain that you can reference anytime."
                }
            },
            {
                "name": "shared_regexflowexecutepyth",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RegexFlow ExecutePython",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/regexflowexecutepyth/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ExecutePython enables users to use Python's functionality in their Flows."
                }
            },
            {
                "name": "shared_regexflowregularexpr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RegexFlow Regular Expression",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/regexflowregularexpr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Regular Expression connector enables the use of regular expression. The connector uses the posted body and a regex pattern as inputs and returns the matched patterns and groups."
                }
            },
            {
                "name": "shared_regolink",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RegoLink for Clarity PPM",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/regolink/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "RegoLink Clarity PPM connector that allows organizations to integrate with Clarity PPM to read and load data through a robust mechanism of actions and validations"
                }
            },
            {
                "name": "shared_rencore",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Rencore Code",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/rencore/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Analyze SharePoint applications using Rencore Code"
                }
            },
            {
                "name": "shared_rencoregovernance",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Rencore Governance",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/rencoregovernance/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Rencore Governance helps you to automate managing your Office 365 tenant."
                }
            },
            {
                "name": "shared_replicon",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Replicon",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/replicon/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Replicon is a self-driving professional services automation solution that uses advanced technology to analyze real-time data, and then delivers recommendations to help keep projects, resources, and finances on track. The connector allows you to continuously sync projects, tasks, and resource assignments from Project Online to Replicon and time data from Replicon to Project Online."
                }
            },
            {
                "name": "shared_rescocloud",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Resco Cloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/rescocloud/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Server Type",
                            "description": "Type of server to be used."
                        },
                        "values": [
                            {
                                "name": "cloudServer",
                                "uiDefinition": {
                                    "displayName": "Cloud Server",
                                    "description": "Use a cloud server to access your organization."
                                },
                                "parameters": {
                                    "server": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Resco Server",
                                            "schema": {
                                                "type": "string",
                                                "description": "The Resco Cloud server you would like to connect"
                                            },
                                            "tooltip": "Select the cloud server of your organization",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true",
                                                "allowedValues": [
                                                    {
                                                        "text": "Resco Cloud (Europe)",
                                                        "value": "https://rescocrm.com"
                                                    },
                                                    {
                                                        "text": "Resco Cloud (United States)",
                                                        "value": "https://login.us1.rescocrm.com"
                                                    },
                                                    {
                                                        "text": "Resco Inspections (Europe)",
                                                        "value": "https://inspections.resco.net"
                                                    },
                                                    {
                                                        "text": "Resco Routes (Europe)",
                                                        "value": "https://routes.resco.net"
                                                    }
                                                ],
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "organization": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Organization",
                                            "schema": {
                                                "type": "string",
                                                "description": "The organization you would like to connect to"
                                            },
                                            "tooltip": "Enter the organization name",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "schema": {
                                                "type": "string",
                                                "description": "The user name for this API"
                                            },
                                            "tooltip": "Enter the user name",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "clearText": true,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "schema": {
                                                "type": "string",
                                                "description": "The password for this API"
                                            },
                                            "tooltip": "The password for this API",
                                            "constraints": {
                                                "tabIndex": 4,
                                                "clearText": false,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "onPremiseServer",
                                "uiDefinition": {
                                    "displayName": "On-premise Server",
                                    "description": "Use an on-premise server to access your organization."
                                },
                                "parameters": {
                                    "server": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Resco Server",
                                            "schema": {
                                                "type": "string",
                                                "description": "Specify the URL of the Resco Server (https://server[:port])"
                                            },
                                            "tooltip": "Resco Server URL",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "organization": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Organization",
                                            "schema": {
                                                "type": "string",
                                                "description": "The organization you would like to connect to"
                                            },
                                            "tooltip": "Enter the organization name",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "schema": {
                                                "type": "string",
                                                "description": "The user name for this API"
                                            },
                                            "tooltip": "Enter the user name",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "clearText": true,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "schema": {
                                                "type": "string",
                                                "description": "The password for this API"
                                            },
                                            "tooltip": "The password for this API",
                                            "constraints": {
                                                "tabIndex": 4,
                                                "clearText": false,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Resco Cloud is an all-in-one business solution that is highly customizable, secure, feature-rich and 100% offline-ready."
                }
            },
            {
                "name": "shared_rescoreports",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Resco Reports",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/rescoreports/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Resco Reports provides you with a highly customizable tool for generating reports and documents based on your Dataverse / Dynamics data. This connector makes it possible to use the Resco Mobile Report templates to automate document generation or any other back-office scenarios."
                }
            },
            {
                "name": "shared_revai",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Rev AI (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3506/revai/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The world's most accurate service for AI- and human-generated transcripts. Trained from the most diverse collection of voices in the world, Rev AI sets the accuracy standard for video and voice applications."
                }
            },
            {
                "name": "shared_revelationhelpdesk",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Revelation helpdesk",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/revelationhelpdesk/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Revelation helpdesk connector allows you to create and update items in your helpdesk such as tickets, clients, users and assets by connecting to the Revelation helpdesk API using OAuth authentication. You can also take advantage of the extensive list of triggers allowing you to integrate your business processes based on events that occur in Revelation helpdesk"
                }
            },
            {
                "name": "shared_reversinglabsa1000",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ReversingLabs A1000",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/reversinglabsa1000/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ReversingLabs A1000 Malware Analysis Appliance integrates the ReversingLabs TitaniumCore automated static analysis technology and the TitaniumCloud File Reputation Service database. The REST Services APIs enable analysts to input samples, access unpacked files and view extracted Proactive Threat Indicators. The platform performs an in-depth static analysis of a comprehensive array of file types including Windows, Linux, Mac OS, iOS, Android, email attachments, documents and firmware."
                }
            },
            {
                "name": "shared_riskiqdigitalfootprint",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RiskIQ Digital Footprint",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/riskiqdigitalfootprint/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "RiskIQ Digital Footprint for Microsoft enables security teams to take control of their attack surface, reducing their risk and creating a better defense. The RiskIQ Digital Footprint connector for Microsoft will automatically make your external asset inventory including asset metadata available to your team for automated operations. Use this data to build reports, trigger alerts or aid in the identification of vulnerabilities or exposures against your assets."
                }
            },
            {
                "name": "shared_riskiqintelligence",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RiskIQ",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/riskiqintelligence/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "RiskIQ Security Intelligence Services provides direct, high volume access to RiskIQ data, allowing mature customers the ability to use this data to defend against threats to their environment."
                }
            },
            {
                "name": "shared_riskiqpassivetotal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RiskIQ Illuminate",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/riskiqpassivetotal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "RiskIQ Illuminate reveals cyber threats relevant to your critical assets through connected digital relationships. It is the only security intelligence solution with tailored attack surface intelligence to uncover exposures, risks, and threats against your unique digital footprint, pinpointing what’s relevant to you—all in one place."
                }
            },
            {
                "name": "shared_robolytix",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Robolytix",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/robolytix/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Robolytix is the key online analytic and monitoring tool for Robotic Process Automation using Sonar technology to evaluate, audit, monitor and improve performance of robots operating in any application, RPA platform or custom solution. Manage your RPA projects effectively with exact KPIs. Visualise your whole process at one place."
                }
            },
            {
                "name": "shared_robotsforpowerbi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Robots for Power BI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/robotsforpowerbi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "PowerBI Robots connector to execute the internal API across the multiple Power Platform products"
                }
            },
            {
                "name": "shared_rss",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "RSS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3525/rss/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "RSS is a popular web syndication format used to publish frequently updated content – like blog entries and news headlines. Many content publishers provide an RSS feed to allow users to subscribe to it. Use the RSS connector to retrieve feed information and trigger flows when new items are published in an RSS feed."
                }
            },
            {
                "name": "shared_safetyculture",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "iAuditor",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/safetyculture/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "iAuditor is the world's most popular inspection checklist app. SafetyCulture is iAuditor's cloud based backup and management system. Manage all your inspection teams and analyse data collected from the field. iAuditor and SafetyCulture give you real-time visibility across your entire operation."
                }
            },
            {
                "name": "shared_salesforce",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Salesforce",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/salesforce/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Salesforce Connector provides an API to work with Salesforce objects."
                }
            },
            {
                "name": "shared_saperp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SAP ERP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/saperp/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "Basic",
                                "uiDefinition": {
                                    "displayName": "SAP Authentication",
                                    "description": "Use SAP username and password to access SAP server."
                                },
                                "parameters": {
                                    "gateway": {
                                        "type": "gatewaySetting",
                                        "gatewaySettings": {
                                            "dataSourceType": "SapErp",
                                            "credentialType": "Basic",
                                            "connectionDetails": [
                                                "AppServerHost"
                                            ]
                                        },
                                        "uiDefinition": {
                                            "displayName": "Data Gateway",
                                            "description": "The On-Premises Data Gateway to connect to.",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "SAP Username",
                                            "description": "SAP Username for sign in into the SAP System.",
                                            "tooltip": "SAP Username for sign in into the SAP System.",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "clearText": true,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "SAP Password",
                                            "description": "SAP Password for sign in into the SAP System.",
                                            "tooltip": "SAP Password for sign in into the SAP System.",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "clearText": false,
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "Windows",
                                "uiDefinition": {
                                    "displayName": "Windows Authentication",
                                    "description": "Use windows username and password to access your SAP Server."
                                },
                                "parameters": {
                                    "gateway": {
                                        "type": "gatewaySetting",
                                        "gatewaySettings": {
                                            "dataSourceType": "SapErp",
                                            "credentialType": "Windows",
                                            "connectionDetails": [
                                                "AppServerHost"
                                            ]
                                        },
                                        "uiDefinition": {
                                            "displayName": "Data Gateway",
                                            "description": "The On-Premises Data Gateway to connect to.",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Windows Domain and Username",
                                            "description": "Windows domain and username used for sign in into the SAP System. Example: DOMAINusername",
                                            "tooltip": "Windows domain and username used for sign in into the SAP System. Example: DOMAINusername",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "clearText": true,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Windows Password",
                                            "description": "Windows password used for sign in into the SAP System.",
                                            "tooltip": "Windows password used for sign in into the SAP System.",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "clearText": false,
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "OAuthSso",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access SAP."
                                },
                                "parameters": {
                                    "gateway": {
                                        "type": "gatewaySetting",
                                        "gatewaySettings": {
                                            "dataSourceType": "SapErp",
                                            "credentialType": "Basic",
                                            "connectionDetails": [
                                                "AppServerHost"
                                            ]
                                        },
                                        "uiDefinition": {
                                            "displayName": "Data Gateway",
                                            "description": "The On-Premises Data Gateway to connect to.",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "a2185095-5d36-4264-9750-d5097b3cd87c",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/saperp",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://sapconnector.microsoft.com",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "resourceUri": {
                                                    "value": "https://sapconnector.microsoft.com"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.microsoftonline.com"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.microsoftonline.com"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Sign in with your Azure Active Directory credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "encryptConnection": {
                                        "type": "bool",
                                        "uiDefinition": {
                                            "displayName": "Encrypt Connection",
                                            "description": "Encrypt Connection",
                                            "tooltip": "Encrypt Connection",
                                            "constraints": {
                                                "hidden": "true",
                                                "required": "false",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "privacySetting": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "None"
                                            },
                                            {
                                                "value": "Private"
                                            },
                                            {
                                                "value": "Organizational"
                                            },
                                            {
                                                "value": "Public"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Privacy Setting",
                                            "description": "Privacy Setting",
                                            "tooltip": "Privacy Setting",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true",
                                                "capability": [
                                                    "CLOUD",
                                                    "GATEWAY"
                                                ],
                                                "allowedValues": [
                                                    {
                                                        "name": "None",
                                                        "value": "None"
                                                    },
                                                    {
                                                        "name": "Private",
                                                        "value": "Private"
                                                    },
                                                    {
                                                        "name": "Organizational",
                                                        "value": "Organizational"
                                                    },
                                                    {
                                                        "name": "Public",
                                                        "value": "Public"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SAP ERP is an enterprise resource planning software developed by SAP SE. SAP ERP incorporates the key business functions of an organization. The SAP ERP connector for Power Automate and Power Apps allows you to invoke RFC and BAPI functions using on-premises data gateway."
                }
            },
            {
                "name": "shared_sasdecisioning",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SAS Decisioning",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1622/1.0.1622.3199/sasdecisioning/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SAS Decisioning combines AI and business rules to automate operational decisions at scale. Use this connector to run decision models that are deployed on the SAS Viya platform."
                }
            },
            {
                "name": "shared_scriveesign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Scrive eSign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/scriveesign/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "basic-auth",
                                "uiDefinition": {
                                    "displayName": "Email/password",
                                    "description": "Basic authentication using a Scrive email and password."
                                },
                                "parameters": {
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "description": "The Scrive account email.",
                                            "displayName": "Email for Scrive account",
                                            "tooltip": "Provide the email for the Scrive account",
                                            "constraints": {
                                                "clearText": true,
                                                "required": "true",
                                                "tabIndex": 2
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "description": "The Scrive account password.",
                                            "displayName": "Password for Scrive account",
                                            "tooltip": "Provide the password for the Scrive account",
                                            "constraints": {
                                                "clearText": false,
                                                "required": "true",
                                                "tabIndex": 3
                                            }
                                        }
                                    },
                                    "customApiUrl": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "description": "Specify Scrive API host. Default is https://scrive.com.",
                                            "displayName": "API Host URL",
                                            "tooltip": "Provide the host URL for the API.",
                                            "constraints": {
                                                "clearText": true,
                                                "required": "false",
                                                "tabIndex": 4
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "OAuth",
                                "uiDefinition": {
                                    "displayName": "OAuth/SSO",
                                    "description": "OAuth authentication through email/password or single sign-on (SSO)."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "oauth2",
                                            "clientId": "b656c82f946739f0_36551",
                                            "scopes": [
                                                "FULL_ACCESS"
                                            ],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            },
                                            "customParameters": {
                                                "authorizationUrl": {
                                                    "value": "https://power-automate-integration.scrive.com/oauth/authorization"
                                                },
                                                "tokenUrl": {
                                                    "value": "https://power-automate-integration.scrive.com/oauth/token"
                                                },
                                                "refreshUrl": {
                                                    "value": "https://power-automate-integration.scrive.com/oauth/refresh"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Log in with your credentials",
                                            "description": "Log in with your credentials",
                                            "tooltip": "Log in with your credentials",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Scrive, the Nordic market leader for electronic signatures, offers a growing suite of solutions for document workflows requiring e-signing and identity verification."
                }
            },
            {
                "name": "shared_searchapigooglesearch",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SearchAPI - Google Search (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/searchapigooglesearch/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Google Search service scrapes SERP for real-time results. Scrape organic results, ads, related searches, inline questions and more."
                }
            },
            {
                "name": "shared_secib",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SECIB",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/secib/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The SECIB connector allows SECIB users to automate their workflow. For instance, you can trigger a worklflow when a new case file is created in SECIB neo."
                }
            },
            {
                "name": "shared_secplugscan",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ScanCloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/secplugscan/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Scancloud is a hybrid security platform using various security providers that lets you scan files, emails and URLs for malwares and threats in the content."
                }
            },
            {
                "name": "shared_secretserver",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Secret Server",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/secretserver/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Secret Server Connector allows users to leverage the power of Delinea Secret Server. This connector allows the user to retrieve a secret from Secret Server via ID."
                }
            },
            {
                "name": "shared_securemessagedelivery",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "DataMotion",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/securemessagedelivery/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "DataMotion, Inc. specializes in secure data exchange APIs, allowing companies to integrate secure message and file exchange solutions into their existing workflows and save development time. Following security protocol can be time-consuming, but DataMotion's connector enables seamless, one-way encrypted messaging, helping users remain compliant with industry regulations and your enterprise's security policies."
                }
            },
            {
                "name": "shared_seebotrunlink",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SeeBotRun - Link",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/seebotrunlink/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Create links dynamically for your SeeBotRun Link account."
                }
            },
            {
                "name": "shared_seektable",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SeekTable",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/seektable/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Generates tabular reports saved in your SeekTable account."
                }
            },
            {
                "name": "shared_seismic",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/seismic/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Seismic is the leading sales enablement platform. By leveraging Seismic in your flows and power apps you can create rich workflow processes and business applications to increase business productivity and effectiveness."
                }
            },
            {
                "name": "shared_seismicconfiguration",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic Configuration",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/seismicconfiguration/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Seismic configuration connector provides set of actions required for adding or updating content properties, fetching teamsites and updating email opt-outs."
                }
            },
            {
                "name": "shared_seismiccontentdiscov",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic Content Discovery",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/seismiccontentdiscov/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Seismic content discovery connector provides set of actions required for searching contents in various repositories like library, workspace, recents, favorites and predictive contents."
                }
            },
            {
                "name": "shared_seismicengagement",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic Engagement",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/seismicengagement/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Seismic engagement connector provides set of actions required for delivering content from content repository to other and generating livesend link."
                }
            },
            {
                "name": "shared_seismiclibrary",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic Library",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/seismiclibrary/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Seismic Library connector includes actions related to adding, updating, deleting, publishing, and downloading Library content."
                }
            },
            {
                "name": "shared_seismiclivedoc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic Livedoc",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/seismiclivedoc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Seismic Livedoc connector provides set of actions required for generating livedocs."
                }
            },
            {
                "name": "shared_seismicplanner",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic Planner",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/seismicplanner/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Seismic planner connector provides a set of actions to interact with enablement planner projects, tasks and requests."
                }
            },
            {
                "name": "shared_seismicworkspace",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Seismic Workspace",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/seismicworkspace/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Seismic workspace connector includes actions related to adding, updating, deleting, and downloading workspace content."
                }
            },
            {
                "name": "shared_sendgrid",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SendGrid",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/sendgrid/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "SendGrid Connection Provider lets you send email and manage recipient lists."
                }
            },
            {
                "name": "shared_sendmode",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Sendmode",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/sendmode/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to your Sendmode Business Messaging account and Send SMS messages instantly to any country."
                }
            },
            {
                "name": "shared_serverless360",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Serverless360 BAM & Tracking",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/serverless360/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ServerLess360 Custom connector helps you track your business processes."
                }
            },
            {
                "name": "shared_service-now",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ServiceNow",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/olshyron/aadil_plugins/1.0.1667.3502/service-now/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ServiceNow improves service levels, energizes employees, and enables your enterprise to work at lightspeed. Create, read and update records stored within ServiceNow including Incidents, Questions, Users and more."
                }
            },
            {
                "name": "shared_servicebus",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Service Bus",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/servicebus/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "connectionstringauth",
                                "uiDefinition": {
                                    "displayName": "Access Key",
                                    "description": "Provide connection string to access your Azure Service Bus."
                                },
                                "parameters": {
                                    "connectionString": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Connection String",
                                            "description": "Azure Service Bus Connection String",
                                            "tooltip": "Provide Azure Service Bus Connection String",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "aadAuth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your Azure Service Bus."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "9375045e-1161-46c7-be76-4feb94bdcbbb",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/servicebus",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://servicebus.azure.net",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://servicebus.azure.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login with your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "namespaceEndpoint": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Namespace Endpoint",
                                            "description": "Provide Service Bus Namespace Endpoint (e.g: sb://testsb.servicebus.windows.net/)",
                                            "tooltip": "Provide Service Bus Namespace Endpoint (e.g: sb://testsb.servicebus.windows.net/)",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to Azure Service Bus to send and receive messages. You can perform actions such as send to queue, send to topic, receive from queue, receive from subscription, etc."
                }
            },
            {
                "name": "shared_servicedeskpluscloud",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ServiceDesk Plus Cloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/servicedeskpluscloud/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ManageEngine ServiceDesk Plus Cloud is a ITIL compliant comprehensive help desk with integrated asset and project management capabilities."
                }
            },
            {
                "name": "shared_serviceobjects",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Service Objects",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/serviceobjects/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Cleanse, validate, and enhance contact data. Our tools validate and cross-verify a contact's name, location, phone, email address and device against hundreds of authoritative data sources."
                }
            },
            {
                "name": "shared_serwersms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SerwerSMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/serwersms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SerwerSMS allows sending and receiving SMS messages. Our platform has the function of both single and mass SMS sending. Sending messages has never been so easy, fast and effective."
                }
            },
            {
                "name": "shared_sftp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SFTP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3523/sftp/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "SFTP (SSH File Transfer Protocol) is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed by the Internet Engineering Task Force (IETF) as an extension of the Secure Shell protocol (SSH) version 2.0 to provide secure file transfer capabilities."
                }
            },
            {
                "name": "shared_sftpwithssh",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SFTP - SSH",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/henryorsborn/partial-builds/asev3migrations-with-resourceTemplate/1.0.1653.3403/sftpwithssh/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "SFTP (SSH File Transfer Protocol) is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed by the Internet Engineering Task Force (IETF) as an extension of the Secure Shell protocol (SSH) version 2.0 to provide secure file transfer capabilities."
                }
            },
            {
                "name": "shared_shareeffect",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Share-Effect",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/shareeffect/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Share-Effect helps automating business processes and organize information in Office 365. With our Connector you can begin using data from other systems as metadata in SharePoint and generate documents. Visit flowconnector.ShareEffect.net for more information and pricing."
                }
            },
            {
                "name": "shared_sharepointonline",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SharePoint",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/sharepointonline/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "SharePoint helps organizations share and collaborate with colleagues, partners, and customers. You can connect to SharePoint Online or to an on-premises SharePoint 2013 or 2016 farm using the On-Premises Data Gateway to manage documents and list items."
                }
            },
            {
                "name": "shared_shifts",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Shifts for Microsoft Teams",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/shifts/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "For managers, plan shift schedules, broadcast open and unfilled shifts to your team. For team members, easily view your shifts and make schedule-change requests (swap/offer/time off)."
                }
            },
            {
                "name": "shared_shop",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Shop (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/shop/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Search for millions of products from the world's greatest brands."
                }
            },
            {
                "name": "shared_shorturl",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Short URL",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/shorturl/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Create, update or delete Short URL (Short Links, Tiny URLs) using a custom domain with Click Analytics for any link using the Short URL connector. The connector is a companion of a Short URL for SharePoint. Short URL allows the creation and use of vanity and shortcut hyperlinks fully integrated within SharePoint!"
                }
            },
            {
                "name": "shared_showcaseworkshop",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Showcase Workshop",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/showcaseworkshop/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Showcase Workshop turns your devices into powerful sales, presentation, and training toolkits."
                }
            },
            {
                "name": "shared_sigmaconsocr",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Sigma Conso CR",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/sigmaconsocr/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Sigma Conso Consolidation & Reporting Connector provides a set of APIs to interact with your Consolidation & Reporting instances. Easily transfer data, trigger actions and automate workflows in Sigma Conso. Go beyond the limits of traditional CPM solutions."
                }
            },
            {
                "name": "shared_signi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Signi.com",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/signi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Sign your documents digitally with Signi.com and streamline your paperwork. Powered by NETWORG."
                }
            },
            {
                "name": "shared_signinghub",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SigningHub",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/signinghub/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SigningHub is a complete solution for document approval workflows, advanced digital signatures and document status tracking. It is designed to quickly optimize the way businesses deliver, review, approve and sign their business documents"
                }
            },
            {
                "name": "shared_signl4",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Derdack SIGNL4",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/signl4/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Derdack SIGNL4 is a mobile notification app to reliably notify operations teams on duty and boost their productivity."
                }
            },
            {
                "name": "shared_signl4mobilealerting",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SIGNL4 - Mobile Alerting",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1657/1.0.1657.3443/signl4mobilealerting/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SIGNL4 offers critical mobile alerting, incident response and service dispatching for operating critical infrastructure. It alerts you persistently via app push, SMS text and voice calls including tracking, escalation, collaboration and duty planning."
                }
            },
            {
                "name": "shared_signnow",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SignNow",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/signnow/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SignNow makes it easy to sign, send, and manage documents anywhere on any device with a simple and secure electronic signature solution."
                }
            },
            {
                "name": "shared_signrequest",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SignRequest",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/signrequest/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SignRequest is a secure and legally binding e-signature tool that enables you and your partners to sign contracts and other documents fast and without the hassle of having to print, sign and scan. "
                }
            },
            {
                "name": "shared_skypeforbiz",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Skype for Business Online",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/skypeforbiz/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Messaging, meetings, and screen sharing all in one app that works with Office."
                }
            },
            {
                "name": "shared_skypointcloud",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SkyPoint Cloud",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/skypointcloud/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SkyPoint Cloud is a Modern Data Stack Platform that allows you to centralize your data and create a single source of truth breaking down data silos and getting more value from your data. SkyPoint connector provides a set of endpoints to work with SkyPoint platform instances and tables."
                }
            },
            {
                "name": "shared_slack",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Slack",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/slack/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Slack is a team communication tool, that brings together all of your team communications in one place, instantly searchable and available wherever you go."
                }
            },
            {
                "name": "shared_slascone",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Slascone",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/slascone/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect any third-party software to your Slascone Enviroment via this connector."
                }
            },
            {
                "name": "shared_smarp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Smarp",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/smarp/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Smarp is a mobile-first employee communication platform to drive alignment, productivity and champion your brand. Connect to Smarp to manage your posts."
                }
            },
            {
                "name": "shared_smartcommondemanddoc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SmartCOMM DocGen",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/smartcommondemanddoc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Smart Communications is a leading technology company focused on helping businesses engage in more meaningful customer conversations.\n\nThe SmartCOMM On-Demand Doc-Gen Connector includes a pre-built integration for producing omnichannel customer communications. The connector provides RESTful webservice calls to SmartCOMM for on-demand use cases."
                }
            },
            {
                "name": "shared_smartdialog",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SmartDialog",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/smartdialog/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SmartDialog is a platform used to send and receive SMS- and WhatsApp messages. It offers a wide variety of smart messaging services."
                }
            },
            {
                "name": "shared_smartsheet",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Smartsheet",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/smartsheet/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Smartsheet is a powerful work management and collaboration tool that lets you easily track and manage your work so you and your team can be more productive than ever. Use it to collaborate with others, track progress on any project, automate processes, and better structure your work."
                }
            },
            {
                "name": "shared_sms77io",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "sms77io",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1559/1.0.1559.2723/sms77io/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Sms77.io offers you the possibility to send SMS, text2voice messages, perform home register lookups, mobile number portability status lookups, phone number formats and much more."
                }
            },
            {
                "name": "shared_smsapi",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SMSAPI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/smsapi/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SMSAPI is a global professional SMS provider and a part of industry-leading LINK Mobility Group. We excel at providing easy and powerful tools, and Microsoft Power-Up has become one of them. Use this connector to send SMS messages globaly and manage your SMSAPI.com contact database.\nIn order to use this Power-Up, you need to have an SMSAPI.com account. SMSAPI.com is for professional use only."
                }
            },
            {
                "name": "shared_smslink",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SMSLink",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1546/1.0.1546.2665/smslink/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SMSLink is a SMS provider that provides integrated services such as SMS Marketing, SMS Gateway and Mail to SMS."
                }
            },
            {
                "name": "shared_smtp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SMTP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3523/smtp/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "SMTP (Simple Mail Transfer Protocol) is an internet standard for email supported by most email processing servers. Connect to SMTP to send email."
                }
            },
            {
                "name": "shared_sociabble",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Sociabble",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/sociabble/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Sociabble delivers top of the line enterprise social media solutions for employee advocacy, social selling, internal communication and Employee Engagement. Employees are better informed, improve their digital footprint."
                }
            },
            {
                "name": "shared_soft1",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Soft1",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1537/1.0.1537.2613/soft1/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "The Soft1 Connector provides an API to work with Soft1 objects"
                }
            },
            {
                "name": "shared_softools",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Softools",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/softools/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Softools is a web-based application platform where off-the-shelf and custom apps can be designed, built and deployed in hours."
                }
            },
            {
                "name": "shared_sparkpost",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SparkPost",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1597/1.0.1597.3005/sparkpost/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "SparkPost API allows you to manage email recipient lists and send emails."
                }
            },
            {
                "name": "shared_spinpanel",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Spinpanel",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1563/1.0.1563.2732/spinpanel/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Spinpanel, allows you to sell, deploy, manage and automate Microsoft Cloud solutions"
                }
            },
            {
                "name": "shared_springglobal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Spring Global",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/springglobal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The connector contains a trigger to handle surver execution events and methods get relevant information about survey execution and users"
                }
            },
            {
                "name": "shared_sql",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SQL Server",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/sql/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "oauthSP",
                                "uiDefinition": {
                                    "displayName": "Service principal (Azure AD application)",
                                    "description": "Use Azure Active Directory application to access your SQL database."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/sql",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://database.windows.net/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "client_credentials"
                                                },
                                                "resourceUri": {
                                                    "value": "https://database.windows.net/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Sign in with your Azure Active Directory credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token:TenantId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "schema": {
                                                "description": "The tenant ID of the Azure Active Directory application",
                                                "type": "string"
                                            },
                                            "displayName": "Tenant",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Client ID",
                                            "schema": {
                                                "type": "string",
                                                "description": "Client (or Application) ID of your Azure Active Directory application"
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Client Secret",
                                            "schema": {
                                                "type": "securestring",
                                                "description": "Client secret of your Azure Active Directory application"
                                            },
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "oauth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your SQL database."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "7ab7862c-4c57-491e-8a45-d52a7e023983",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/sql",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://database.windows.net/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "resourceUri": {
                                                    "value": "https://database.windows.net/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Sign in with your Azure Active Directory credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "encryptConnection": {
                                        "type": "bool",
                                        "uiDefinition": {
                                            "displayName": "Encrypt Connection",
                                            "description": "Encrypt Connection",
                                            "tooltip": "Encrypt Connection",
                                            "constraints": {
                                                "hidden": "true",
                                                "required": "false",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "privacySetting": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "None"
                                            },
                                            {
                                                "value": "Private"
                                            },
                                            {
                                                "value": "Organizational"
                                            },
                                            {
                                                "value": "Public"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Privacy Setting",
                                            "description": "Privacy Setting",
                                            "tooltip": "Privacy Setting",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ],
                                                "allowedValues": [
                                                    {
                                                        "name": "None",
                                                        "value": "None"
                                                    },
                                                    {
                                                        "name": "Private",
                                                        "value": "Private"
                                                    },
                                                    {
                                                        "name": "Organizational",
                                                        "value": "Organizational"
                                                    },
                                                    {
                                                        "name": "Public",
                                                        "value": "Public"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "sqlAuthentication",
                                "uiDefinition": {
                                    "displayName": "SQL Server Authentication",
                                    "description": "Use an account name and password to access your SQL database."
                                },
                                "parameters": {
                                    "server": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "SQL server name",
                                            "description": "Specify the name of the SQL server (server[:port])",
                                            "tooltip": "SQL server name",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "database": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "SQL database name",
                                            "description": "SQL database name",
                                            "tooltip": "SQL database name",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "description": "Username credential",
                                            "tooltip": "Username credential",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "clearText": true,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "description": "Password credential",
                                            "tooltip": "Password credential",
                                            "constraints": {
                                                "tabIndex": 4,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "gateway": {
                                        "type": "gatewaySetting",
                                        "gatewaySettings": {
                                            "dataSourceType": "sql",
                                            "credentialType": "Basic",
                                            "connectionDetails": [
                                                "server",
                                                "database"
                                            ]
                                        },
                                        "uiDefinition": {
                                            "displayName": "Gateway",
                                            "description": "On-prem gateway (see https://docs.microsoft.com/data-integration/gateway for more details)",
                                            "tooltip": "On-prem gateway",
                                            "constraints": {
                                                "tabIndex": 5,
                                                "required": "false"
                                            }
                                        }
                                    },
                                    "encryptConnection": {
                                        "type": "bool",
                                        "uiDefinition": {
                                            "displayName": "Encrypt Connection",
                                            "description": "Encrypt Connection",
                                            "tooltip": "Encrypt Connection",
                                            "constraints": {
                                                "hidden": "true",
                                                "tabIndex": 6,
                                                "required": "false",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "privacySetting": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "None"
                                            },
                                            {
                                                "value": "Private"
                                            },
                                            {
                                                "value": "Organizational"
                                            },
                                            {
                                                "value": "Public"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Privacy Setting",
                                            "description": "Privacy Setting",
                                            "tooltip": "Privacy Setting",
                                            "constraints": {
                                                "tabIndex": 7,
                                                "required": "false",
                                                "hidden": "true",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ],
                                                "allowedValues": [
                                                    {
                                                        "name": "None",
                                                        "value": "None"
                                                    },
                                                    {
                                                        "name": "Private",
                                                        "value": "Private"
                                                    },
                                                    {
                                                        "name": "Organizational",
                                                        "value": "Organizational"
                                                    },
                                                    {
                                                        "name": "Public",
                                                        "value": "Public"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "windowsAuthentication",
                                "uiDefinition": {
                                    "displayName": "Windows Authentication",
                                    "description": "Use an on-premise Active Directory account name and password to access your SQL database."
                                },
                                "parameters": {
                                    "server": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "SQL server name",
                                            "description": "Specify the name of the SQL server (server[:port])",
                                            "tooltip": "SQL server name",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "database": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "SQL database name",
                                            "description": "SQL database name",
                                            "tooltip": "SQL database name",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "description": "Username credential",
                                            "tooltip": "Username credential",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "clearText": true,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "description": "Password credential",
                                            "tooltip": "Password credential",
                                            "constraints": {
                                                "tabIndex": 4,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "gateway": {
                                        "type": "gatewaySetting",
                                        "gatewaySettings": {
                                            "dataSourceType": "sql",
                                            "credentialType": "Windows",
                                            "connectionDetails": [
                                                "server",
                                                "database"
                                            ]
                                        },
                                        "uiDefinition": {
                                            "displayName": "Gateway",
                                            "description": "On-prem gateway (see https://docs.microsoft.com/data-integration/gateway for more details)",
                                            "tooltip": "On-prem gateway",
                                            "constraints": {
                                                "tabIndex": 5,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "encryptConnection": {
                                        "type": "bool",
                                        "uiDefinition": {
                                            "displayName": "Encrypt Connection",
                                            "description": "Encrypt Connection",
                                            "tooltip": "Encrypt Connection",
                                            "constraints": {
                                                "hidden": "true",
                                                "tabIndex": 6,
                                                "required": "false",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ]
                                            }
                                        }
                                    },
                                    "privacySetting": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "None"
                                            },
                                            {
                                                "value": "Private"
                                            },
                                            {
                                                "value": "Organizational"
                                            },
                                            {
                                                "value": "Public"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Privacy Setting",
                                            "description": "Privacy Setting",
                                            "tooltip": "Privacy Setting",
                                            "constraints": {
                                                "tabIndex": 7,
                                                "required": "false",
                                                "hidden": "true",
                                                "capability": [
                                                    "cloud",
                                                    "gateway"
                                                ],
                                                "allowedValues": [
                                                    {
                                                        "name": "None",
                                                        "value": "None"
                                                    },
                                                    {
                                                        "name": "Private",
                                                        "value": "Private"
                                                    },
                                                    {
                                                        "name": "Organizational",
                                                        "value": "Organizational"
                                                    },
                                                    {
                                                        "name": "Public",
                                                        "value": "Public"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "windowsAuthenticationNonShared",
                                "uiDefinition": {
                                    "displayName": "Windows Authentication (Non Shared)",
                                    "description": "Use an on-premise Active Directory account name and password to access your SQL database."
                                },
                                "parameters": {
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "description": "Username credential",
                                            "tooltip": "Username credential",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "clearText": true,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "description": "Password credential",
                                            "tooltip": "Password credential",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "gateway": {
                                        "type": "gatewaySetting",
                                        "gatewaySettings": {
                                            "dataSourceType": "sql",
                                            "credentialType": "Windows",
                                            "connectionDetails": [
                                                "server",
                                                "database"
                                            ]
                                        },
                                        "uiDefinition": {
                                            "displayName": "Gateway",
                                            "description": "On-prem gateway",
                                            "tooltip": "On-prem gateway",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "required": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft SQL Server is a relational database management system developed by Microsoft. Connect to SQL Server to manage data. You can perform various actions such as create, update, get, and delete on rows in a table."
                }
            },
            {
                "name": "shared_sqldw",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure SQL Data Warehouse",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3461/sqldw/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used"
                        },
                        "values": [
                            {
                                "name": "sqlAuthentication",
                                "uiDefinition": {
                                    "displayName": "Basic username and password",
                                    "description": "The username and password and such"
                                },
                                "parameters": {
                                    "server": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Azure SQL Data Warehouse server name",
                                            "description": "Azure SQL Data Warehouse server name",
                                            "tooltip": "Azure SQL Data Warehouse server name",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "database": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Azure SQL Data Warehouse database name",
                                            "description": "Azure SQL Data Warehouse database name",
                                            "tooltip": "Azure SQL Data Warehouse database name",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "authType": {
                                        "type": "string",
                                        "allowedValues": [
                                            {
                                                "value": "basic"
                                            }
                                        ],
                                        "uiDefinition": {
                                            "displayName": "Authentication Type to connect to your Azure SQL Data Warehouse database",
                                            "description": "Authentication type to connect to your Azure SQL Data Warehouse database",
                                            "tooltip": "Authentication type to connect to your Azure SQL Data Warehouse database",
                                            "constraints": {
                                                "tabIndex": 3,
                                                "required": "false",
                                                "allowedValues": [
                                                    {
                                                        "text": "Basic",
                                                        "value": "basic"
                                                    }
                                                ],
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Username",
                                            "description": "Username credential",
                                            "tooltip": "Username credential",
                                            "constraints": {
                                                "tabIndex": 4,
                                                "clearText": true,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "description": "Password credential",
                                            "tooltip": "Password credential",
                                            "constraints": {
                                                "tabIndex": 5,
                                                "required": "true",
                                                "capability": [
                                                    "cloud"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": true
                                }
                            },
                            {
                                "name": "oauth",
                                "uiDefinition": {
                                    "displayName": "Azure AD Integrated",
                                    "description": "Use Azure Active Directory to access your SQL pools."
                                },
                                "parameters": {
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "7ab7862c-4c57-491e-8a45-d52a7e023983",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/sqldw",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://database.windows.net",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "grantType": {
                                                    "value": "code"
                                                },
                                                "resourceUri": {
                                                    "value": "https://database.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Login your Credentials",
                                            "description": "Sign in with your Azure Active Directory credentials",
                                            "tooltip": "Provide Azure Active Directory credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Azure SQL Data Warehouse is a relational database management system developed by Microsoft. Connect to Azure SQL Data Warehouse to view your data."
                }
            },
            {
                "name": "shared_staffbase",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Staffbase",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1613/1.0.1613.3125/staffbase/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With the Staffbase Connector, you bridge disparate tools and systems and integrate the Staffbase platform into your automated workflows. That include your employee app or intranet to automate processes, run tasks on a schedule, or notify users when events occur."
                }
            },
            {
                "name": "shared_staffcircle",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "StaffCircle",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1546/1.0.1546.2665/staffcircle/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "StaffCircle is an employee success platform which combines company culture with Performance Management in order to create high performing teams even in distributed work environments. StafffCircle includes Objective, Reviews, Values and Feedback linked to your competency framework. Drive engagement and performance with deep insight."
                }
            },
            {
                "name": "shared_staffhub",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft StaffHub",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/staffhub/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft StaffHub is a cloud-based platform that works across all your devices. It enables firstline workers and their managers to manage time, communicate with their teams, and share content."
                }
            },
            {
                "name": "shared_starrezrestv1",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "StarRez REST v1",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/starrezrestv1/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The StarRez resident and property management platform is the perfect tool to help your community thrive. With the StarRez REST API, you can automate regular tasks, import and export data and streamline your business processes."
                }
            },
            {
                "name": "shared_stormboard",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Stormboard",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/stormboard/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Stormboard Connector"
                }
            },
            {
                "name": "shared_strategicportfoliomanager",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Strategic Portfolio Manager",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3485/strategicportfoliomanager/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Strategic Portfolio Manager enables you to continuously connect, align and orchestrate all investments with strategies to drive business agility more effectively. It connects disparate silos across the enterprise and provides 360 degrees of insight to help ensure that all investments are derived from – and continuously align with – strategic priorities. Connect to Strategic Portfolio Manager to plan, manage, and adjust your initiatives, projects, epics and more."
                }
            },
            {
                "name": "shared_stripe",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Stripe",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1516/1.0.1516.2558/stripe/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Stripe allows private individuals and businesses to accept payments over the internet. You can track customers, orders, invoices and more."
                }
            },
            {
                "name": "shared_survalyzereu",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Survalyzer EU",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/survalyzereu/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Survalyzer connector provides simplified access to all API capabilities of the EU data center."
                }
            },
            {
                "name": "shared_survalyzerswiss",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Survalyzer Swiss",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/survalyzerswiss/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Survalyzer connector provides simplified access to all API capabilities of the Swiss data center."
                }
            },
            {
                "name": "shared_survey123",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Survey123",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1650/1.0.1650.3374/survey123/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "ArcGIS Survey123 is a simple and intuitive form-centric data gathering solution that makes creating, sharing, and analyzing surveys possible in just three easy steps: 1) Ask Questions; 2) Get the Answers; 3) Make the best Decisions."
                }
            },
            {
                "name": "shared_surveymonkey",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "SurveyMonkey",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1660/1.0.1660.3465/surveymonkey/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "SurveyMonkey is the world's leading provider of web-based survey solutions. These solutions are used by companies, organizations, and individuals to gather the insights they need to make more informed decisions."
                }
            },
            {
                "name": "shared_tago",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tago",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/tago/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Tago provides easy connection of electronic devices with external data to drive smarter decisions using contextual analysis."
                }
            },
            {
                "name": "shared_talkdesk",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Talkdesk",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/talkdesk/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Talkdesk provides a better way for organizations to intelligently unlock the promise and potential of great customer experience with end-to-end cloud solutions. Connect to other external systems already supported by Microsoft to be able to execute actions in Talkdesk like create an agent, create a callback, get a user by email, etc. or trigger your own flows when a contact is created/updated, note is created, inbound call starts, etc. in Talkdesk."
                }
            },
            {
                "name": "shared_tallyfy",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tallyfy",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/tallyfy/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Tallyfy is beautiful workflow software that helps you create, track and scale any repeatable process. It helps you eliminate the use of flowcharts, forms and emails by digitizing manual business processes and approval workflows."
                }
            },
            {
                "name": "shared_talxisdatafeed",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TALXIS Data Feed",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/talxisdatafeed/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TALXIS Data Feed is a complex service aggregating data from multiple connectors."
                }
            },
            {
                "name": "shared_taqnyat",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Taqnyat",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/taqnyat/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Taqnyat integration for short messages \"SMS\""
                }
            },
            {
                "name": "shared_tdox",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TDox",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/tdox/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TDox Connector for customer, products and list items"
                }
            },
            {
                "name": "shared_teamforms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Team Forms",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/teamforms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Teams Forms brings digital forms into Microsoft Teams. The software will empower your teams to build and deliver forms from within the productivity tools that they already know and trust. Unlike many other forms solutions on the market, Team Forms talks directly with your Teams SharePoint so that data captured by forms remains in your ownership and never leaves your trusted office 365 environment."
                }
            },
            {
                "name": "shared_teams",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Teams",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3527/teams/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Teams enables you to get all your content, tools and conversations in the Team workspace with Office 365."
                }
            },
            {
                "name": "shared_teamsspirit",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Teams-Spirit",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1647/1.0.1647.3361/teamsspirit/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Teams-Spirit Connector enables you to connect your Teams-Spirit Subscription to your flows."
                }
            },
            {
                "name": "shared_teamsvirtualevents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Teams Virtual Events",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/luckykhaidem/fasttrack/teamsvirtualeventhotfix/1.0.1669.3514/teamsvirtualevents/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Teams Virtual Events allows you to access Virtual Event data and be notified of changes."
                }
            },
            {
                "name": "shared_teamwork",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Teamwork Projects",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/teamwork/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Keep all your team's tasks in one place. Collaborate and work in real time for real results. Teamwork Projects is a powerful and simple way to collaborate with your team."
                }
            },
            {
                "name": "shared_tegolysign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "tegolySIGN",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/tegolysign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Automate your signatures with the tegolySIGN connector. You can transform manual processes into fully digital ones. Integrate tegolySIGN functions into your favorite applications and create fully automated signature workflows."
                }
            },
            {
                "name": "shared_telephonyxtendedsrv",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Telephony Xtended Serv Interf",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/telephonyxtendedsrv/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Integrate with BluIP's telephony system to take your call to the next level. Telephony Xtended Service Interface (XSI)."
                }
            },
            {
                "name": "shared_telesignsms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TeleSign SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1554/1.0.1554.2707/telesignsms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TeleSign SMS enables apps to send global text messages. Add as another communications channel to send alerts, reminders, notifications, invites, marketing messages and more."
                }
            },
            {
                "name": "shared_tendocsdocuments",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tendocs Documents",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/tendocsdocuments/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A fast, simple, and capable service to automate the creation of Office documents based on text, images, documents and tables. More Information: https://www.tendocs.com"
                }
            },
            {
                "name": "shared_teradata",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Teradata",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/teradata/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Teradata Database is a relational database management system from Teradata Corporation, typically used to support large data warehousing operations. Connect to on-premise Teradata database to read data from tables."
                }
            },
            {
                "name": "shared_tesseronasmbasicdata",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tesseron Basic Data",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3505/tesseronasmbasicdata/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows you to create, edit and search enterprises and contacts in your Tesseron Instance."
                }
            },
            {
                "name": "shared_tesseronasmticket",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tesseron ASM Ticket",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/tesseronasmticket/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows you to create, edit and search Tickets in your Tesseron ASM Instance."
                }
            },
            {
                "name": "shared_tesseronasset",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tesseron Asset",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/tesseronasset/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Tesseron asset connector allows you to create, update assets and to request asset information."
                }
            },
            {
                "name": "shared_tesseroninvoice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tesseron Invoice",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1652/1.0.1652.3394/tesseroninvoice/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows you to create activity recordings and position notes."
                }
            },
            {
                "name": "shared_textrequest",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Text Request",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/textrequest/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Text Request is a business texting platform that helps businesses turn conversations into customers."
                }
            },
            {
                "name": "shared_thebotplatform",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "The Bot Platform",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/thebotplatform/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect The Bot Platform's bots to any application, send messages to bot users, set attribute values using your existing bots at The Bot Platform"
                }
            },
            {
                "name": "shared_theeventscalendar",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "The Events Calendar",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/theeventscalendar/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use Event Automator to be able to manage, create, and inform your events with the free with the WordPress plugin The Events Calendar, or upgrade to Pro to unlock recurring events, views, premium support, and more."
                }
            },
            {
                "name": "shared_theittipster",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "The IT Tipster",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/theittipster/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This is a connector to generate barcodes and QR Codes."
                }
            },
            {
                "name": "shared_ticketingevents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ticketing.events",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1570/1.0.1570.2764/ticketingevents/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector will enable you to add attendees and tickets to your Ticketing.events account."
                }
            },
            {
                "name": "shared_tikit",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tikit",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1611/1.0.1611.3104/tikit/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Extend conversational ticketing built for Microsoft Teams with activities to create tickets in response to events or update tickets with more information as context changes."
                }
            },
            {
                "name": "shared_tilkee",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tilkee",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/tilkee/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Tilkee is an online platform that makes cross-functional collaboration happen. Combining deep knowledge of sales enablement with augmented intelligence, the vision of the team behind Tilkee is to align marketing with sales and guide Sales, Product Marketing, Channel Enablement, and Customer Success teams towards digital transformation."
                }
            },
            {
                "name": "shared_timeghost",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "timeghost",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/timeghost/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "timeghost is a dedicated Microsoft 365 / Office 365 solution that integrates perfectly with your work environment. Generate time reports, invoices and other documents using the timeghost connector."
                }
            },
            {
                "name": "shared_tldrip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TLDR",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/tldrip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TLDR helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload. Summarize any URL or text using state-of-the-art abstractive and extractive summarization models."
                }
            },
            {
                "name": "shared_todo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft To-Do (Business)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/todo/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft To-Do is an intelligent task management app that makes it easy to plan and manage your day. Connect to Microsoft To-Do to manage your tasks from various services. You can perform actions such as creating tasks."
                }
            },
            {
                "name": "shared_todoconsumer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft To-Do (Consumer)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1650/1.0.1650.3374/todoconsumer/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft To-Do is an intelligent task management app that makes it easy to plan and manage your day. Connect to Microsoft To-Do to manage your tasks from various services. You can perform actions such as creating tasks."
                }
            },
            {
                "name": "shared_todoist",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Todoist",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/todoist/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Todoist is an online task management app and todo list. With Todoist, users can organize, schedule, maintain and prioritize personal tasks."
                }
            },
            {
                "name": "shared_toodledo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Toodledo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1542/1.0.1542.2635/toodledo/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Toodledo is a powerful online productivity tool. Manage your to-do list by creating and updating tasks."
                }
            },
            {
                "name": "shared_tpcportal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TPC Portal",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1546/1.0.1546.2665/tpcportal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Portal Connector (TPC) is the leading alternative for delivering Customer Engagement portals connected to Microsoft Dynamics 365. The TPC Portal Connector enables organizations and businesses to capture triggers based on the interaction of portal users within The Portal Connector. The Connector also enables administrators to execute actions within The Portal Connector like assigning roles, creating content, and managing common processes."
                }
            },
            {
                "name": "shared_tractionguest",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Traction Guest",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1546/1.0.1546.2665/tractionguest/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Traction Guest is a leading visitor management solution that tracks visitor invites and sign ins. Actions taken in Traction Guest such as a visitor signing in, an invite being sent by a host, or a visitor matching on a watchlist can trigger actions in other connectors."
                }
            },
            {
                "name": "shared_transform2all",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Transform2All",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1559/1.0.1559.2722/transform2all/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Transform2All is able to apply transformation schemas to transform the representation of your data from one format (JSON, XML, TXT, ...) to another."
                }
            },
            {
                "name": "shared_translatorv2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Translator V2",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/translatorv2/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Microsoft Translator lets you translate text across multiple languages."
                }
            },
            {
                "name": "shared_trello",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Trello",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1672/1.0.1672.3545/trello/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Trello gives you perspective over all your projects, at work and at home. It is an easy, free, flexible, and visual way to manage your projects and organize anything. Connect to Trello to manage your boards, lists and cards."
                }
            },
            {
                "name": "shared_tribal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tribal",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1650/1.0.1650.3374/tribal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Tribal Edge modules, such as Tribal Admissions, provide staff and students the tools they need to succeed in the world of education. Connect to Tribal Edge modules using the Tribal Connector to manage information, create clearance checks for applications, and much more."
                }
            },
            {
                "name": "shared_triggercmd",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TRIGGERcmd",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1554/1.0.1554.2707/triggercmd/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "To run commands on your computers:\n1 - Create an account at triggercmd.com.\n2 - Install the TRIGGERcmd agent on your computer.\n3 - Setup commands using the agent software.\n4 - Trigger those commands with Microsoft Power Automate."
                }
            },
            {
                "name": "shared_truedialogsms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TrueDialog SMS",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1601/1.0.1601.3047/truedialogsms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TrueDialog SMS connector gives an ability to send mass and individual text messages via long code and short code."
                }
            },
            {
                "name": "shared_trustual",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Trustual",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1546/1.0.1546.2665/trustual/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Trustual gives evidence of integrity and time for your documents and files. Learn more in trustual.com."
                }
            },
            {
                "name": "shared_tulip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Tulip",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/tulip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to your Tulip instance to read, update and create records in Tulip Tables. You will need an active Tulip account and access to set up a bot"
                }
            },
            {
                "name": "shared_tuxmailer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TuxMailer",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1612/1.0.1612.3109/tuxmailer/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TuxMailer is a tool for email validation and marketing services"
                }
            },
            {
                "name": "shared_twilio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Twilio",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/twilio/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Twilio enables apps to send and receive global SMS, MMS and IP messages."
                }
            },
            {
                "name": "shared_twitter",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "X",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1670/1.0.1670.3526/twitter/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Authentication Type",
                            "description": "Type of authentication to be used."
                        },
                        "values": [
                            {
                                "name": "byoa",
                                "uiDefinition": {
                                    "displayName": "Bring your own application",
                                    "description": "Sign in using your own Twitter app. For more details see 'Authentication and Bring your own application' section on this page."
                                },
                                "parameters": {
                                    "token-byoa": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "Twitter",
                                            "scopes": [],
                                            "redirectMode": "Global",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect",
                                            "properties": {
                                                "IsFirstParty": "False",
                                                "IsOnbehalfofLoginSupported": false
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Sign in with Twitter Credentials",
                                            "description": "Sign in with Twitter Credentials",
                                            "tooltip": "Provide Twitter Credentials",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "token-byoa:clientId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Consumer Key",
                                            "description": "Consumer key of your Twitter application",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "false"
                                            }
                                        }
                                    },
                                    "token-byoa:clientSecret": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Consumer Secret",
                                            "description": "Client secret of your Twitter application",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "False"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "X, formerly known as Twitter, is an online social networking service that enables users to send and receive short posts. Connect to X to manage your posts. You can perform various actions such as send posts, search, view followers, etc."
                }
            },
            {
                "name": "shared_txtsync",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "TxtSync",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1547/1.0.1547.2676/txtsync/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "TxtSync enables applications to send and receive global SMS while tracking open rates and delivery reports. Please go to https://txtsync.com/microsoft-flow for more information and to create your account"
                }
            },
            {
                "name": "shared_tyntec2fa",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "tyntec 2FA",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1547/1.0.1547.2676/tyntec2fa/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Tyntec Authentication is a tool for user-friendly two-factor authentication (2FA) with SMS and voice."
                }
            },
            {
                "name": "shared_tyntecportabilitycheck",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "tyntec Phone Verification",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1618/1.0.1618.3179/tyntecportabilitycheck/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Phone Verification service aims to determine validity, reachability and fraud risk of phone numbers."
                }
            },
            {
                "name": "shared_tyntecsms",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "tyntec SMS Business",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1618/1.0.1618.3179/tyntecsms/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Allows SMS communication channel using the tyntec Conversations API to expand your outreach potential"
                }
            },
            {
                "name": "shared_tyntecviber",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "tyntec Viber Business",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1618/1.0.1618.3179/tyntecviber/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Provides Viber communication channel using the tyntec Conversations API to expand your customer engagement"
                }
            },
            {
                "name": "shared_tyntecwa",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "tyntec WhatsApp Business",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/v-sriyen/FastrackTrainFeb10/1.0.1623.3201/tyntecwa/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Enables WhatsApp communication channel using the tyntec Conversations API to improve your communication ability"
                }
            },
            {
                "name": "shared_typeform",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Typeform",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/typeform/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Build beautiful, engaging, and conversational online forms, surveys, quizzes, landing pages, and much more with Typeform. "
                }
            },
            {
                "name": "shared_uberfreight",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Uber Freight",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/uberfreight/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Uber Freight is a logistics platform providing 24/7 access to truckload freight with instant quoting + booking, price transparency, and real time visibility."
                }
            },
            {
                "name": "shared_ubiqodbyskiply",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ubiqod by Skiply",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1559/1.0.1559.2723/ubiqodbyskiply/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Ubiqod provides a simple and powerful platform to connect your Skiply IoT buttons and Qods to third party platforms. This connector triggers a flow every time data is sent by any of the IoT-devices or Qods belonging to the configured group."
                }
            },
            {
                "name": "shared_uiflow",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Desktop flows",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/uiflow/icon.png",
                    "connectionParameterSets": {
                        "uiDefinition": {
                            "displayName": "Connect",
                            "description": "Type of connection to be used"
                        },
                        "values": [
                            {
                                "name": "azureRelay",
                                "uiDefinition": {
                                    "displayName": "Connect with username and password",
                                    "description": "Connect with username and password"
                                },
                                "parameters": {
                                    "targetId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Machine or machine group",
                                            "description": "Select the machine or machine group to connect to",
                                            "tooltip": "Select the machine or machine group to connect to",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "username": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Domain and username",
                                            "description": "Format as domainusername or username@domain.com",
                                            "credentialMapping": {
                                                "mappingName": "WindowsCredentials",
                                                "displayName": "Windows Credential (preview)",
                                                "tooltip": "Windows Credential",
                                                "values": [
                                                    {
                                                        "type": "UserPassword",
                                                        "credentialKeyName": "UsernameKey"
                                                    },
                                                    {
                                                        "type": "UserPasswordList",
                                                        "credentialKeyName": "UsernameArray"
                                                    }
                                                ]
                                            },
                                            "tooltip": "Username credential",
                                            "constraints": {
                                                "tabIndex": 2,
                                                "clearText": true,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "password": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Password",
                                            "description": "Password credential",
                                            "tooltip": "Password credential",
                                            "credentialMapping": {
                                                "mappingName": "WindowsCredentials",
                                                "displayName": "Windows Credential (preview)",
                                                "tooltip": "Windows Credential",
                                                "values": [
                                                    {
                                                        "type": "UserPassword",
                                                        "credentialKeyName": "PasswordKey"
                                                    },
                                                    {
                                                        "type": "UserPasswordList",
                                                        "credentialKeyName": "PasswordArray"
                                                    }
                                                ]
                                            },
                                            "constraints": {
                                                "tabIndex": 3,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "environment": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Environment id",
                                            "description": "Environment id",
                                            "tooltip": "Environment id",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "xrmInstanceUri": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "XRM instance uri",
                                            "description": "The XRM instance uri",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "agentPort": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Agent Http Port",
                                            "description": "The agent http port",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "encryptedCredentials": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Encrypted credentials",
                                            "description": "Encrypted credentials",
                                            "tooltip": "Encrypted credentials",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "primaryEncryptingKeyId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Encrypting key id",
                                            "description": "Encrypting key id",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "secondaryEncryptedCredentials": {
                                        "type": "securestring",
                                        "uiDefinition": {
                                            "displayName": "Secondary encrypted credentials",
                                            "description": "Secondary encrypted credentials",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "secondaryEncryptingKeyId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Encrypting key id",
                                            "description": "Encrypting key id",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "connectionType": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Connection Type",
                                            "description": "Connection Type",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            },
                            {
                                "name": "passwordlessAttended",
                                "uiDefinition": {
                                    "displayName": "Connect with sign in - Attended",
                                    "description": "Connect with sign in - Attended"
                                },
                                "parameters": {
                                    "targetId": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Machine or machine group",
                                            "description": "Select the machine or machine group to connect to",
                                            "tooltip": "Select the machine or machine group to connect to",
                                            "constraints": {
                                                "tabIndex": 1,
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "environment": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Environment id",
                                            "description": "Environment id",
                                            "tooltip": "Environment id",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "xrmInstanceUri": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "XRM instance uri",
                                            "description": "The XRM instance uri",
                                            "constraints": {
                                                "required": "true",
                                                "hidden": "true"
                                            }
                                        }
                                    },
                                    "token": {
                                        "type": "oauthSetting",
                                        "oAuthSettings": {
                                            "identityProvider": "aadcertificate",
                                            "clientId": "af976486-926a-4efb-bd37-da0c24c986c0",
                                            "scopes": [],
                                            "redirectMode": "GlobalPerConnector",
                                            "redirectUrl": "https://global.consent.azure-apim.net/redirect/uiflow",
                                            "properties": {
                                                "IsFirstParty": "True",
                                                "AzureActiveDirectoryResourceId": "https://api.powerplatform.com/",
                                                "IsOnbehalfofLoginSupported": true
                                            },
                                            "customParameters": {
                                                "resourceUri": {
                                                    "value": "https://api.powerplatform.com/"
                                                },
                                                "loginUri": {
                                                    "value": "https://login.windows.net"
                                                },
                                                "loginUriAAD": {
                                                    "value": "https://login.windows.net"
                                                }
                                            }
                                        },
                                        "uiDefinition": {
                                            "displayName": "Sign in with your Microsoft Entra ID",
                                            "description": "Sign in with your Microsoft Entra ID",
                                            "tooltip": "Provide Microsoft Entra ID",
                                            "constraints": {
                                                "required": "true"
                                            }
                                        }
                                    },
                                    "connectionType": {
                                        "type": "string",
                                        "uiDefinition": {
                                            "displayName": "Connection Type",
                                            "description": "Connection Type",
                                            "constraints": {
                                                "required": "false",
                                                "hidden": "true"
                                            }
                                        }
                                    }
                                },
                                "metadata": {
                                    "allowSharing": false
                                }
                            }
                        ]
                    },
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Enables desktop flows (previously called UI flows)"
                }
            },
            {
                "name": "shared_uipathorchestrator",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "UiPath Orchestrator",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/uipathorchestrator/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Run automations in UiPath Cloud Orchestrator."
                }
            },
            {
                "name": "shared_usb4sap",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "USB4SAP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/usb4sap/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Universal Synch Bridge for SAP: One access point for all SAP integration, analytics and UI needs. Simplify modern analytics, apps and automations. Provision SAP data, insights and automation On-demand."
                }
            },
            {
                "name": "shared_usbanktreasurymanage",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "U.S. Bank Treasury Management",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/usbanktreasurymanage/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "U.S. Bank payments and treasury banking APIs."
                }
            },
            {
                "name": "shared_uservoice",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "UserVoice",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1665/1.0.1665.3487/uservoice/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "UserVoice is a product management and customer support tool that allows businesses to build a suggestions portal for their users to submit feature ideas, build a ticketing system for customer support and build articles knowledge base for users."
                }
            },
            {
                "name": "shared_vantage365imaging",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Vantage 365 Imaging",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1547/1.0.1547.2676/vantage365imaging/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Actions which will allow you to generate Bar Codes, graphical images, as part of your Power Apps, Automations or Logic Apps. Embed the images directly into emails or save as a file to increase the number of uses for your graphical identifiers."
                }
            },
            {
                "name": "shared_varuna",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Varuna",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1612/1.0.1612.3109/varuna/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Varuna is an online platform to develop software with which brands can manage their sales, service and logistics processes, and to provide all services needed for the complete digitalization of these processes. Connect to Varuna to manage your business. You can create, delete, update and use your specific documents in Varuna to automate your business."
                }
            },
            {
                "name": "shared_vatcheckapiip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "vatcheckapi",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1659/1.0.1659.3460/vatcheckapiip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "vatcheckapi is a free and easy-to-use VAT lookup & validation service."
                }
            },
            {
                "name": "shared_vena",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Vena Solutions",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/vena/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Vena’s interface pairs the best parts of Excel and the power of a full finance-led planning solution so you can streamline your workflows without upending your processes. Connect to Vena to import data from a file into your cube, or to export data from your cube to a file."
                }
            },
            {
                "name": "shared_ventipixassetandinventory",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Ventipix Asset and Inventory",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/ventipixassetandinventory/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector enables you to add asset or inventory data to your account, or for use with other flows."
                }
            },
            {
                "name": "shared_verified",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Verified",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/verified/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector for the Verified API to enable the creation of custom document signing processes."
                }
            },
            {
                "name": "shared_viafirma",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Viafirma",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1637/1.0.1637.3300/viafirma/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Send sign requests to others, save your signed documents and much more thanks to Viafirma's connector"
                }
            },
            {
                "name": "shared_videoindexer-v2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Video Indexer (V2)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/videoindexer-v2/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Easily extract insights from your videos and quickly enrich your applications to enhance discovery and engagement. Use the Video Indexer connector to turn your videos into insights."
                }
            },
            {
                "name": "shared_vimeo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Vimeo",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1537/1.0.1537.2613/vimeo/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Vimeo is a powerful tool for video management, marketing, and analytics all in one place."
                }
            },
            {
                "name": "shared_vineforce",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Vineforce",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1656/1.0.1656.3432/vineforce/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Vineforce is a remote workplace tool built for Microsoft 365 users. It transforms the platform into one cohesive toolkit to help you get more done, experience less burnout, and feel more connected with your teammates."
                }
            },
            {
                "name": "shared_virustotal",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Virus Total",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/virustotal/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Virus Total is an online service that analyzes suspicious files and URLs to detect types of malware and malicious content using antivirus engines and website scanners. It provides an API that allows users to access the information generated by VirusTotal."
                }
            },
            {
                "name": "shared_visualstudioteamservices",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Azure DevOps",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/olshyron/aadil_plugins/1.0.1667.3502/vsts/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Azure DevOps provides services for teams to share code, track work, and ship software - for any language, all in a single package. It's the perfect complement to your IDE."
                }
            },
            {
                "name": "shared_vitacloudquotes",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "VitaCloud Quotes",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1632/1.0.1632.3274/vitacloudquotes/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "A daily dose of inspirational quotes delivered to you application or website. Choose from a variety of themes and authors."
                }
            },
            {
                "name": "shared_vocean",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Vocean",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1643/1.0.1643.3333/vocean/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Vocean is the space for co-creation. Here you can collaborate with many, or few, individuals. With Vocean you can innovate together by gathering ideas, develop and evaluate them. Connect to Vocean to get informed about new insights, or retrieve insights gathered."
                }
            },
            {
                "name": "shared_voicerss",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "VoiceRSS (Independent Pubisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/voicerss/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Voice RSS Text-to-Speech (TTS) allows conversion of textual content to speech easier than ever."
                }
            },
            {
                "name": "shared_vonage",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Vonage",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/vonage/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Vonage API Platform enables you to add communications within the context of your applications, including SMS, Voice and Chat. Sign up for a Nexmo account here - https://www.vonage.com/"
                }
            },
            {
                "name": "shared_waaila",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Waaila",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/waaila/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Waaila is a comprehensive application for automatic data quality monitoring, supported by global community of hundreds of analysts. It helps to prevent disastrous scenarios caused by poor data quality and measurement."
                }
            },
            {
                "name": "shared_waybackmachineip",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Wayback Machine (Independent Publisher)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1646/1.0.1646.3354/waybackmachineip/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Wayback Machine is a digital archive of the World Wide Web and it allows the user to go \"back in time\" and see how websites looked in the past."
                }
            },
            {
                "name": "shared_waywedo",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Way We Do",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1559/1.0.1559.2723/waywedo/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Way We Do enables teams to actively use repeatable policies, procedures, processes and playbooks in their day to day workflows to increase efficiency, quality and compliance."
                }
            },
            {
                "name": "shared_wdatp",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Microsoft Defender ATP",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/wdatp/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Microsoft Defender ATP is a unified platform for preventative protection, post-breach detection, automated investigation, and response. Read more about it here: http://aka.ms/wdatp"
                }
            },
            {
                "name": "shared_webcontents",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HTTP with Microsoft Entra ID (preauthorized)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/webcontents/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use the HTTP connector to fetch resources from various Web services, authenticated by Microsoft Entra ID, or from an on-premise web service."
                }
            },
            {
                "name": "shared_webcontentsv2",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "HTTP With Microsoft Entra ID",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/webcontentsv2/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Use the HTTP connector to fetch resources from various Web services, authenticated by Microsoft Entra ID, or from an on-premise web service."
                }
            },
            {
                "name": "shared_webex",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Webex",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/webex/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Webex enables continuous teamwork with video meetings, group messaging, file sharing, and white boarding. Always available. Cisco secure. With the Webex connector, you can send and receive messages, manage files, and manage spaces and teams."
                }
            },
            {
                "name": "shared_webmerge",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Formstack Documents",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/webmerge/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Automatically populate templates with data from your favorite cloud apps. Never copy & paste again!"
                }
            },
            {
                "name": "shared_wendocslinker",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WenDocs Linker",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/wendocslinker/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect to WenDocs Publish API Service. Empowers registered users to call service to assemble WenDocs template(made by our Word add-in: Wendocs Template Designer) and json data, then publish to Word, PDF, HTML formats. By integrating with other connecters, it is easy to produce documents driven by data automatically, like a welcome letter, resume, business report..."
                }
            },
            {
                "name": "shared_withoutwireinventory",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WithoutWire Inventory Platform",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1588/1.0.1588.2938/withoutwireinventory/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The connector contains methods to connect WithoutWire for move requests, order fullfillment requests, adjustments, audits, and allocation as well as any inventory management needs"
                }
            },
            {
                "name": "shared_witivio",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Witivio",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/v-sriyen/PreviewJan17/1.0.1617.3171/witivio/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Build advanced virtual agent with the power of Witivio 365"
                }
            },
            {
                "name": "shared_woocommerce",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WooCommerce",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1639/1.0.1639.3319/woocommerce/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "WooCommerce is a free, open-source commerce platform for WordPress. It empowers anyone, anywhere, to sell anything – with unlimited extensibility, flexibility, and control."
                }
            },
            {
                "name": "shared_wordonlinebusiness",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Word Online (Business)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1664/1.0.1664.3477/wordonlinebusiness/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Word Online (Business) connector lets you work with Word files in document libraries supported by Microsoft Graph (OneDrive for Business, SharePoint Online Sites, and Office 365 Groups)."
                }
            },
            {
                "name": "shared_wordpress",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WordPress",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1542/1.0.1542.2635/wordpress/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "WordPress is web software you can use to create a beautiful website, blog, or app."
                }
            },
            {
                "name": "shared_workdayhcm",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Workday HCM",
                    "iconUri": "https://connectoricons-prod.azureedge.net/workdayhcm/icon_1.0.1304.1878.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Workday HCM contains operations that expose Workday Human Capital Management Business Services data, including Employee, Contingent Worker and Organization information."
                }
            },
            {
                "name": "shared_workpoint",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WorkPoint",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1617/1.0.1617.3171/workpoint/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "WorkPoint 365 business-solution makes it easy to manage critical processes."
                }
            },
            {
                "name": "shared_workspan",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WorkSpan",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1584/1.0.1584.2879/workspan/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "WorkSpan is a collaborative platform to plan, execute, and drive revenue with partners. Manage your partner programs and partner initiatives on WorkSpan, and connect seamlessly with internal and partner applications. You can integrate your CRM, Partner Center, Collaboration tools and Productivity tools to WorkSpan."
                }
            },
            {
                "name": "shared_wpformsbyreenhancedl",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WPForms by Reenhanced LLC",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1669/1.0.1669.3522/wpformsbyreenhancedl/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connect your WordPress forms powered by WPForms to the Power Platform."
                }
            },
            {
                "name": "shared_wqrmriskforecastserv",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "WQRM Risk Forecast Services",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1631/1.0.1631.3267/wqrmriskforecastserv/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "To provide data, analyze and forecast for financial risks"
                }
            },
            {
                "name": "shared_xbridgerdocumentmanager",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Xbridger Document Manager",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1580/1.0.1580.2838/xbridgerdocumentmanager/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "With this connector you can merge documents, convert documents from one format to another, create modern pages from Word document and do much more."
                }
            },
            {
                "name": "shared_xooablockchain",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Xooa Blockchain Database",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/xooablockchain/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Xooa makes it easy to use blockchain by eliminating common barriers. By gaining an enterprise blockchain platform, you can start leveraging the capabilities of blockchain almost instantly. The Xooa Ledger Database (XLDB) allows you to use blockchain like a simple database. Storing, retrieving, and querying entries without needing to write a smart contract. All you need is a Xooa account. This connector completes the picture by providing access to this database. The current state of a given entry is represented by the World State (a NoSQL database). Because blockchain is append only, the transactions that led to the current state of the entry are stored in the ledger. An entry must take the form of key-value pair where the key uniquely identifies the entry and value can take the form of a JSON object."
                }
            },
            {
                "name": "shared_xooadb",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Xooa Blockchain Smart Contract",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1654/1.0.1654.3410/xooadb/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Xooa makes it easy to use blockchain by eliminating common barriers. A blockchain platform as a service (PaaS) provides an enterprise blockchain. The connector provides an immutable ledger and a private blockchain infrastructure. You control who can view and participate in the ledger, and you can shift your data to your own network at any time."
                }
            },
            {
                "name": "shared_xpertdoc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Xpertdoc (Deprecated)",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/v-sriyen/clearText/1.0.1641.3316/xpertdoc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Xpertdoc enables business users to simplify, optimize and automate consistent document generation processes, leveraging Microsoft Dynamics 365 and external data sources as well as seamless integrations to leading applications. Our robust and user-friendly features let you easily create, generate, manage, store, deliver and e-sign business-critical documents like quotes, proposals, contracts, invoices and more without code."
                }
            },
            {
                "name": "shared_yakchat",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "YakChat",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/yakchat/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connector to send and receive SMS and MMS using your YakChat numbers. YakChat adds SMS and MMS to Microsoft Teams so that you can connect instantly with your customers and co-workers using text messaging."
                }
            },
            {
                "name": "shared_yammer",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Viva Engage",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1666/1.0.1666.3495/yammer/icon.png",
                    "tier": "Standard",
                    "isCustomApi": false,
                    "description": "Viva Engage is a leading social network for businesses to get work done smarter and faster. Connect to Viva Engage to access conversations in your enterprise network."
                }
            },
            {
                "name": "shared_yarado",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Yarado",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/yarado/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Yarado connector lets users list down robots and tasks belonging to their organisation and schedule a single task run."
                }
            },
            {
                "name": "shared_yeeflow",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Yeeflow",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1644/1.0.1644.3342/yeeflow/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Yeeflow is a no-code application development platform that empowers you to build enterprise-class applications that run on mobile, tablet, and web. Create custom forms, configure workflows, build informative dashboard, and get your app up and running in minutes."
                }
            },
            {
                "name": "shared_yeelight",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Yeelight",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/yeelight/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Yeelight allows you to control the settings of compatible devices for smart lighting applications."
                }
            },
            {
                "name": "shared_zahara",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zahara",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1554/1.0.1554.2707/zahara/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Zahara is a complete purchase management platform enabling paperless approvals for supplier invoices and purchase requisition."
                }
            },
            {
                "name": "shared_zanranscaffolder",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zanran Scaffolder",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/zanranscaffolder/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "The Zanran Scaffolder extracts tables and text from PDF or image files. Tables are extracted as Excel or XML, text as XML. The Scaffolder is best for reports like financial statements, scientific papers, brokers reports... Initially, you can test your documents using the manual, anonymous, practice site: www.zanrandemoapi.com"
                }
            },
            {
                "name": "shared_zendesk",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zendesk",
                    "iconUri": "https://connectoricons-prod.azureedge.net/u/olshyron/aadil_plugins/1.0.1667.3502/zendesk/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Zendesk builds software for better customer relationships. With multiple products in its portfolio, Zendesk provides a customer service and support ticketing platform that gives businesses the ability to handle customer calls, emails, and other technical inquiries from a unified interface."
                }
            },
            {
                "name": "shared_zenkraft",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zenkraft",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/zenkraft/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Connects to Zenkraft API to create/manage/track shipments from 50+ Different carriers"
                }
            },
            {
                "name": "shared_zeptomail",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zoho ZeptoMail",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1636/1.0.1636.3297/zeptomail/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "ZeptoMail is a transactional email sending service from Zoho. You can directly send these automated emails from your application or website."
                }
            },
            {
                "name": "shared_zippydoc",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "ZIPPYDOC",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1645/1.0.1645.3345/zippydoc/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "This connector allows you to run preconfigured data transformations on the ZIPPYDOC business automation platform. You can either select a third-party data transformer and have it transform your data, or alternatively you can create your own data transformer on the ZIPPYDOC platform. ZIPPYDOC and its community offers a wide range of pre-built transformations for tables, text and code."
                }
            },
            {
                "name": "shared_zohomail",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zoho Mail",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1673/1.0.1673.3557/zohomail/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Secure business email for your organization"
                }
            },
            {
                "name": "shared_zohosign",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zoho Sign",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1632/1.0.1632.3274/zohosign/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Zoho's Sign is a complete digital signature app that helps digitally sign business documents with complete security and reliability"
                }
            },
            {
                "name": "shared_zreports",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "zReports",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1549/1.0.1549.2680/zreports/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "zReports integrates stock control and accounting with data from your restaurant/bar POS system. You can upload data and receive notifications about activity in your account."
                }
            },
            {
                "name": "shared_zuvadocai",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zuva DocAI",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1667/1.0.1667.3506/zuvadocai/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Embed Contracts AI into your product workflows using Zuva DocAI. No need for AI development from the ground up, leverage the DocAI APIs to extract information from your contracts."
                }
            },
            {
                "name": "shared_zvanuparvaldnieks",
                "type": "/providers/Microsoft.PowerApps/apis",
                "properties": {
                    "displayName": "Zvanu Parvaldnieks",
                    "iconUri": "https://connectoricons-prod.azureedge.net/releases/v1.0.1638/1.0.1638.3308/zvanuparvaldnieks/icon.png",
                    "tier": "Premium",
                    "isCustomApi": false,
                    "description": "Zvanu Parvaldnieks is a mobile virtual PBX service for LMT mobile subscribers. This connector lets users to easily send all the data and events about calls, voicemails, contacts and configuration to other services."
                }
            }
        ]   
    }

}

module.exports = {
    connectors
};