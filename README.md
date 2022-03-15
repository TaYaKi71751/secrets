# corcc/secrets
## Usage
```
    - id: slack-channel
      uses: corcc/secrets@main
      with:
        secrets: |
          ${{ toJson(secrets) }}"
        name: "SLACK_CHANNEL_${{ matrix.channel }}"
    - id: slack-token
      uses: corcc/secrets@main			
      with:
        secrets: |
          ${{ toJson(secrets) }}"
        name: "SLACK_TOKEN_${{ matrix.application }}"
    - if: ${{ steps.slack-channel.outputs.exists && steps.slack-token.outputs.exists }}
      env:
        SLACK_CHANNEL: ${{ steps.slack-channel.outputs.value }}
        SLACK_TOKEN: ${{ steps.slack-token.outputs.value }}
      run: yarn send:slack:test
```
