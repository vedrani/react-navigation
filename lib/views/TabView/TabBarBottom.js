'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactNative = require('react-native');

var _TabBarIcon = require('./TabBarIcon');

var _TabBarIcon2 = _interopRequireDefault(_TabBarIcon);

var _SafeAreaView = require('../SafeAreaView');

var _SafeAreaView2 = _interopRequireDefault(_SafeAreaView);

var _withOrientation = require('../withOrientation');

var _withOrientation2 = _interopRequireDefault(_withOrientation);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var majorVersion = parseInt(_reactNative.Platform.Version, 10);
var isIos = _reactNative.Platform.OS === 'ios';
var isIOS11 = majorVersion >= 11 && isIos;
var isTablet =
  _reactNative.Dimensions.get('window').height /
    _reactNative.Dimensions.get('window').width <
  1.6;
var defaultMaxTabBarItemWidth = 125;

var TabBarBottom = (function(_React$PureComponent) {
  _inherits(TabBarBottom, _React$PureComponent);

  function TabBarBottom() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabBarBottom);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref =
          TabBarBottom.__proto__ ||
          Object.getPrototypeOf(TabBarBottom)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this._renderLabel = function(scene) {
        var _this$props = _this.props,
          position = _this$props.position,
          navigation = _this$props.navigation,
          activeTintColor = _this$props.activeTintColor,
          inactiveTintColor = _this$props.inactiveTintColor,
          labelStyle = _this$props.labelStyle,
          showLabel = _this$props.showLabel,
          showIcon = _this$props.showIcon,
          isLandscape = _this$props.isLandscape,
          allowFontScaling = _this$props.allowFontScaling;

        if (showLabel === false) {
          return null;
        }
        var index = scene.index;
        var routes = navigation.state.routes;
        // Prepend '-1', so there are always at least 2 items in inputRange

        var inputRange = [-1].concat(
          _toConsumableArray(
            routes.map(function(x, i) {
              return i;
            })
          )
        );
        var outputRange = inputRange.map(function(inputIndex) {
          return inputIndex === index ? activeTintColor : inactiveTintColor;
        });
        var color = position.interpolate({
          inputRange: inputRange,
          outputRange: outputRange,
        });

        var tintColor = scene.focused ? activeTintColor : inactiveTintColor;
        var label = _this.props.getLabel(
          _extends({}, scene, { tintColor: tintColor })
        );

        if (typeof label === 'string') {
          return React.createElement(
            _reactNative.Animated.Text,
            {
              style: [
                styles.label,
                { color: color },
                showIcon && _this._shouldUseHorizontalTabs()
                  ? styles.labelBeside
                  : styles.labelBeneath,
                labelStyle,
              ],
              allowFontScaling: allowFontScaling,
            },
            label
          );
        }

        if (typeof label === 'function') {
          return label(_extends({}, scene, { tintColor: tintColor }));
        }

        return label;
      }),
      (_this._renderIcon = function(scene) {
        var _this$props2 = _this.props,
          position = _this$props2.position,
          navigation = _this$props2.navigation,
          activeTintColor = _this$props2.activeTintColor,
          inactiveTintColor = _this$props2.inactiveTintColor,
          renderIcon = _this$props2.renderIcon,
          showIcon = _this$props2.showIcon,
          showLabel = _this$props2.showLabel;

        if (showIcon === false) {
          return null;
        }
        return React.createElement(_TabBarIcon2.default, {
          position: position,
          navigation: navigation,
          activeTintColor: activeTintColor,
          inactiveTintColor: inactiveTintColor,
          renderIcon: renderIcon,
          scene: scene,
          style:
            showLabel && _this._shouldUseHorizontalTabs() ? {} : styles.icon,
        });
      }),
      (_this._renderTestIDProps = function(scene) {
        var testIDProps =
          _this.props.getTestIDProps && _this.props.getTestIDProps(scene);
        return testIDProps;
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  // See https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/UIKitUICatalog/UITabBar.html

  _createClass(TabBarBottom, [
    {
      key: '_tabItemMaxWidth',
      value: function _tabItemMaxWidth() {
        var _props = this.props,
          tabStyle = _props.tabStyle,
          layout = _props.layout;

        var maxTabBarItemWidth = void 0;

        var flattenedTabStyle = _reactNative.StyleSheet.flatten(tabStyle);

        if (flattenedTabStyle) {
          if (typeof flattenedTabStyle.width === 'number') {
            maxTabBarItemWidth = flattenedTabStyle.width;
          } else if (
            typeof flattenedTabStyle.width === 'string' &&
            flattenedTabStyle.endsWith('%')
          ) {
            var width = parseFloat(flattenedTabStyle.width);
            if (Number.isFinite(width)) {
              maxTabBarItemWidth = layout.width * (width / 100);
            }
          } else if (typeof flattenedTabStyle.maxWidth === 'number') {
            maxTabBarItemWidth = flattenedTabStyle.maxWidth;
          } else if (
            typeof flattenedTabStyle.maxWidth === 'string' &&
            flattenedTabStyle.endsWith('%')
          ) {
            var _width = parseFloat(flattenedTabStyle.maxWidth);
            if (Number.isFinite(_width)) {
              maxTabBarItemWidth = layout.width * (_width / 100);
            }
          }
        }

        if (!maxTabBarItemWidth) {
          maxTabBarItemWidth = defaultMaxTabBarItemWidth;
        }

        return maxTabBarItemWidth;
      },
    },
    {
      key: '_shouldUseHorizontalTabs',
      value: function _shouldUseHorizontalTabs() {
        var routes = this.props.navigation.state.routes;
        var _props2 = this.props,
          isLandscape = _props2.isLandscape,
          layout = _props2.layout,
          adaptive = _props2.adaptive,
          tabStyle = _props2.tabStyle;

        if (!adaptive) {
          return false;
        }

        var tabBarWidth = layout.width;
        if (tabBarWidth === 0) {
          return isTablet;
        }

        var isHeightConstrained = layout.height < 500;
        if (isHeightConstrained) {
          return isLandscape;
        } else {
          var maxTabBarItemWidth = this._tabItemMaxWidth();
          return routes.length * maxTabBarItemWidth <= tabBarWidth;
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
          position = _props3.position,
          navigation = _props3.navigation,
          jumpToIndex = _props3.jumpToIndex,
          getOnPress = _props3.getOnPress,
          getTestIDProps = _props3.getTestIDProps,
          activeBackgroundColor = _props3.activeBackgroundColor,
          inactiveBackgroundColor = _props3.inactiveBackgroundColor,
          style = _props3.style,
          animateStyle = _props3.animateStyle,
          tabStyle = _props3.tabStyle,
          isLandscape = _props3.isLandscape,
          layout = _props3.layout;
        var routes = navigation.state.routes;

        var previousScene = routes[navigation.state.index];
        // Prepend '-1', so there are always at least 2 items in inputRange
        var inputRange = [-1].concat(
          _toConsumableArray(
            routes.map(function(x, i) {
              return i;
            })
          )
        );

        var isHeightConstrained =
          layout.height === 0 ? !isTablet : layout.height < 500;
        var tabBarStyle = [
          styles.tabBar,
          this._shouldUseHorizontalTabs() && isHeightConstrained
            ? styles.tabBarCompact
            : styles.tabBarRegular,
          style,
        ];

        return React.createElement(
          _reactNative.Animated.View,
          { style: animateStyle },
          React.createElement(
            _SafeAreaView2.default,
            {
              style: tabBarStyle,
              forceInset: { bottom: 'always', top: 'never' },
            },
            routes.map(function(route, index) {
              var focused = index === navigation.state.index;
              var scene = { route: route, index: index, focused: focused };
              var _onPress = getOnPress(previousScene, scene);
              var outputRange = inputRange.map(function(inputIndex) {
                return inputIndex === index
                  ? activeBackgroundColor
                  : inactiveBackgroundColor;
              });
              var backgroundColor = position.interpolate({
                inputRange: inputRange,
                outputRange: outputRange,
              });

              var justifyContent = _this2.props.showIcon
                ? 'flex-end'
                : 'center';
              var extraProps = _this2._renderTestIDProps(scene) || {};
              var testID = extraProps.testID,
                accessibilityLabel = extraProps.accessibilityLabel;

              return React.createElement(
                _reactNative.TouchableWithoutFeedback,
                {
                  key: route.key,
                  testID: testID,
                  accessibilityLabel: accessibilityLabel,
                  onPress: function onPress() {
                    return _onPress
                      ? _onPress({
                          previousScene: previousScene,
                          scene: scene,
                          jumpToIndex: jumpToIndex,
                        })
                      : jumpToIndex(index);
                  },
                },
                React.createElement(
                  _reactNative.Animated.View,
                  { style: [styles.tab, { backgroundColor: backgroundColor }] },
                  React.createElement(
                    _reactNative.View,
                    {
                      style: [
                        styles.tab,
                        _this2._shouldUseHorizontalTabs()
                          ? styles.tabLandscape
                          : styles.tabPortrait,
                        tabStyle,
                      ],
                    },
                    _this2._renderIcon(scene),
                    _this2._renderLabel(scene)
                  )
                )
              );
            })
          )
        );
      },
    },
  ]);

  return TabBarBottom;
})(React.PureComponent);

TabBarBottom.defaultProps = {
  activeTintColor: '#3478f6', // Default active tint color in iOS 10
  activeBackgroundColor: 'transparent',
  inactiveTintColor: '#929292', // Default inactive tint color in iOS 10
  inactiveBackgroundColor: 'transparent',
  showLabel: true,
  showIcon: true,
  allowFontScaling: true,
  adaptive: isIOS11,
};

var styles = _reactNative.StyleSheet.create({
  tabBar: {
    backgroundColor: '#F7F7F7', // Default background color in iOS 10
    borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .3)',
    flexDirection: 'row',
  },
  tabBarCompact: {
    height: 29,
  },
  tabBarRegular: {
    height: 49,
  },
  tab: {
    flex: 1,
    alignItems: isIos ? 'center' : 'stretch',
  },
  tabPortrait: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  tabLandscape: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    flexGrow: 1,
  },
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  labelBeneath: {
    fontSize: 10,
    marginBottom: 1.5,
  },
  labelBeside: {
    fontSize: 13,
    marginLeft: 20,
  },
});

exports.default = (0, _withOrientation2.default)(TabBarBottom);
