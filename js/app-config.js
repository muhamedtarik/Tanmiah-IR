var appConfig = {
    OverView: {
        Visible: true,
        Ticker: true,
        ExcludeTickerTabs:['5Y'],
        Calendar: true,
        CalendarItems: 2,
        AnnualReport: true,
        AnnualReportItems: 2,
        Disclosures: true,
        DisclosuresItems: 3,
        MarketValues: {
            Visible: true,
            Volume: true,
            Turnover: true,
            Transactions: true,
            AverageVolume: true,
            AverageTurnover: true,
            AverageTransactions: true,
            Change: true,
        },
        FinancialRatios: true,
        ExcludeFromFinancialRatios: [],
        CorporateActions: true,
        LatestNews: true,
        LatestNewsItems: 3,
        AnalystEstimates: true,
        AnalystEstimatesItems: 3,
        CorporateActions: {
            Visible: true,
            RecentChanges: {
                Visible: true,
                PreviousCapital: true,
                PreviousNoShares: true,
                CapitalChange: true,
                CurrentCapital: true,
                CurrentShares: true,
                Type: true,
                Announcement: false,
            },
            RecentDividends: {
                Visible: true,
                Capital: true,
                Shares: true,
                DividendsPerCapital: true,
                CashDividend: true,
                DividendPolicy: true,
                Type: true,
                Announcement: true,
            }

        },
        Contact: {
            Visible: true,
            Address: true,
            Phone: true,
            Fax: true,
            WebSite: true,
            DwonloadApp: {
                Visible: true,
                iOS: true,
                Android: true,
            }
        }
    },
    Profile: {
        Visible: true,
        Business: true,
        Overview: true,
        CurrencyConversion: true,
        Charts: true,
        FinancialsHighlights: true,
        ExcludeFromFinancialField: [],
        ExcludeFromFinancialYear: [],
        StockInfo: {
            Visible: true,
            SharesOutstanding: true,
            ParValue: true,
            BookValue: true,
            MarketCap: true, 
        },
        TradingData: {
            Visible: true,
            TradingMarket: true,
            FiscalYearEnd: true,
            FreeFloat: true,
            FreeFloatPercent: true,
            WeightinIndexPercent: true,
            AverageVolume: true,
            AverageTransactions: true,
        },
        MajorShareholders: {
            Visible: true,
            NumberShares: true,
            Holding: true,

        },
        Milestones: true,
        MilestonesItems : 100
    }
};