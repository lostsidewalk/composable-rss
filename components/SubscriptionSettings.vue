<template>
    <div class="card m-4 elevation-6">
        <div class="m-2 settings-option">
            {{ $t('subscriptionStatus', {
                status: subscriptionStatus,
                started: subscriptionStarted
            }) }}
        </div>
        <div class="card-text">
            <p v-if="isCanceled">
                {{ $t('yourSubscriptionWasCanceled') }}
            </p>

            <div v-if="isActive">
                <label for="subscription-current-period" class="settings-label">
                    {{ $t('currentPeriod') }}
                </label>
                <input variant="solo-filled" name="subscription-current-period" type="text"
                    :placeholder="subscriptionCurrentPeriod" />
            </div>

            <div v-if="hasEnded">
                <label for="subscription-ended-at" class="settings-label">
                    {{ $t('endedAt') }}
                </label>
                <input variant="solo-filled" name="subscription-ended-at" type="text" :placeholder="subscriptionEndedAt" />
            </div>

            <div v-if="isCanceled">
                <label for="subscription-ended-at" class="settings-label">
                    {{ $t('willEndAt') }}
                </label>
                <input variant="solo-filled" name="subscription-ended-at" type="text"
                    :placeholder="subscriptionCurrentPeriodEnd" />
            </div>

            <div v-if="hasLastInvoice" class="m-4 d-flex flex-col text-left">
                <label class="settings-label">{{ $t('mostRecentInvoice') }} ({{ lastInvoiceCreated }})</label>
                <label class="settings-label">{{ $t('statusColon') }} {{ lastInvoiceStatus }}</label>
                <label class="settings-label">{{ $t('amountDueColon') }} {{ amountDue }}</label>
                <label class="settings-label">{{ $t('amountPaidColon') }} {{ amountPaid }}</label>
                <label class="settings-label">{{ $t('amountRemainingColon') }} {{ amountRemaining }}</label>
                <label class="settings-label">{{ $t('customerEmailAddressColon') }} {{ customerEmailAddress }}</label>
                <label class="settings-label">{{ $t('customerNameColon') }} {{ customerName }}</label>
                <label class="settings-label">
                    {{ $t('invoiceUrlColon') }} <a :href="hostedInvoiceUrl" target="_blank" class="text">{{ $t('clickHere')
                    }}</a>
                </label>
                <label class="settings-label">{{ $t('productColon') }} {{ productDescription }}</label>
            </div>
        </div>
        <div class="card-actions">
            <button class="text settings-button" v-if="subscription && !isCanceled" id="cancelSubscription" size="small"
                @click="$emit('cancelSubscription')">{{ $t('cancelSubscription') }}</button>
            <button class="settings-button" v-if="subscription && isCanceled" id="resumeSubscription" size="small"
                @click="$emit('resumeSubscription')">{{ $t('resumeSubscription') }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        subscription: { type: Object, required: true },
    },
    computed: {
        productDescription: function () {
            return this.subscription.lastInvoice.productDescription;
        },
        hostedInvoiceUrl: function () {
            return this.subscription.lastInvoice.hostedUrl;
        },
        customerEmailAddress: function () {
            return this.subscription.lastInvoice.customerEmail;
        },
        customerName: function () {
            return this.subscription.lastInvoice.customerName;
        },
        amountDue: function () {
            return this.toLocalCurrency(this.subscription.lastInvoice.amountDue);
        },
        amountPaid: function () {
            return this.toLocalCurrency(this.subscription.lastInvoice.amountPaid);
        },
        amountRemaining: function () {
            return this.toLocalCurrency(this.subscription.lastInvoice.amountRemaining);
        },
        lastInvoiceCreated: function () {
            return this.toLocalDate(this.subscription.lastInvoice.created);
        },
        lastInvoiceStatus: function () {
            return this.subscription.lastInvoice.status;
        },
        subscriptionStarted: function () {
            return this.toLocalDate(this.subscription.startDate);
        },
        subscriptionCurrentPeriod: function () {
            if (!this.subscription) {
                return null;
            } else {
                let startDate = this.toLocalDate(this.subscription.currentPeriodStart);
                let endDate = this.toLocalDate(this.subscription.currentPeriodEnd);
                return startDate + ' - ' + endDate;
            }
        },
        subscriptionCurrentPeriodEnd: function () {
            return this.toLocalDate(this.subscription.currentPeriodEnd);
        },
        subscriptionEndedAt: function () {
            return this.toLocalDate(this.subscription.endedAt);
        },
        subscriptionStatus: function () {
            return this.subscription.status;
        },
        isActive: function () {
            return this.subscription.status === "active";
        },
        isCanceled: function () {
            return this.subscription.cancelAtPeriodEnd === true;
        },
        hasEnded: function () {
            return this.subscription.endedAt;
        },
        hasLastInvoice: function () {
            return this.subscription.lastInvoice;
        },
    },
    emits: ["cancelSubscription", "resumeSubscription"],
    setup() {
        const currencyFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        // 
        function toLocalDate(epochTime) {
            return new Date(epochTime * 1000).toLocaleDateString();
        }
        // 
        function toLocalCurrency(amount) {
            return currencyFormatter.format(amount / 100);
        }

        return {
            toLocalDate,
            toLocalCurrency,
        }
    },
}
</script>
