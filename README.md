# dirty json cli

This tool wrap dirty-json into cli tool

## Setup

  git clone `this repo`

  cd dirty-json-cli

  npm install -g

## Test

case 1

    echo "{ test: 'this is a test'}" | dirty-json

case 2

    # strip jsonp function wrapper:
    tail -n +6  ./test/aws_price/pricing-elb.min.js | sed 's/callback(//' | sed 's/);//' 

    # format to useful data !!
    tail -n +6  ./test/aws_price/pricing-elb.min.js | sed 's/callback(//' | sed 's/);//' | dirty-json | jq -r "."

```javascript
{
  "vers": 0.01,
  "config": {
    "currencies": [
      "USD"
    ],
    "rate": "perInstanceHour@1min",
    "regions": [
      {
        "region": "us-east-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.025"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "us-west-2",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.025"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "us-west-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.028"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "eu-west-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.028"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "eu-central-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.030"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "ap-southeast-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.028"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "ap-northeast-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.027"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "ap-southeast-2",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.028"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "ap-northeast-2",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.025"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "ap-south-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.0266"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.008"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "sa-east-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.034"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.011"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      },
      {
        "region": "us-gov-west-1",
        "types": [
          {
            "values": [
              {
                "prices": {
                  "USD": "0.032"
                },
                "rate": "perELBHour"
              },
              {
                "prices": {
                  "USD": "0.010"
                },
                "rate": "perGBProcessed"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Have Fun

- ***aws price in jsonp format***

    https://stackoverflow.com/questions/7334035/get-ec2-pricing-programmatically

- jq doc

    https://stedolan.github.io/jq/tutorial/

- do you really want this ? lol

    https://stackoverflow.com/questions/24175802/missing-quotation-marks-on-keys-in-json

- json repair is quite similar but less documentation

    wiki.postgresql.org

    https://github.com/vmx/jsonrepair

- stack overflow solution for formating ill-format JSON

    https://stackoverflow.com/questions/18280279/parsing-malformed-json-in-javascript


## Future Extension

- understand jq
    - https://programminghistorian.org/lessons/json-and-jq

- cli color
    - https://developer.atlassian.com/blog/2015/11/scripting-with-node/

- alternative for 'readline' package
    - https://www.npmjs.com/package/prompt

- tutorial
    - https://javascriptplayground.com/blog/2012/08/writing-a-command-line-node-tool/

- dirty-json lint
    - https://github.com/freethenation/durable-json-lint

## Question

    * Are there and high level command line wrapper that turns any package into cli ??
