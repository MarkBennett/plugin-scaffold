function createEvent(changes = {}) {
    return {
        distinct_id: '007',
        ip: '127.128.129.130',
        site_url: 'http://localhost:8000/',
        team_id: 13,
        now: '2020-11-26T12:58:57.367Z',
        event: 'EVENT_TYPE',
        sent_at: '2020-11-26T12:58:58.453Z',
        timestamp: '2020-11-26T12:58:58.453Z',
        ...changes,
    }
}

function createPageview() {
    return createEvent({
        event: '$pageview',
        properties: {
            $os: 'Mac OS X',
            $lib: 'web',
            $host: 'localhost:8000',
            $time: 1606383312.494,
            token: 'mre13a_SMBv9EwHAtdtTyutyy6AfO00OTPwaalaHPGgKLS',
            $browser: 'Chrome',
            $user_id: '3erf45reXthrGser675waeHFAsbv4AsadfR',
            $pathname: '/instance/status',
            $device_id: '17554768afe5cb-0fc915d2a583cf-166f6152-1ea000-175543686ffdc5',
            $insert_id: 'hgu2p36uvlc1b9dg',
            distinct_id: 'scbbAqF7uyrMmamV4QBzcA1rrm9wHNISdFweZz-mQ0',
            $current_url: 'http://localhost:8000/instance/status',
            $lib_version: '1.7.0-beta.1',
            $screen_width: 1790,
            $screen_height: 1120,
            posthog_version: '1.17.0',
            $browser_version: 86,
            $initial_referrer: '$direct',
            has_slack_webhook: false,
            $active_feature_flags: ['navigation-1775', 'session-recording-player'],
            $initial_referring_domain: '$direct',
        },
    })
}

function createIdentify() {
    return createEvent({
        event: '$identify',
        $set: {
            $os: 'Mac OS X',
            email: 'test@posthog.com',
            $browser: 'Chrome',
            $browser_version: 86,
            $initial_referrer: '$direct',
            $initial_referring_domain: '$direct',
        },
    })
}

function clone(object) {
    return JSON.parse(JSON.stringify(object))
}

let testMeta = {}
resetMeta({})

function getMeta() {
    return testMeta
}

function createCache() {
    const cache = {}
    return {
        set: (key, value) => {
            cache[key] = value
        },
        get: async (key, defaultValue) => {
            if (typeof cache[key] === 'undefined') {
                return defaultValue
            }
            return cache[key]
        },
    }
}

function resetMeta(meta) {
    testMeta = {
        config: {},
        cache: createCache(),
        storage: createCache(),
        global: {},
        attachments: {},
        ...meta,
    }
    return testMeta
}

module.exports = {
    createEvent, createPageview, createIdentify, clone, getMeta, createCache, resetMeta
}
